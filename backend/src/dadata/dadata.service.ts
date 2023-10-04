import { Injectable, Logger } from '@nestjs/common';
import { catchError, lastValueFrom } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { SuggestionsDto } from './dto/suggestions.dto';
import { AxiosError } from 'axios';
import { HttpService } from '@nestjs/axios';
import { Prisma } from '@prisma/client';

const suggestionsAPIURL = `https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address`;
const dadataHeaders = {
  Authorization: `Token ${process.env.DADATA_API_KEY}`,
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

@Injectable()
export class DadataService {
  private readonly logger = new Logger(DadataService.name);
  constructor(
    private readonly prisma: PrismaService,
    private readonly httpService: HttpService,
  ) {}

  async getCitySuggestByQuery(query: string) {
    return await this.prisma.city.findFirst({ where: { query: query } });
  }

  async saveCitySuggestByQuery(query: string, data: SuggestionsDto) {
    const { suggestions } = data;
    const jsonSuggestions = suggestions as unknown as Prisma.JsonArray;
    return await this.prisma.city.create({
      data: { query, suggestions: jsonSuggestions },
    });
  }

  async fetchDadataCitySuggestions(query: string) {
    const { data } = await lastValueFrom(
      this.httpService
        .post<SuggestionsDto>(
          suggestionsAPIURL,
          {
            query,
            locations: [
              {
                country: 'Беларусь',
              },
            ],
            from_bound: { value: 'city' },
            to_bound: { value: 'settlement' },
            restrict_value: true,
          },
          {
            headers: dadataHeaders,
          },
        )
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw `An error happened when fetch Dadata City Suggestions with query=${query}`;
          }),
        ),
    );

    return data;
  }
}

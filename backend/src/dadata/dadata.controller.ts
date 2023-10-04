import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { DadataService } from './dadata.service';
import { CityDto } from './dto/city.dto';

@Controller('dadata')
export class DadataController {
  constructor(private readonly dadataService: DadataService) {}

  @Post('city')
  @HttpCode(200)
  async suggestionsCity(@Body() cityDto: CityDto) {
    const { query } = cityDto;
    const suggestCityByQuery =
      await this.dadataService.getCitySuggestByQuery(query);

    if (!suggestCityByQuery) {
      const fetchedCitySuggestions =
        await this.dadataService.fetchDadataCitySuggestions(query);
      return await this.dadataService.saveCitySuggestByQuery(
        query,
        fetchedCitySuggestions,
      );
    }
    return suggestCityByQuery;
  }
}

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
    // Проверяем есть ли запись в локальной бд
    const suggestCityByQuery =
      await this.dadataService.getCitySuggestByQuery(query);
    // Если нету - делаем запрос запрос на стороннее апи и сохраняем в локальной базе
    if (!suggestCityByQuery) {
      const fetchedCitySuggestions =
        await this.dadataService.fetchDadataCitySuggestions(query);
      return await this.dadataService.saveCitySuggestByQuery(
        query,
        fetchedCitySuggestions,
      );
    }
    // Проверяем, не старые ли данные в локальной базе, если старше 30 дней, получаем новые и обновляем
    const minus30days = new Date(new Date().setDate(new Date().getDate() - 30));
    if (suggestCityByQuery.updatedAt.getTime() < minus30days.getTime()) {
      return await this.dadataService.updateCitySuggestByQuery(
        suggestCityByQuery.id,
        query,
      );
    }
    return suggestCityByQuery;
  }
}

import { IsDate, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CurrencyDTO {
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  Cur_ID: number;
  @IsNumber()
  Cur_ParentID: number;
  @IsString()
  Cur_Code: string;
  @IsString()
  Cur_Abbreviation: string;
  @IsString()
  Cur_Name: string;
  @IsString()
  Cur_Name_Bel: string;
  @IsString()
  Cur_Name_Eng: string;
  @IsString()
  Cur_QuotName: string;
  @IsString()
  Cur_QuotName_Bel: string;
  @IsString()
  Cur_QuotName_Eng: string;
  @IsString()
  Cur_NameMulti: string;
  @IsString()
  Cur_Name_BelMulti: string;
  @IsString()
  Cur_Name_EngMulti: string;
  @IsNumber()
  Cur_Scale: number;
  @IsNumber()
  Cur_Periodicity: number;
  @IsDate()
  Cur_DateStart: Date;
  @IsDate()
  Cur_DateEnd: Date;
}

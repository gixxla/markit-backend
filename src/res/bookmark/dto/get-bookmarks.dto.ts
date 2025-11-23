import { IsNumber, IsOptional, IsString, Min } from "class-validator";
import { Type } from "class-transformer";

export default class GetBookmarksDto {
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Type(() => Number)
  limit?: number = 20;

  @IsOptional()
  @IsString()
  cursor?: string;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  categoryId?: number;

  @IsOptional()
  @IsString()
  tag?: string;
}

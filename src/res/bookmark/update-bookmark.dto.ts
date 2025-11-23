import { IsArray, IsBoolean, IsOptional, IsString, IsUrl } from "class-validator";

export default class UpdateBookmarkDto {
  @IsOptional()
  @IsUrl({}, { message: "URL 형식이 유효하지 않습니다." })
  url?: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsBoolean()
  isReadLater?: boolean;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];
}

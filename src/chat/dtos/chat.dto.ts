import { IsString, IsNumber, IsBoolean, IsOptional } from "class-validator"
export class CreateChatDto {
  @IsString()
  name: string
  @IsNumber()
  capacity: number
  @IsBoolean()
  @IsOptional()
  isActive: boolean
}
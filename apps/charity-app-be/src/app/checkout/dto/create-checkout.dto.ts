import { IsArray, IsNumber, ValidateNested, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CheckoutItemDto {
  @IsString()
  organisationId!: string;

  @IsNumber()
  quantity!: number;

  @IsNumber()
  amount!: number;

  @IsString()
  name!: string;

  @IsString()
  stripePriceId!: string;
}

export class CreateCheckoutDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CheckoutItemDto)
  items!: CheckoutItemDto[];

  @IsNumber()
  totalAmount!: number;
}
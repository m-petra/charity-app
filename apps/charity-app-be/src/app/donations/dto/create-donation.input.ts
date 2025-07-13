import { Field, InputType, Float, Int } from '@nestjs/graphql';

@InputType()
export class DonationItemInput {
  @Field(() => String)
  organisationId!: string;

  @Field(() => Int)
  quantity!: number;

  @Field(() => Float)
  amount!: number;
}

@InputType()
export class CreateDonationInput {
  @Field(() => [DonationItemInput])
  items!: DonationItemInput[];

  @Field(() => Float)
  totalAmount!: number;

  @Field(() => String)
  token!: string;
}

export interface CreateDonationServiceDto {
  items: DonationItemInput[];
  totalAmount: number;
  donorId?: string;
}
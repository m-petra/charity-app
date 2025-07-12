import { ObjectType, Field, registerEnumType, Float } from "@nestjs/graphql";
import { DonationStatus } from '@prisma/client';
import { DonationItem } from "./donation-item.entity";

registerEnumType(DonationStatus, {
  name: 'DonationStatus',
});

@ObjectType()
export class Donation {
  @Field(() => String)
  id!: string;

  @Field(() => DonationStatus)
  status!: DonationStatus;

  @Field(() => Float)
  totalAmount!: number;

  @Field(() => String, { nullable: true})
  paymentId?: string;

  @Field(() => [DonationItem])
  items!: DonationItem[];

  @Field(() => Date)
  createdAt!: Date;

  @Field(() => Date)
  updatedAt!: Date;
}

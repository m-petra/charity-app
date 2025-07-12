import { Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { Organisation } from "../../organisations/entities/organisation.entity";

@ObjectType()
export class DonationItem {
  @Field(() => String)
  id!: string;

  @Field(() => String)
  donationId!: string;

  @Field(() => String)
  organisationId!: string;

  @Field(() => Int)
  quantity!: number;

  @Field(() => Float)
  amount!: number;

  @Field(() => Organisation)
  Organisation!: Organisation;
}

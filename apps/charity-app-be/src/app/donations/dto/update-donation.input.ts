import { DonationStatus } from "@prisma/client/client";
import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class UpdateDonationInput{
  @Field(() => String)
  id!: string;

  
  @Field(() => DonationStatus)
  status!: DonationStatus;
}

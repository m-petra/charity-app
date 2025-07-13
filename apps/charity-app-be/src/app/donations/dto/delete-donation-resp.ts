import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class DeleteDonationResp {
  @Field(() => Boolean)
  success!: boolean;

  @Field(() => ID)
  donationId!: string;

  @Field(() => String, { nullable: true })
  error?: string;
}
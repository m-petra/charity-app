import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrganisationInput {
  @Field(() => String)
  id!: string;
}

import { CreateOrganisationInput } from './create-organisation.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOrganisationInput extends PartialType(
  CreateOrganisationInput
) {
  @Field(() => String)
  override id!: string;
}

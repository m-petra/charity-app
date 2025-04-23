import { Resolver, Query, Mutation, Args} from '@nestjs/graphql';
import { OrganisationsService } from './organisations.service';
import { Organisation } from './entities/organisation.entity';
import { CreateOrganisationInput } from './dto/create-organisation.input';
import { UpdateOrganisationInput } from './dto/update-organisation.input';

@Resolver(() => Organisation)
export class OrganisationsResolver {
  constructor(private readonly organisationsService: OrganisationsService) {}

  @Mutation(() => Organisation)
  createOrganisation(
    @Args('createOrganisationInput')
    createOrganisationInput: CreateOrganisationInput
  ) {
    return this.organisationsService.create(createOrganisationInput);
  }

  @Query(() => [Organisation], { name: 'organisations' })
  findAll() {
    return this.organisationsService.findAll();
  }

  @Query(() => Organisation, { name: 'organisation' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.organisationsService.findOne(id);
  }

  @Query(() => [Organisation], { name: 'searchOrganisations' })
  searchOrganisations(@Args('term', { type: () => String }) term: string) {
    return this.organisationsService.searchOrganisations(term);
  }

  @Mutation(() => Organisation)
  updateOrganisation(
    @Args('updateOrganisationInput')
    updateOrganisationInput: UpdateOrganisationInput
  ) {
    return this.organisationsService.update(
      updateOrganisationInput.id,
      updateOrganisationInput
    );
  }

  @Mutation(() => Organisation)
  removeOrganisation(@Args('id', { type: () => String }) id: string) {
    return this.organisationsService.remove(id);
  }
}

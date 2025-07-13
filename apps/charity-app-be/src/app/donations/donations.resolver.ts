import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { DonationsService } from "./donations.service";
import { Donation } from "./entities/donation.entity";
import { CreateDonationInput } from "./dto/create-donation.input";
import { UpdateDonationInput } from "./dto/update-donation.input";
import { DeleteDonationResp } from "./dto/delete-donation-resp";

@Resolver(() => Donation)
export class DonationsResolver {
  constructor(private readonly donationsService: DonationsService) {}

  @Mutation(() => Donation)
  createDonation(
    @Args("createDonationInput") createDonationInput: CreateDonationInput
  ) {
    return this.donationsService.create(createDonationInput);
  }

  @Query(() => [Donation], { name: "donations" })
  findAll() {
    return this.donationsService.findAll();
  }

  @Query(() => Donation, { name: "donation" })
  findOne(@Args("id", { type: () => String }) id: string) {
    return this.donationsService.findOne(id);
  }

  @Mutation(() => Donation)
  updateDonation(
    @Args("updateDonationInput",{ type: () => UpdateDonationInput }) updateDonationInput: UpdateDonationInput
  ) {
    return this.donationsService.update(
      updateDonationInput.id,
      updateDonationInput
    );
  }

  @Mutation(() => DeleteDonationResp)
  removeUnpaid(@Args("id", { type: () => String }) id: string) {
    return this.donationsService.removeUnpaid(id);
  }
}

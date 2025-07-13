import { Module } from "@nestjs/common";
import { CheckoutService } from "./checkout.service";
import { CheckoutController } from "./checkout.controller";
import { DonationsModule } from "../donations/donations.module";
import { FirebaseModule } from "../firebase/firebase.module";

@Module({
  imports: [DonationsModule, FirebaseModule],
  controllers: [CheckoutController],
  providers: [CheckoutService],
})
export class CheckoutModule {}

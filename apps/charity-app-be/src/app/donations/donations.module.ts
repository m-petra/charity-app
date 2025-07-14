import { Module } from "@nestjs/common";
import { DonationsService } from "./donations.service";
import { DonationsResolver } from "./donations.resolver";
import { PrismaModule } from "../prisma/prisma.module";
import { FirebaseModule } from "../firebase/firebase.module";

@Module({
  imports: [PrismaModule, FirebaseModule],
  providers: [DonationsResolver, DonationsService],
  exports: [DonationsService],
})
export class DonationsModule {}

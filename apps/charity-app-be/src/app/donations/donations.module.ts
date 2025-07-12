import { Module } from "@nestjs/common";
import { DonationsService } from "./donations.service";
import { DonationsResolver } from "./donations.resolver";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  providers: [DonationsResolver, DonationsService],
  exports: [DonationsService],
})
export class DonationsModule {}

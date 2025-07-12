import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { join } from "path";
import { OrganisationsModule } from "./organisations/organisations.module";
import { CheckoutModule } from "./checkout/checkout.module";
import { DonationsModule } from "./donations/donations.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(
        process.cwd(),
        "apps/charity-app-be/dist/schema.gql"
      ),
    }),
    OrganisationsModule,
    CheckoutModule,
    DonationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

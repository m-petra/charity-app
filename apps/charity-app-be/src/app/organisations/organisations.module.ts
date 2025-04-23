import { Module } from '@nestjs/common';
import { OrganisationsService } from './organisations.service';
import { OrganisationsResolver } from './organisations.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [OrganisationsResolver, OrganisationsService],
  imports: [PrismaModule]
})
export class OrganisationsModule {}

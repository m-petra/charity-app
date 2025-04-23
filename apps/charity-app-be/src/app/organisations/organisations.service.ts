import { Injectable } from '@nestjs/common';
import { CreateOrganisationInput } from './dto/create-organisation.input';
import { UpdateOrganisationInput } from './dto/update-organisation.input';
import { PrismaService } from '../prisma/prisma.service';
import { Organisation } from '@prisma/client';

@Injectable()
export class OrganisationsService {

  constructor (private prisma: PrismaService) {}

  create(createOrganisationInput: CreateOrganisationInput) {
    return 'This action adds a new organisation';
  }

  findAll() {
    return this.prisma.organisation.findMany();
  }

  findOne(id: string) {
    return this.prisma.organisation.findUnique({
      where: {
        id,
      },
    });
  }

  async searchOrganisations(term: string): Promise<Organisation[]> {
    const lowercaseTerm = term.toLowerCase();
    return this.prisma.organisation.findMany({
      where: {
        OR: [
          { name: { contains: lowercaseTerm, mode: 'insensitive' } },
          { description: { contains: lowercaseTerm, mode: 'insensitive' } },
        ],
      },
    });
  }

  update(id: string, updateOrganisationInput: UpdateOrganisationInput) {
    return `This action updates a #${id} organisation`;
  }

  remove(id: string) {
    return `This action removes a #${id} organisation`;
  }
}

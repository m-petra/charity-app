import { Injectable } from "@nestjs/common";
import { CreateDonationInput } from "./dto/create-donation.input";
import { UpdateDonationInput } from "./dto/update-donation.input";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class DonationsService {
  constructor(private prisma: PrismaService) {}

  create(CreateDonationInput: CreateDonationInput) {
    const { totalAmount, items } = CreateDonationInput;
    return this.prisma.donation.create({
      data: {
        totalAmount,
        items: {
          create: items.map((item) => ({
            quantity: item.quantity,
            amount: item.amount,
            Organisation: {
              connect: {
                id: item.organisationId,
              },
            },
          })),
        },
      },
      include: {
        items: {
          include: {
            Organisation: true,
          },
        },
      },
    });
  }

  findAll() {
    return `This action returns all donations`;
  }

  findOne(id: string) {
        return this.prisma.donation.findUnique({
      where: { id },
      include: {
        items: {
          include: {
            Organisation: true,
          },
        },
      },
    });
  }

  update(id: number, updateDonationInput: UpdateDonationInput) {
    return `This action updates a #${id} donation`;
  }

  remove(id: number) {
    return `This action removes a #${id} donation`;
  }
}

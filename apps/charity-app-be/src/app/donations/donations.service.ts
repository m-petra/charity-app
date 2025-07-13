import { Injectable } from "@nestjs/common";
import { CreateDonationInput } from "./dto/create-donation.input";
import { UpdateDonationInput } from "./dto/update-donation.input";
import { PrismaService } from "../prisma/prisma.service";
import { DonationStatus } from "@prisma/client/client";

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
    return this.prisma.donation.findMany({
      include: {
        items: {
          include: {
            Organisation: true,
          },
        },
      },
    });
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

  update(id: string, UpdateDonationInput: UpdateDonationInput) {
    return this.prisma.donation.update({
      where: {
        id,
      },
      data: {
        ...UpdateDonationInput,
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

  async removeUnpaid(id: string) {
    const donaton = await this.prisma.donation.findUnique({
      where: {
        id,
      },
    });
    if (!donaton) {
      return {
        success: true,
        orderId: id,
      };
    }
    if (donaton.status === DonationStatus.PAYMENT_REQUIRED) {
      await this.prisma.donation.delete({
        where: {
          id,
        },
      });
      return {
        success: true,
        donationId: id,
      };
    }

    return {
      success: false,
      orderId: id,
      error: `Order is not in ${DonationStatus.PAYMENT_REQUIRED} state`,
    };
  }
}

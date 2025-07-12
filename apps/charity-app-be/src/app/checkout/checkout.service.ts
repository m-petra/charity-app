import { Injectable } from "@nestjs/common";
import { CreateCheckoutDto } from "./dto/create-checkout.dto";
import { DonationsService } from "../donations/donations.service";
import Stripe from "stripe";

const stripeSecret = process.env.STRIPE_SECRET;

if (!stripeSecret) {
  throw new Error('Missing stripe secret');
}

const stripe = new Stripe(stripeSecret);

@Injectable()
export class CheckoutService {
  constructor(
    private donationsService: DonationsService
  ) {}

  async create(createCheckoutDto: CreateCheckoutDto) {
    const donation = await this.donationsService.create({
      items: createCheckoutDto.items.map(item => ({
        organisationId: item.organisationId,
        quantity: item.quantity,
        amount: item.amount,
      })),
      totalAmount: createCheckoutDto.totalAmount,
    });

    const session = await stripe.checkout.sessions.create({
      line_items: createCheckoutDto.items.map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
          },
          unit_amount: Math.round(item.amount * 100),
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/checkout/success?donationId=${donation.id}`,
      cancel_url: `${process.env.FRONTEND_URL}/checkout/cancel?donationId=${donation.id}`,
      metadata: {
        donationId: donation.id,
      },
    });

    return {
      url: session.url,
      sessionId: session.id,
      donationId: donation.id,
    };
  }
}

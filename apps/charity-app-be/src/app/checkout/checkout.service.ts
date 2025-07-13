import { Injectable } from "@nestjs/common";
import { CreateCheckoutDto } from "./dto/create-checkout.dto";
import { DonationsService } from "../donations/donations.service";
import Stripe from "stripe";
import { FirebaseService } from "../firebase/firebase.service";

const stripeSecret = process.env.STRIPE_SECRET;

if (!stripeSecret) {
  throw new Error("Missing stripe secret");
}

const stripe = new Stripe(stripeSecret);

@Injectable()
export class CheckoutService {
  constructor(
    private donationsService: DonationsService,
    private firebaseService: FirebaseService
  ) {}

  async create(createCheckoutDto: CreateCheckoutDto, token: string) {
    let donorId: string | undefined;
    if (token) {
      donorId = await this.firebaseService.verifyToken(token);
    }
    const donation = await this.donationsService.create({
      items: createCheckoutDto.items,
      totalAmount: createCheckoutDto.totalAmount,
      donorId
    });

    const session = await stripe.checkout.sessions.create({
      line_items: createCheckoutDto.items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
          },
          unit_amount: Math.round(item.amount * 100),
        },
        quantity: item.quantity,
      })),
      mode: "payment",
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

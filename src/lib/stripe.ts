import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  // @ts-ignore
  apiVersion: "2025-02-24.acacia",
  appInfo: {
    name: "Plura App",
    version: "0.1.0",
  },
});

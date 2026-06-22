import type { NextApiRequest, NextApiResponse } from "next";
import Razorpay from "razorpay";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { amount, receipt } = req.body || {};
  const key_id = process.env.RAZORPAY_KEY_ID;
  const key_secret = process.env.RAZORPAY_KEY_SECRET;

  if (!key_id || !key_secret) {
    return res.status(500).json({
      error: "Razorpay keys are not configured. Please set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET.",
    });
  }

  if (!amount || typeof amount !== "number") {
    return res.status(400).json({ error: "Invalid amount provided." });
  }

  try {
    const razorpay = new Razorpay({
      key_id,
      key_secret,
    });

    const order = await razorpay.orders.create({
      amount,
      currency: "INR",
      receipt: receipt || `receipt_${Date.now()}`,
      payment_capture: true,
    });

    return res.status(200).json(order);
  } catch (error: any) {
    return res.status(500).json({ error: error.message || "Order creation failed." });
  }
}

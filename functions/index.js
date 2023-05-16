const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// APP config
// Creates a new instance of the Express application.
const app = express();
// APP middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API ROUTES
app.get("/", (req, res) => {
  return res.status(200).send("Hello World");
});
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    // front  ده اللى هيتبعت لل
    clientSecret: paymentIntent.client_secret,
  });
});

// listen
exports.api = functions.https.onRequest(app);

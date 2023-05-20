const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// APP config
// Creates a new instance of the Express application.
const app = express();
// APP middleware
app.use(cors({ origin: true }));
app.use(express.json());

// listen
exports.api = functions.https.onRequest(app);

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

// the following line will hadle requiring the stripe module and connect it to the right acount using a stripe API key
/*  const stripe = require("stripe")("MY_SECRECT_STRIPE_KEY");   */
const stripe = require("stripe")(
    "sk_test_51I1jKvEZ6hfegs2ueBMyT0MVQVQn07xCEcZIB7aDgVySy0rh5w6HpHa5wTt6iWdRdFGoImhDXjkOm6wiVfjDOFxV00zfetyFwN"
);

// App config
const app = express();

// Midllewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payment/create", async (request, response) => {
    const total = request.query.total;

    // this line will send and payment intent to the stripe API, and return a client secret
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //in subunits
        currency: "usd",
    });

    // this line will send client secret back to the UI
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});
// Listen command
exports.api = functions.https.onRequest(app);

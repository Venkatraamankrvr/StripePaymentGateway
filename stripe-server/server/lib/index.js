"use strict";
// // import * as functions from 'firebase-functions';
// // import express from 'express';
// // import * as admin from 'firebase-admin';
// // admin.initializeApp();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripe = void 0;
// // import Stripe from 'stripe';
// // export const stripe = new Stripe(functions.config().stripe.secret, {
// //     apiVersion: '2020-03-02',
// // });
// // // Deploy the /server/api code to Firebase Cloud Functions as an Express App
// // const app = express();
// // export const api = functions.https.onRequest(app);
// // // OR use callable functions instead of Express
// // import { createStripeCheckoutSession } from './checkout';
// // export const stripeCheckout = functions.https.onCall( async (data, context) => {
// //     if (context.auth) {
// //         // User is logged in
// //     } else {
// //         // User is NOT logged in
// //     }
// //     const checkoutSession = await createStripeCheckoutSession(data.line_items);
// //     return checkoutSession;
// // });
// // console.log('hii');
// // environmental variables (stripe API)
// import { config } from "dotenv";
// if (process.env.NODE_ENV !== "production") {
//   config();
// }
// // intialize the stripe
// import Stripe from "stripe";
// export const stripe = new Stripe(process.env.STRIPE_SECRET, {
//   apiVersion: "2020-08-27",
// });
// // start the API with express
// import { app } from "./api";
// const port = process.env.PORT || 3333;
// app.listen(port, () =>
//   console.log(`API available on http://localhost:${port}`)
// );
// Environment Variables (Stripe API Key)
const dotenv_1 = require("dotenv");
if (process.env.NODE_ENV !== "production") {
    dotenv_1.config();
}
// Initialize Stripe
const stripe_1 = __importDefault(require("stripe"));
exports.stripe = new stripe_1.default(process.env.STRIPE_SECRET, {
    apiVersion: "2020-08-27",
});
// Start the API with Express
const api_1 = require("./api");
const port = process.env.PORT || 3333;
api_1.app.listen(port, () => console.log(`API available on http://localhost:${port}`));
//# sourceMappingURL=index.js.map
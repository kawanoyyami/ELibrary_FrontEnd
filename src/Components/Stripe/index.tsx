import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import ProductDisplay from './_paymentForm';

const PUBLIC_KEY =
  'pk_test_51KiHyUCjGWqN9hxkOZUBGmZCe5q6e6OQEBnAX8vTag32uUBEV0kOKtHxLWSiAMLoDoJVc1FweHXBpHhNwfKY2cJr00FPrn8B71';

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer(): JSX.Element {
  return <ProductDisplay stripe={stripeTestPromise} />;
}

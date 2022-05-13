import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import PaymentForm from './_paymentForm';

const PUBLIC_KEY =
  'pk_test_51KiHyUCjGWqN9hxkOZUBGmZCe5q6e6OQEBnAX8vTag32uUBEV0kOKtHxLWSiAMLoDoJVc1FweHXBpHhNwfKY2cJr00FPrn8B71';

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}

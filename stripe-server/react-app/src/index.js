import './index.css';

import App from './App';
import { Elements } from '@stripe/react-stripe-js';
import { FirebaseAppProvider } from 'reactfire';
import React from 'react';
import ReactDOM from 'react-dom';
import { loadStripe } from '@stripe/stripe-js';

export const firebaseConfig = {
  apiKey: "AIzaSyCriL0cl30C29mNUVxTe0zlEgnK84dQ8Xs",
  authDomain: "stripeproject-e4904.firebaseapp.com",
  projectId: "stripeproject-e4904",
  storageBucket: "stripeproject-e4904.appspot.com",
  messagingSenderId: "481486305866",
  appId: "1:481486305866:web:10498e53efd55da92704b3"
};

export const stripePromise = loadStripe(
  'pk_test_51KXHmNSEDlcIS1XWzGXOAgxo4ndyu4Xi6qbsLghlfbXt3iyC1E9gId7s6tKkZxGrgldQb90QCGkLsrIARgcKV9FG000sNrL2SL'
);

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Elements stripe={stripePromise}> 
    <App />
    </Elements>
    </FirebaseAppProvider> 
  </React.StrictMode>,
  document.getElementById('root')
);

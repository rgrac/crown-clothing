import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HoZf3Ah4VVE5AohGen5WKwoB1Z1m7pQkcG4dB8Qic51RnIc9mGDD8g5tVr6A11n69psdBcDHlcvlG1J37bcvzXI00XD169rhQ';

     const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        })
        .then(response => {
            alert('Payment successful');
        })
        .catch(error => {
            console.log('Payment error: ', error);
            alert('There was an issue withyour payment. Please make sure you use the provided credit card')
        })
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;
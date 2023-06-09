import React from 'react';
import { ContactForm } from 'common/Checkout/components/ContactForm';
import { CheckOutCart } from 'common/Checkout/components/CheckoutCart';

export const CheckOutBase: React.FC<Props> = ({ }) => {

    return (

        <div className='checkout-information'>

            <ContactForm />

            <CheckOutCart />

        </div>

    )

}

interface Props { }

import React from "react";
import { ContactFormPaymentMethod } from "./ContactFormPaymentMethod";
import { ContactFormBillingAddress } from "./ContactFormBillingAddress";
import { ContactFormShippingSummary } from "./ContactFormShippingSummary";
import { Button, LeftArrow } from "components";

export const ContactFormShippingInformation:React.FC<Props> = ({ goBack }) => {

    return (

        <div className="contact-form-shipping">

            <ContactFormShippingSummary />

            <ContactFormPaymentMethod />

            <ContactFormBillingAddress />

            <div className="contact-form-proceed">

                <Button

                    svgIcon={LeftArrow}

                    label="Return to Shipping"

                    onClick={()=> goBack()}

                />

                <Button

                    label="Continue Shipping"

                    onClick={() => "Pay Now"}

                />

            </div>

        </div>

    )

}

interface Props {

    goBack: ()=> void

}

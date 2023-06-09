import React, { useState } from "react";
import { ComponentHolder } from "components";
import { CheckedViewFormatter } from "components/ViewFormatter/CheckedViewFormatter";
import { ContactFormEntries } from "../ContactFormEntries";

export const ContactFormBillingAddress = ({ }) => {

    const [method, setMethod] = useState("shipping");

    return (

        <ComponentHolder

            title="Billing Address"

            subtitle="Select the address that matches your card or payment method."

            className="contact-form-shipping-payment-method"

        >

            <CheckedViewFormatter

                title="Same as shipping address"

                checked={method === "shipping"}

                onClick={()=> setMethod("shipping")}

            />


            <CheckedViewFormatter

                title="Use a different billing address"

                checked={method === "other"}

                onClick={()=> setMethod("other")}

            />

            {method === "other" && <ContactFormEntries /> }


        </ComponentHolder>

    )

}

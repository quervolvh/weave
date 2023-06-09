import React, { useState } from "react";
import { ComponentHolder } from "components";
import { CheckedViewFormatter } from "components/ViewFormatter/CheckedViewFormatter";

export const ContactFormPaymentMethod = ({ }) => {

    const [method, setMethod] = useState("card");

    return (

        <ComponentHolder

            title="Payment Method"

            subtitle="All transactions are secure and encrypted"

            className="contact-form-shipping-payment-method"

        >

            <CheckedViewFormatter

                title="Credit Card"

                value={"We accept all major credit cards"}
                
                checked={method === "card"}

                onClick={()=> setMethod("card")}

            />


            <CheckedViewFormatter

                title="Pay through bank transfer"

                value={"Transfer using your preferred bank"}

                checked={method === "bank"}

                onClick={()=> setMethod("bank")}

            />


        </ComponentHolder>

    )

}

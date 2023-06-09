import React from "react";
import { ViewFormatter } from "components";

export const ContactFormShippingSummary = ({ }) => {

    return (

        <div className="contact-form-shipping-summary">

            <ViewFormatter

                title="Contact"

                value="lorengomez@yahoo.com"

                extraValue="Change"

            />

            <ViewFormatter

                title="Ship To"

                value="No 1, Joseph Godwin Street, Ikorodu, Lagos"

                extraValue="Change"

            />

            <ViewFormatter

                title="Method"

                value="Standard • ₦2,500"

            />

        </div>

    )

}

import React from "react";
import { Button, FormField, LeftArrow } from "components";
import { ContactFormEntries } from "../ContactFormEntries";

export const ContactFormBasicInformation:React.FC<Props> = ({ proceed }) => {

    return (

        <>

            <FormField

                placeHolder="Email"

                className="contact-form-entry-email"

            />

            <FormField

                type={"checkbox"}

                label="Email me with news and offers"

            />

            <h2 className="contact-form-entry-address-header"> Shipping Address </h2>

            <ContactFormEntries />

            <div className="contact-form-proceed">

                <Button

                    svgIcon={LeftArrow}

                    label="Return to Cart"

                />

                <Button

                    label="Continue Shipping"

                    onClick={()=> proceed()}

                />

            </div>

        </>

    )

}


interface Props {

    proceed: ()=> void

}

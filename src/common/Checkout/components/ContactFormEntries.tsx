import React from "react";
import { FormField } from "components";
import { FormFieldPhoneBox } from "components/FormField/PhoneBox";

export const ContactFormEntries = ({ }) => {

    return (

        <div className="contact-form-entry-block">

            <FormField placeHolder={"*First Name"} />

            <FormField placeHolder={"*Last Name"} />

            <FormField placeHolder={"*State"} type="option" />

            <FormField placeHolder={"*Local Government"} type="option" />

            <FormField placeHolder={"Address"} />

            <FormFieldPhoneBox placeHolder={"*Phone Number"} />

        </div>

    )

}

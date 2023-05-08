import React from "react";
import { EmailContact, InstagramContact, PhoneContact, TwitterContact, ViewFormatter } from "components";

export const ProductTopStoreInfo: React.FC<Props> = ({ }) => {

    return (

        <div className="product-top-store-info">

            <ViewFormatter

                wrapperClass="product-top-store-info-detail"

                title="Chivours Store"

                value={"No 29, Abudu Street Satellite town Lagos."}

            />

            <h3 className="product-top-store-info-contact-heading"> Contact Store </h3>

            <div className="product-top-store-info-contact">

                <ViewFormatter svgLeftIcon={PhoneContact} value={"+234 906598342"} />

                <ViewFormatter svgLeftIcon={EmailContact} value={"Uchedivine@gmail.com"} />

                <ViewFormatter svgLeftIcon={InstagramContact} value={"Chivours_Store"} />

                <ViewFormatter svgLeftIcon={TwitterContact} value={"+234 906598342"} />

            </div>

        </div>

    );

}

interface Props { }

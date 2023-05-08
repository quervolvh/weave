import { ViewFormatter } from "components";
import React from "react";

export const ProductTopShipping: React.FC<Props> = ({ }) => {

    return (

        <div className="product-top-shipping">

            <ViewFormatter

                title="Ready to ship in"

                value={"1-3 business days"}

            />

            <ViewFormatter

                title="Returns & Exchange"

                value={"Accepted (exemption may apply). "}

            />

        </div>

    );

}

interface Props { }

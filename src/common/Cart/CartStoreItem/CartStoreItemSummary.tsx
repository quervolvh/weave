import React from "react";
import { ArrowRight, Button, ExclamationIcon, FormField, ViewFormatter } from "components";
import { classnames, numberFormat } from "utils";

export const CartStoreItemSummary: React.FC<Props> = ({ className }) => {

    const items = [

        {

            title: "Subtotal",
            value: numberFormat(45000)

        },

        {

            title: "Shipping",
            value: "To be calculated"

        },

        {

            title: "Total",
            value: numberFormat(45000)

        }

    ];

    return (

        <div className={classnames("cart-store-item-summary", className)}>

            <div className="cart-store-item-summary-header">

                <p> Apply Shop Discount Code </p>

                <span dangerouslySetInnerHTML={{ __html: ExclamationIcon }} />

            </div>

            <div className="cart-store-item-summary-discount-input">

                <FormField

                    placeHolder={"Enter discount code"}

                    withButton={{

                        svgIcon: ArrowRight

                    }}

                />

            </div>

            <h1 className="cart-store-item-summary-table-header"> Order Summary (2 items)  </h1>

            <div className="cart-store-item-summary-table">

                {items.map((item, index) => <ViewFormatter key={`${item.title}-${index}`} {...item} />)}

            </div>

            <Button label="Proceed to Checkout" />

        </div>

    )

}

interface Props { 

    className?: string

}


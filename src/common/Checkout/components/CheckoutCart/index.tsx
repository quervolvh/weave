import { CartStoreItemLeft } from "common/Cart/CartStoreItem/CartStoreItemLeft";
import { CartStoreItemSummary } from "common/Cart/CartStoreItem/CartStoreItemSummary";
import { ArrowDown, ArrowTop } from "components";
import React, { useState } from "react";
import { numberFormat } from "utils";

export const CheckOutCart = ({ }) => {

    const [mobileExpand, setMobileExpand] = useState(false);

    const getMobileExpansionClass = () => {

        if (mobileExpand) {

            return "checkout-cart-mobile-cart-visible";

        }

        return "checkout-cart-mobile-cart-hidden";

    }

    return (

        <div className="checkout-cart">

            <div

                className="checkout-cart-mobile-summary"

                onClick={() => setMobileExpand((prevState) => !prevState)}

            >

                <span>

                    <h2> Summary </h2>

                    <p> (2 items) </p>

                </span>

                <span dangerouslySetInnerHTML={{ __html: mobileExpand ? ArrowTop : ArrowDown }} />

                <h2> {numberFormat(45000)} </h2>

            </div>

            <CartStoreItemLeft

                {...{

                    slug: "meow",

                    thumbnail: "/assets/cart/vyneprint.png",

                    className: getMobileExpansionClass(),

                    label: "VynePrint",

                    controls: { itemControls: false , quantity: false },

                    items: [

                        {

                            thumbnail: "/assets/cart/vyne-shirt.png",

                            variants: [

                                {

                                    label: "color",

                                    type: "color",

                                    options: [{ label: "red", value: "red", displayValue: "Red" }]

                                },

                                {

                                    label: "size",

                                    type: "size",

                                    options: [{ label: "XL", value: "xl", displayValue: "XL" }]

                                }

                            ],

                            title: "Vyne Print Roundneck Shirt",

                            amount: 15000,

                        },

                        {

                            thumbnail: "/assets/cart/vyne-roundneck.png",

                            variants: [

                                {

                                    label: "color",

                                    type: "color",

                                    options: [{ label: "red", value: "red", displayValue: "Red" }]

                                },

                                {

                                    label: "size",

                                    type: "size",

                                    options: [{ label: "XXL", value: "xxl", displayValue: "XXL" }]

                                }

                            ],

                            title: "Vyne Print Beach Shirt",

                            amount: 30000,

                        }
                    ]
                }}

            />

            <CartStoreItemLeft

                {...{

                    slug: "neon",

                    thumbnail: "/assets/cart/LinenLT.png",

                    className: getMobileExpansionClass(),

                    label: "LinenLT",

                    controls: { itemControls: false , quantity: false },

                    items: [

                        {

                            thumbnail: "/assets/cart/plant-portrait.png",

                            variants: [],

                            title: "Plant Mould Container",

                            amount: 2000,

                        }
                    ]
                }}

            />

            <CartStoreItemSummary className={getMobileExpansionClass()} />

        </div>

    )

}

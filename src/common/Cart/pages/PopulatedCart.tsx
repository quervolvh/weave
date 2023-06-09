import React, { useState } from "react";
import { CartStoreItem } from "../CartStoreItem";
import { ComponentHolder, ContinueArrow } from "components";
import Link from "next/link";
import { NewArrivals } from "common/NewArrivals";

export const PopulatedCart: React.FC<Props> = ({ isMobile }) => {

    const [selectedCart, setSelectedCart] = useState<{ slug: string, label: string } | undefined>(undefined);

    const ContinueShoppingLink = () => (

        <Link href="/#" className="favorites-header-continue">

            <p> Continue Shopping </p>

            <span dangerouslySetInnerHTML={{ __html: ContinueArrow }} />

        </Link>

    );

    const hiddenOnMobileClass = (slug: string) => {

        if (selectedCart?.slug && selectedCart.slug !== slug) {

            return "hide-unselected-cart"

        }

        if ( selectedCart?.slug === slug) {

            return "show-only-selected-cart"

        }

        return "show-only-cart-header";

    }

    return (

        <>

            <ComponentHolder

                title="YOUR CART"

                bodyClass="cart-top"

                headerClass="favorites-header"

                headerControl={

                    isMobile ?

                        <p className="favorites-header-label-mobile"> Total (20 Items) </p>

                        :

                        <ContinueShoppingLink />

                }

                trail={[

                    {

                        title: "Home",
                        link: "/"

                    },

                    {

                        title: "Cart",
                        link: "/cart",
                        onClick: () => setSelectedCart(undefined)

                    },

                    ...(isMobile && selectedCart ?

                        [{ title: selectedCart.label, link: "/cart" }] : []

                    )

                ]}

                customHeader={() =>

                    isMobile ? <ContinueShoppingLink /> :

                        <p className="favorites-header-label"> Total (3 Items)

                        </p>

                }

            >

                <CartStoreItem

                    {...{

                        slug: "meow",

                        thumbnail: "/assets/cart/vyneprint.png",

                        label: "VynePrint",

                        onMobileSelect: () => setSelectedCart({ label: "Vyne Print", slug: "meow" }),

                        className: hiddenOnMobileClass("meow"),

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

                <CartStoreItem

                    {...{

                        slug: "neon",

                        onMobileSelect: () => setSelectedCart({ label: "LinenLT", slug: "neon" }),

                        className: hiddenOnMobileClass("neon"),

                        thumbnail: "/assets/cart/LinenLT.png",

                        label: "LinenLT",

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

            </ComponentHolder>

            <NewArrivals

                headerClass="favorites-empty-category-header"

                title="You may also like"

                headerControl={<Link href="#"> Shop All </Link>}

            />

        </>

    )

}

interface Props {

    isMobile: boolean

}

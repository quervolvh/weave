import React from "react";
import { ComponentHolder, ContinueArrow } from "components";
import Link from "next/link";
import { NewArrivals } from "common/NewArrivals";

export const EmptyCart = ({ }) => {

    return (

        <ComponentHolder

            title="YOUR CART"

            headerClass="favorites-header"

            headerControl={<Link href="/#">

                <div className="favorite-continue">

                    <p> Continue Shopping </p>

                    <span dangerouslySetInnerHTML={{ __html: ContinueArrow }} />

                </div>

            </Link>
            }

            trail={[

                {

                    title: "Home",
                    link: "/"

                },

                {

                    title: "Cart",
                    link: "/cart"

                }

            ]}

            customHeader={() => <p className="favorites-header-label"> Your Cart is empty. </p>}

        >

            <NewArrivals

                headerClass="favorites-empty-category-header"

                title="Your cart is empty! Kick it off with one of these best sellers!"

                headerControl={<Link href="#"> Shop All </Link>}

            />

            <NewArrivals

                headerClass="favorites-empty-category-header"

                title="You can also check out what our customers are currently loving!"

                headerControl={<Link href="#"> Shop All </Link>}

            />

        </ComponentHolder>

    )

}

import React from "react";
import { ComponentHolder, ContinueArrow } from "components";
import Link from "next/link";
import { NewArrivals } from "common/NewArrivals";
import { StoreTop } from "common/Store/StoreTop";

export const Favorites = ({ }) => {

    return (

        <ComponentHolder

            title="YOUR FAVOURITES"

            headerClass="favorites-header"

            headerControl={

                <Link href="/#">

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

                    title: "Favourites",
                    link: "/favourites"

                }

            ]}

            customHeader={() => <p className="favorites-header-label"> Total (20 Items). </p>}

        >

            <StoreTop />

            <NewArrivals

                headerClass="favorites-empty-category-header"

                title="Have you seen these?"

                headerControl={<Link href="#"> Shop All </Link>}

            />

        </ComponentHolder>

    )

}

import React from "react";
import { ComponentHolder, ContinueArrow } from "components";
import Link from "next/link";
import { NewArrivals } from "common/NewArrivals";
import { StoreTop } from "common/Store/StoreTop";

export const Favorites: React.FC<Props> = ({ isMobile }) => {

    const ContinueShoppingLink = () => (

        <Link href="/#" className="favorites-header-continue">

            <p> Continue Shopping </p>

            <span dangerouslySetInnerHTML={{ __html: ContinueArrow }} />

        </Link>

    );

    return (

        <ComponentHolder

            title="YOUR FAVOURITES"

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

                    title: "Favourites",
                    link: "/favourites"

                }

            ]}

            customHeader={() =>

                isMobile ? <ContinueShoppingLink /> :

                    <p className="favorites-header-label"> Total (20 Items).

                    </p>

            }

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

interface Props {

    isMobile: boolean

}

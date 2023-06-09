import React from "react";
import { ComponentHolder, ContinueArrow } from "components";
import Link from "next/link";
import { NewArrivals } from "common/NewArrivals";

export const EmptyFavorites: React.FC<Props> = ({ isMobile }) => {

    const ContinueShoppingLink = () => (

        <Link href="/#" className="favorites-header-continue">

            <p> Continue Shopping </p>

            <span dangerouslySetInnerHTML={{ __html: ContinueArrow }} />

        </Link>

    );

    return (

        <ComponentHolder

            title="YOUR FAVOURITES"

            headerClass="favorites-header favorites-header-empty"

            bodyClass="favorites-empty-body"

            headerControl={

                isMobile ?

                    <p className="favorites-header-label-mobile"> Your favourites is empty </p>

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

            customHeader={() => isMobile ?

                <ContinueShoppingLink /> :

                <p className={("favorites-header-label")}> Your favourites is empty. </p>

            }

        >

            <NewArrivals

                headerClass="favorites-empty-category-header"

                title="Your favourites is empty! Kick it off with one of these best sellers!"

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

interface Props {

    isMobile: boolean

}

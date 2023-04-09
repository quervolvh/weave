import React from "react";
import { ComponentHolder } from "components";
import { DiscoverStore } from "./DiscoverStore";

export const Discover: React.FC<Props> = ({ }) => {

    return (

        <ComponentHolder

            className="discover"

            bodyClass="discover-block"

            title="Discover Marketplace"

            subtitle="Shop unique items from over 500 stores"

        >

            <DiscoverStore

                productImages={[

                    "assets/landing/discover/dis-four.png",

                    "assets/landing/discover/dis-three.png",

                    "assets/landing/discover/dis-two.png",

                    "assets/landing/discover/dis-one.png",

                ]}

                store={{

                    label: "BlackCraft",

                    thumbnail: "assets/landing/discover/splash.png",

                    rating: 3,

                    itemCount: 40

                }}

            />

            <DiscoverStore

                productImages={[

                    "assets/landing/discover/dis-8.png",

                    "assets/landing/discover/dis-7.png",

                    "assets/landing/discover/dis-6.png",

                    "assets/landing/discover/dis-5.png",

                ]}

                store={{

                    label: "BlackCraft",

                    thumbnail: "assets/landing/discover/splash.png",

                    rating: 4,

                    itemCount: 40

                }}

            />

            <DiscoverStore

                productImages={[

                    "assets/landing/discover/dis-12.png",

                    "assets/landing/discover/dis-11.png",

                    "assets/landing/discover/dis-10.png",

                    "assets/landing/discover/dis-9.png",

                ]}

                store={{

                    label: "BlackCraft",

                    thumbnail: "assets/landing/discover/splash.png",

                    rating: 5,

                    itemCount: 40

                }}

            />

            <DiscoverStore

                productImages={[

                    "assets/landing/discover/dis-four.png",

                    "assets/landing/discover/dis-three.png",

                    "assets/landing/discover/dis-two.png",

                    "assets/landing/discover/dis-one.png",

                ]}

                store={{

                    label: "BlackCraft",

                    thumbnail: "assets/landing/discover/splash.png",

                    rating: 3,

                    itemCount: 40

                }}

            />

            <DiscoverStore

                productImages={[

                    "assets/landing/discover/dis-8.png",

                    "assets/landing/discover/dis-7.png",

                    "assets/landing/discover/dis-6.png",

                    "assets/landing/discover/dis-5.png",

                ]}

                store={{

                    label: "BlackCraft",

                    thumbnail: "assets/landing/discover/splash.png",

                    rating: 4,

                    itemCount: 40

                }}

            />

        </ComponentHolder>

    );

}

interface Props {

}


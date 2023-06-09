import React from "react";
import { StoreBannerBottomInfo } from "./StoreBannerBottomInfo";
import { ContactIcon, DispatchTruck, ReviewStatIcon, ViewFormatter } from "components";
import Link from "next/link";

export const StoreBanner: React.FC<Props> = ({

    bottomInfo,

    isMobile

}) => {

    return (

        <div className="store-banner">

            <div className="store-banner-top">

                <img src={isMobile ?

                    "assets/store/store-banner-collection-mobile-image.png" :

                    "assets/store/black-craft-store-banner.png"

                }

                    alt="store --- " />

            </div>

            <div

                className="store-banner-bottom-wrapper"

                style={{ backgroundImage: "url(assets/store/store-banner-bottom-background.png)" }}

            >

                <div className="store-banner-bottom">

                    <div className="store-banner-bottom-left">

                        <StoreBannerBottomInfo {...bottomInfo} />

                    </div>

                    <div className="store-banner-bottom-right">

                        <ViewFormatter

                            svgLeftIcon={DispatchTruck}

                            title={"Smooth Dispatch"}

                            value={"Has a history of dispatching on time with tracking"}

                        />

                        <ViewFormatter

                            svgLeftIcon={ReviewStatIcon}

                            title={"Rave reviews"}

                            value={"Has an average review rating of 4.5"}

                        />

                    </div>

                    <Link

                        className="store-banner-bottom-link"

                        href="/"

                    >

                        <div>

                            <span dangerouslySetInnerHTML={{ __html: ContactIcon }} />

                            <span> Contact shop </span>

                        </div>

                    </Link>

                </div>

            </div>

        </div>

    );

}

interface Props {

    isMobile: boolean,

    bottomInfo: {

        rating: 1 | 2 | 3 | 4 | 5,

        storeName: string,

        storeShortSummary: string,

        storeAltName: string,

        storeThumbnail: string,

    }

}

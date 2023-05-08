import React from "react";
import { Ratings } from "common/Ratings";

export const StoreBannerBottomInfo: React.FC<Props> = ({

    rating,

    storeName,

    storeShortSummary,

    storeAltName,

    storeThumbnail,

}) => {

    return (

        <div className="store-banner-bottom-info">

            <div className="store-banner-bottom-info-thumbnail">

                <img

                    src={storeThumbnail || "assets/landing/discover/splash.png"}

                    alt={storeAltName || "Black Crafts -- Voodoo , XD !"}

                />

            </div>

            <div className="store-banner-bottom-info-text">

                <h2> {storeName || "BlackCraft"} </h2>

                <p> {storeShortSummary || "Personalized Sculptures, Paintings"} </p>

                <div className="store-banner-bottom-info-text-ratings">

                    <p> 200 sales </p>

                    <Ratings rating={rating} />

                </div>

            </div>

        </div>

    );

}

interface Props { 

    rating : 1 | 2 | 3 | 4 | 5,

    storeName : string,

    storeShortSummary : string,

    storeAltName : string,

    storeThumbnail : string,

}

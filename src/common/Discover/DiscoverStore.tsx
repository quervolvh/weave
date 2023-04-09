import React from "react";
import { Button } from "components";
import { Ratings } from "common/Ratings";

export const DiscoverStore: React.FC<Props> = ({ store, productImages }) => {

    return (

        <div

            className="discover-store"

        >

            <div className="discover-store-top">

                {productImages.map((item, index) =>

                    <img

                        src={item}

                        key={`product-${store.label}-${index}`}

                    />

                )}

            </div>

            <div className="discover-store-bottom">

                <img src={store.thumbnail} alt={`store-${store.label}-thumbnail`} />

                <div className="discover-store-bottom-info">

                    <h4> {store.label} </h4>

                    <div className="discover-store-bottom-info-ratings">

                        <Ratings rating={store.rating} />

                        <span className="discover-store-bottom-info-count">

                            {store.itemCount} {`item${store.itemCount > 1 ? 's' : ''}`}

                        </span>

                    </div>

                </div>

                <Button label="View Store" />

            </div>


        </div>

    );

}

interface Props {

    store: {

        label: string,

        rating: 1 | 2 | 3 | 4 | 5,

        itemCount: number,

        thumbnail: string

    },

    productImages: string[]

}

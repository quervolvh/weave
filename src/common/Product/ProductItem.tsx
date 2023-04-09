import React from "react";
import { Button, Favorite } from "components";
import { Ratings } from "common/Ratings";
import { numberFormat } from "utils";

export const ProductItem: React.FC<Props> = ({ productDetail, storeInfo }) => {

    return (

        <div

            className="product-item"

        >

            <div className="product-item-image">

                <span

                    className="product-item-favorite"

                    dangerouslySetInnerHTML={{ __html: Favorite }}

                    role={"button"}

                    tabIndex={0}

                />

                <img

                    src={productDetail.thumbnail}

                    alt={`${productDetail.label}`}

                />

            </div>

            <div className="product-item-info">

                <h4> {productDetail.label} </h4>

                <div className="product-item-info-ratings">

                    <Ratings rating={productDetail.rating} />

                    <span className="product-item-info-count">

                        {'(' + numberFormat(productDetail.ratingsCount, null) + ')'}

                    </span>

                </div>

                <p className="product-item-store-label"> {storeInfo.label} </p>

                <div className="product-item-action">

                    <h2> {numberFormat(productDetail.price)} </h2>

                    <Button label="QUICK ADD" className="transparent" />

                </div>

            </div>


        </div>

    );

}

interface Props {

    storeInfo: {

        label: string,

    }

    productDetail: {

        label: string,

        rating: 1 | 2 | 3 | 4 | 5,

        ratingsCount: number,

        thumbnail: string,

        price: number,

    },

}

import React from "react";
import { ComponentHolder } from "components";
import { Ratings } from "common/Ratings";
import { numberFormat } from "utils";

export const ProductTopInfo: React.FC<Props> = ({ product, store }) => {

    return (

        <ComponentHolder

            className="product-top-info"

        >
            <small className="product-top-info-store"> {store.label} </small>

            <p className="product-top-info-label"> {product.label} </p>

            <p className="product-top-info-price"> { numberFormat(product.price)} </p>

            <Ratings rating={5} />

            <p className="product-top-info-big-tag"> {product.bigTag} </p>

        </ComponentHolder>

    );

}

interface Props {

    store: {

        label: string

    },

    product: {

        images: { thumbnail: string, image: string }[],

        label: string,

        bigTag: string,

        price: number

    }

}

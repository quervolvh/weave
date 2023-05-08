import React from "react";
import { ArrowRight, Button, ComponentHolder, Favorite } from "components";
import { ProductTopImages } from "./ProductTopImages";
import { ProductTopFilters } from "./ProductTopFilters";
import { ProductTopInfo } from "./ProductTopInfo";
import { ProductTopExtendedInfo } from "./ProductTopExtendedInfo";

export const ProductTop: React.FC<Props> = ({ product }) => {

    return (

        <ComponentHolder

            className="product-top-holder"

            bodyClass="product-top"

        >

            <ProductTopImages

                product={product}

            />

            <div className="product-top-right">

                <ProductTopInfo product={product} store={product.store} />

                <ProductTopFilters product={product} />

                <div className="product-top-controls">

                    <Button label="Add to Cart" svgIcon={ArrowRight} />

                    <span className="product-top-controls-fav" dangerouslySetInnerHTML={{ __html: Favorite }} />

                </div>

                <ProductTopExtendedInfo product={product} store={product.store} />

            </div>

        </ComponentHolder>

    );

}

interface Props {

    product: {

        images: { thumbnail: string, image: string }[],

        label: string,

        bigTag: string,

        price: number,

        store: {

            label: string

        },

        variants: {

            label: string,

            type: "size" | "color",

            options: { label: string, value: string, displayValue: string }[]

        }[],

    }

}

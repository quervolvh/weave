import React from "react";
import { ComponentHolder } from "components";
import { ProductVariant } from "../ProductVariant";

export const ProductTopFilters: React.FC<Props> = ({ product }) => {

    return (

        <ComponentHolder

            className="product-top-filters"

        >

            {product.variants.map((item, index) =>

                <ProductVariant

                    key={`${index}`}

                    {...item}

                />

            )}

        </ComponentHolder>

    );

}

interface Props {

    product: {

        images: { thumbnail: string, image: string }[],

        label: string,

        bigTag: string,

        price: number,

        variants: {

            label: string,

            type: "size" | "color",

            options: { label: string, value: string, displayValue: string }[]

        }[],
    }

}

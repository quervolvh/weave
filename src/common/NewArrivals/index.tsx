import React, { ReactElement } from "react";
import { ComponentHolder } from "components";
import { ProductItem } from "common/Product/ProductItem";

export const NewArrivals: React.FC<Props> = ({ title, subtitle, headerControl, headerClass }) => {

    return (

        <ComponentHolder

            className="new-arrivals"

            bodyClass="new-arrivals-block"

            headerClass={headerClass}

            title={title}

            subtitle={subtitle}

            headerControl={headerControl}

        >

            <ProductItem

                storeInfo={{

                    label: "Chivours"

                }}

                productDetail={{

                    label: "Blue Pearl Earrings",

                    rating: 3,

                    price: 20000,

                    ratingsCount: 1123,

                    thumbnail: "assets/landing/arrivals/product-image-0.png"

                }}

            />

            <ProductItem

                storeInfo={{

                    label: "Chivours"

                }}

                productDetail={{

                    label: "Blue Pearl Earrings",

                    rating: 3,

                    price: 20000,

                    ratingsCount: 1123,

                    thumbnail: "assets/landing/arrivals/product-image-1.png"

                }}

            />

            <ProductItem

                storeInfo={{

                    label: "Chivours"

                }}

                productDetail={{

                    label: "Blue Pearl Earrings",

                    rating: 3,

                    price: 20000,

                    ratingsCount: 1123,

                    thumbnail: "assets/landing/arrivals/product-image-2.png"

                }}

            />

            <ProductItem

                storeInfo={{

                    label: "Chivours"

                }}

                productDetail={{

                    label: "Blue Pearl Earrings",

                    rating: 1,

                    price: 20000,

                    ratingsCount: 1123,

                    thumbnail: "assets/landing/arrivals/product-image-3.png"

                }}

            />

            <ProductItem

                storeInfo={{

                    label: "Chivours"

                }}

                productDetail={{

                    label: "Blue Pearl Earrings",

                    rating: 4,

                    price: 20000,

                    ratingsCount: 1123,

                    thumbnail: "assets/landing/arrivals/product-image-2.png"

                }}

            />

            <ProductItem

                storeInfo={{

                    label: "Chivours"

                }}

                productDetail={{

                    label: "Blue Pearl Earrings",

                    rating: 1,

                    price: 20000,

                    ratingsCount: 1123,

                    thumbnail: "assets/landing/arrivals/product-image-3.png"

                }}

            />

            <ProductItem

                storeInfo={{

                    label: "Chivours"

                }}

                productDetail={{

                    label: "Blue Pearl Earrings",

                    rating: 1,

                    price: 20000,

                    ratingsCount: 1123,

                    thumbnail: "assets/landing/arrivals/product-image-3.png"

                }}

            />

        </ComponentHolder>

    );

}

interface Props {

    title?: string

    subtitle?: string,

    headerControl?: ReactElement,

    headerClass?: string

}

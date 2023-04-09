import React from "react";
import { ComponentHolder } from "components";
import { ProductItem } from "common/Product/ProductItem";

export const NewArrivals: React.FC<Props> = ({ }) => {

    return (

        <ComponentHolder

            className="new-arrivals"

            bodyClass="new-arrivals-block"

            title="New Arrivals"

            subtitle="Shop newly dropped items"

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

}


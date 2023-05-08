import React from 'react';
import { LandingLayout } from 'layout';
import { ProductTop } from 'common/Product/ProductTop';
import { ProductRating } from 'common/Product/ProductRating';
import { ProductReviewSegment } from 'common/Product/ProductReviewsSegment';
import { NewArrivals } from 'common/NewArrivals';
import Link from 'next/link';

const Product: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    return (

        <LandingLayout
            headTitle={"Weave"}
            isMobile={isMobile}
            className='product'
            deviceWidth={deviceWidth}
            trail={[

                {

                    title: "Home",
                    link: "/"

                },

                {

                    title: "Blue Pearl Earrings",
                    link: "/product"

                }

            ]}

            showFooter={true}

            showHeader={true}

        >

            <ProductTop

                product={{

                    label: "Blue Pearl Earrings",

                    images: [

                        {
                            thumbnail: "assets/product/thumbnail-1.png",
                            image: "assets/product/thumbnail-big.png"
                        },

                        {
                            thumbnail: "assets/product/thumbnail-2.png",
                            image: "assets/product/thumbnail-big.png"
                        },

                        {
                            thumbnail: "assets/product/thumbnail-1.png",
                            image: "assets/product/thumbnail-big.png"
                        }

                    ],

                    bigTag: "Handmade",

                    price: 12000,

                    store: {

                        label: "Chivours Store"

                    },

                    variants: [

                        {

                            label: "size",

                            type: "size",

                            options: [

                                { label: "Small", value: "small", displayValue: "S" },

                                { label: "Medium", value: "medium", displayValue: "M" },

                                { label: "Large", value: "large", displayValue: "L" },

                                { label: "Extra-large", value: "extra-large", displayValue: "XL" }

                            ]

                        },

                        {

                            label: "Colour",

                            type: "color",

                            options: [

                                { label: "red", value: "red", displayValue: "r" },

                                { label: "yellow", value: "yellow", displayValue: "r" },

                                { label: "green", value: "green", displayValue: "r" },

                                { label: "purple", value: "purple", displayValue: "r" },

                                { label: "indigo", value: "indigo", displayValue: "r" },

                                { label: "violet", value: "violet", displayValue: "r" },

                                { label: "white", value: "white", displayValue: "r" },

                                { label: "beige", value: "beige", displayValue: "r" },

                                { label: "chocolate", value: "chocolate", displayValue: "r" },

                                { label: "grey", value: "grey", displayValue: "r" },

                                { label: "blue", value: "blue", displayValue: "r" },

                            ]

                        }

                    ]

                }}

            />

            <ProductRating

                product={{

                    label: "Blue Pearl Earrings",

                    thumbnail: "assets/product/thumbnail-1.png",

                }}

            />

            <ProductReviewSegment />

            <NewArrivals

                headerClass="favorites-empty-category-header"

                title='Recommended for you'

                headerControl={<Link href="#"> Shop All </Link>}

            />

        </LandingLayout >

    )

}

export default Product;

interface Props {
    isMobile: boolean,
    deviceWidth: number
}

import React from 'react';
import { ComponentHolder, Pagination } from 'components';
import { StoreFilter } from 'components/StoreFilter';
import { ProductItem } from 'common/Product/ProductItem';
import { classnames } from 'utils';

export const StoreTop: React.FC<{ title?: string, className?: string }> = ({ title, className }) => {

    return (

        <ComponentHolder

            className={classnames('store-top', className)}
            title={title}

            customHeader={StoreFilter}

            bodyClass={'store-top-block'}

        >

            <ProductItem

                storeInfo={{

                    label: "CHIVOURS"

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

                    label: "CHIVOURS"

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

                    label: "CHIVOURS"

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

                    label: "CHIVOURS"


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

                    label: "CHIVOURS"


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

                    label: "CHIVOURS"

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

                    label: "CHIVOURS"

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

                    label: "CHIVOURS"

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

                    label: "CHIVOURS"

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

                    label: "CHIVOURS"

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

                    label: "CHIVOURS"

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

                    label: "CHIVOURS"

                }}

                productDetail={{

                    label: "Blue Pearl Earrings",

                    rating: 4,

                    price: 20000,

                    ratingsCount: 1123,

                    thumbnail: "assets/landing/arrivals/product-image-2.png"

                }}

            />

            <div className='store-top-controls'>

                <p className='store-top-controls-label'> {"There's"} so much more for you to discover </p>

                <Pagination

                    isMobile={false}

                    onClick={() => null}

                    page={1}

                    pages={24}

                    dataCount={233}

                />

            </div>

        </ComponentHolder>

    )
}

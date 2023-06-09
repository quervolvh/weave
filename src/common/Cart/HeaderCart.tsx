import React, { useRef } from 'react';
import { useOnClickOutside } from 'hooks';
import { CartStoreItemLeft } from './CartStoreItem/CartStoreItemLeft';
import { classnames, numberFormat } from 'utils';
import { Button } from 'components';

export const HeaderCart: React.FC<Props> = ({ showCart , onClickOutside }) => {
    
    const ref: React.MutableRefObject<any> = useRef();

    useOnClickOutside(ref, ()=> showCart ? onClickOutside() : undefined );

    return (

        <div className='header-cart-anchor' ref={ref}>

            <div className={classnames('header-cart', !showCart && "header-cart-hidden")}>

                <CartStoreItemLeft

                    {...{

                        slug: "meow",

                        thumbnail: "/assets/cart/vyneprint.png",

                        controls: { itemControls: false },

                        label: "VynePrint",

                        items: [

                            {

                                thumbnail: "/assets/cart/vyne-shirt.png",

                                variants: [

                                    {

                                        label: "color",

                                        type: "color",

                                        options: [{ label: "red", value: "red", displayValue: "Red" }]

                                    },

                                    {

                                        label: "size",

                                        type: "size",

                                        options: [{ label: "XL", value: "xl", displayValue: "XL" }]

                                    }

                                ],

                                title: "Vyne Print Roundneck Shirt",

                                amount: 15000,

                            },

                            {

                                thumbnail: "/assets/cart/vyne-roundneck.png",

                                variants: [

                                    {

                                        label: "color",

                                        type: "color",

                                        options: [{ label: "red", value: "red", displayValue: "Red" }]

                                    },

                                    {

                                        label: "size",

                                        type: "size",

                                        options: [{ label: "XXL", value: "xxl", displayValue: "XXL" }]

                                    }

                                ],

                                title: "Vyne Print Beach Shirt",

                                amount: 30000,

                            }
                        ]
                    }}

                />

                <CartStoreItemLeft

                    {...{

                        slug: "neon",

                        thumbnail: "/assets/cart/LinenLT.png",

                        controls: { itemControls: false },

                        label: "LinenLT",

                        items: [

                            {

                                thumbnail: "/assets/cart/plant-portrait.png",

                                variants: [],

                                title: "Plant Mould Container",

                                amount: 2000,

                            }
                        ]
                    }}

                />

                <div className='header-cart-summary'>

                    <p> Subtotal </p>

                    <h2> {numberFormat(45000)} </h2>

                </div>

                <Button link='/cart' label='View Bag (3)' />

            </div>

        </div>

    )

}

interface Props {

    showCart?: boolean,

    onClickOutside(): void

}

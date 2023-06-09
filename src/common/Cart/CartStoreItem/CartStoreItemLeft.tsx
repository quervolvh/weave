import React from "react";
import { CartItem } from "../CartItem/CartItem";
import { CartStoreItemHeader } from "./CartStoreItemHeader";
import { classnames } from "utils";

export const CartStoreItemLeft: React.FC<Props> = ({ thumbnail, items, label, slug, controls, className }) => {

    return (

        <div className={classnames("cart-store-item-body-left", className)}>

            <CartStoreItemHeader

                link={`/${slug}`}

                label={label}

                thumbnail={thumbnail}

                buttonLabel="Contact Shop"

            />

            <div className="cart-store-item-body-products">

                {items.map((item, index) => 
                
                    <CartItem 
                    
                        {...item} 

                        storeLabel={label}
                        
                        controls={controls} 
                        
                        key={`cart-item-${label}-${index}`} 
                        
                    />
                    
                )}

            </div>

        </div>

    )

}

interface Props {

    slug: string,

    thumbnail: string,

    className?: string,

    controls?: { quantity?: boolean, itemControls?: boolean },

    label: string,

    items: {

        thumbnail: string,

        variants: {

            label: string,

            type: "size" | "color",

            options: { label: string, value: string, displayValue: string }[]

        }[],

        title: string,

        amount: number,

    }[]
}

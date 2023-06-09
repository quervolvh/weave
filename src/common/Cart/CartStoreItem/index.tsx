import React from "react";
import { CartStoreItemSummary } from "./CartStoreItemSummary";
import { CartStoreItemLeft } from "./CartStoreItemLeft";
import { CartStoreItemHeader } from "./CartStoreItemHeader";
import { classnames } from "utils";

export const CartStoreItem: React.FC<Props> = ({

    className,

    thumbnail,

    items,

    label,

    slug,

    controls,

    onMobileSelect,

}) => {

    return (

        <div className={classnames(

            "cart-store-item",

            className

        )}>

            {onMobileSelect &&

                <CartStoreItemHeader

                    label={label}

                    onClick={() => {

                        onMobileSelect();

                    }}

                    thumbnail={thumbnail}

                    buttonLabel="View Cart"

                    className="cart-store-item-header-mobile"

                />

            }

            <div className={classnames(

                "cart-store-item-body",

            )}>

                <CartStoreItemLeft

                    thumbnail={thumbnail}

                    items={items}

                    label={label}

                    slug={slug}

                    controls={controls}

                />

                <CartStoreItemSummary />

            </div>

        </div>

    )

}

interface Props {

    className?: string,

    slug: string,

    thumbnail: string,

    controls?: boolean,

    label: string,

    onMobileSelect?: () => void,

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

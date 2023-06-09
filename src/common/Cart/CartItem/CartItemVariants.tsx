import React from "react";

export const CartItemVariants: React.FC<Props> = ({ variants, productLabel }) => {

    return (

        <div className="cart-item-variants">

            {variants.map((item, index) =>

                <>

                    <div

                        key={`cart-item-variants-${productLabel}-${item.type}`}

                        className="cart-item-variants-scope"

                    >

                        {item.type === "color" ?

                            <div

                                className="form-field-color-box-sphere"

                            >

                                <div className={`form-field-color-box-sphere-${item.options[0].value}`} />

                            </div>

                            :

                            <span> {item.options[0].displayValue} </span>

                        }

                    </div>

                    {index !== (variants.length - 1) && <div className="cart-item-variants-scope-separator" />}

                </>

            )}


        </div>

    )

}

interface Props {

    productLabel: string,

    variants: {

        label: string,

        type: "size" | "color",

        options: { label: string, value: string, displayValue: string }[]

    }[]

}

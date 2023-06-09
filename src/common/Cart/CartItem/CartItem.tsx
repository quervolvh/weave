import React from "react";
import { CartItemVariants } from "./CartItemVariants";
import { CartItemQuantifier } from "./CartItemQuantifier";
import { Button, DeleteIcon, EditIcon, Favorite } from "components";
import { classnames, numberFormat } from "utils";

export const CartItem: React.FC<Props> = ({ thumbnail, variants, title, amount, controls }) => {

    const CartControls: React.FC<{ mobile?: boolean }> = ({ mobile }) => {

        return (

            <div className={classnames("cart-item-cta", mobile && "cart-item-cta-mobile")}>

                <Button svgIcon={Favorite} label="Move to favourites" />

                <Button svgIcon={EditIcon} label="Edit" />

                <Button svgIcon={DeleteIcon} label="Delete" />

            </div>

        );

    }

    return (

        <div className="cart-item">

            <div className="cart-item-image">

                <img src={thumbnail} />

            </div>

            <div className="cart-item-body">

                <div className="cart-item-cost">

                    <h2> {title} </h2>

                    <h1> {numberFormat(amount)} </h1>

                </div>

                {variants && <CartItemVariants variants={variants} productLabel={title} />}

                {controls !== false && <CartItemQuantifier />}

                {controls !== false && <CartControls />}

            </div>

            {controls !== false && <CartControls mobile={true} />}

        </div>

    )

}

interface Props {

    thumbnail: string,

    controls?: boolean,

    variants: {

        label: string,

        type: "size" | "color",

        options: { label: string, value: string, displayValue: string }[]

    }[]

    title: string,

    amount: number

}

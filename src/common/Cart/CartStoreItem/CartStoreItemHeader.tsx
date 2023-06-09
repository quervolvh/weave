import React from "react";
import { Button } from "components";
import { classnames } from "utils";

export const CartStoreItemHeader: React.FC<Props> = ({ thumbnail, link, label, onClick, buttonLabel, className }) => {

    return (

        <div className={classnames("cart-store-item-header", className)}>

            <div className="cart-store-item-header-label">

                <img src={thumbnail} />

                <h2> {label} </h2>

            </div>

            <Button

                link={link}

                onClick={() => onClick && onClick()}

                className="transparent"

                label={buttonLabel}

            />

        </div>

    )

}

interface Props {

    link?: string,

    className?: string,

    thumbnail: string,

    label: string,

    onClick?: () => void,

    buttonLabel?: string

}

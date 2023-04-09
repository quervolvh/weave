import React from "react";
import { Button } from "components";

export const Banner: React.FC<Props> = ({ label, buttonInfo, bannerImage, bannerRightComponent }) => {

    return (

        <div className="banner">

            <div

                className="banner-left"

                style={{ backgroundImage: `url(${bannerImage})` }}

            >

                <h1> {label} </h1>

                {buttonInfo && <Button {...buttonInfo} />}

            </div>

            <div className="banner-right">

                {bannerRightComponent && bannerRightComponent}

            </div>

        </div>

    );

}

interface Props {

    bannerImage: string,

    label: string,

    bannerRightComponent?: React.ReactChild,

    buttonInfo?: {

        label: string,

        link: string,

        onClick?: () => void

    }

}

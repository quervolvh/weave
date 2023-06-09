import React, { ReactElement } from 'react';
import { LandingLayoutTrail } from 'layout/LandingLayout/LandingLayoutTrail';

export const ComponentHeader: React.FC<Props> = ({ className, title, subtitle, dangerousTitle, trail, ...props }) => {

    return (

        <div
            className={`component-header ${className || ""}`}>

            {trail && <LandingLayoutTrail trail={trail} />}

            {title && <h2> {title} </h2>}

            {dangerousTitle && <h2 dangerouslySetInnerHTML={{ __html: dangerousTitle }} />}

            {subtitle && <h4> {subtitle} </h4>}

            {props.control && props.control}

        </div>

    );
}

interface Props {
    title?: string,
    subtitle?: string,
    className?: string,
    dangerousTitle?: string,
    control?: ReactElement<any, any>,
    trail?: { title: string, link: string , onClick?: ()=> void}[]
}

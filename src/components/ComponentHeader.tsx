import React, { ReactElement } from 'react';

export const ComponentHeader: React.FC<Props> = ({ className, title, subtitle, dangerousTitle, ...props }) => {

    return (

        <div
            className={`component-header ${className || ""}`}>

            {title && <h2> {title} </h2>}

            {dangerousTitle && <h2 dangerouslySetInnerHTML={{ __html : dangerousTitle }} />}

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
    control?: ReactElement<any, any>
}

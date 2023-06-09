import React from "react"
import { CircleCheckFilled, CircleCheckPlain } from "components/Assets";
import { ViewFormatter } from "components/ViewFormatter";
import { classnames } from "utils";

export const CheckedViewFormatter:React.FC<Props> = ({ checked , onClick, title, value }) => {

    return (

        <ViewFormatter

            wrapperClass={classnames("view-formatter-checked", !value && "view-formatter-checked-single")}

            svgLeftIcon={checked ? CircleCheckFilled : CircleCheckPlain }

            title={title}

            value={value}

            onClick={() => onClick ? onClick() : null}

        />

    );

}

interface Props {

    title?: string,

    value?: string,

    checked?: boolean,

    onClick?: ()=> void

}

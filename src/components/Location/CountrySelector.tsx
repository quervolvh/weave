import React from "react"
import { ViewFormatter } from "components/ViewFormatter"

export const CountrySelector: React.FC<Props> = ({ country, onSelect }) => {

    return (

        <ViewFormatter

            wrapperClass='pt-0 pb-0 pr-0 pl-0 country-item'

            value={country?.countryCode || ""}

            valueClass={"color-dark"}

            onClick={() => onSelect && onSelect()}

        />
    )

}

interface Props {
    country?: { countryCode : string },
    onSelect?: () => void
}

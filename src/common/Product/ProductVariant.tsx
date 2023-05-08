import { CautionIcon } from "components";
import { ColorInput } from "components/FormField/ColorInput";
import React, { useEffect, useState } from "react";
import { classnames } from "utils";

export const ProductVariant: React.FC<Props> = ({ type, label, options }) => {

    const [selected, setSelected] = useState<{ label: string, value: string, displayValue: string }>();

    useEffect(() => {

        setSelected(options?.[0]);

        // eslint-disable-next-line
    }, []);

    return (

        <div

            className="product-variant"

        >

            <div className="product-variant-left">

                <div className="product-variant-left-info">

                    <p> {label} </p>

                    <span dangerouslySetInnerHTML={{ __html: CautionIcon }} />

                </div>

                <div className="product-variant-left-selection">

                    <p>  {selected?.label} </p>

                </div>

            </div>

            <div className="product-variant-right">

                {type === "color" ?

                    <ColorInput

                        availableColors={options.map(item => item.value)}

                        onChange={(e) => setSelected(options.find(item => item.value === e))}

                        value={selected?.value || options?.[0]?.value}

                    />

                    :

                    options.map((item, index) =>

                        <p

                            className={classnames(

                                "product-variant-size-item",

                                item.value === selected?.value && "active"

                            )}

                            key={`variant-item-${index}-${item.displayValue}`}

                            onClick={() => setSelected(item)}

                        >

                            {item.displayValue}

                        </p>

                    )

                }

            </div>

        </div>

    );

}

interface Props {

    label: string,

    type: "size" | "color",

    options: { label: string, value: string, displayValue: string }[]

}

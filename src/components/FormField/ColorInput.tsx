import React, { useEffect, useState } from 'react';
import { classnames } from 'utils';

export const ColorInput: React.FC<Props> = ({ label, onChange, value, className, availableColors }) => {

    const [selected, setSelected] = useState<string | undefined>(undefined);

    const change = (val: string) => {

        setSelected(val);

        onChange && onChange(val);

    };

    const colors = [

        "red",

        "green",

        "cream",

        "pink",

        "black",

        "white",

        "purple",

        "yellow",

        "indigo",

        "beige",

        "chocolate",

        "grey",

        "blue"

    ];

    const colorsToDisplay = availableColors ? colors.filter(item => availableColors.includes(item)) : colors;

    useEffect(() => {

        if (value) {

            setSelected(value);

        }

        // eslint-disable-next-line
    }, []);

    return (

        <div className={`form-field ${className || ""}`}>

            {label && <p className="form-field-title"> {label} </p>}

            <div className='form-field-color-box'>

                {colorsToDisplay.map((item, index) =>

                    <div

                        tabIndex={0}

                        role='button'

                        onClick={() => change(item)}

                        className={classnames(

                            `form-field-color-box-sphere`,

                            selected === item && "selected"

                        )}

                        key={`form-field-color-box-sphere-${item}-${index}`}

                    >

                        <div

                            className={classnames(

                                `form-field-color-box-sphere-${item}`,

                                selected === item && "selected"

                            )}

                        />

                    </div>

                )}

            </div>

        </div>

    );
};

interface Props {
    label?: string,
    onChange?: (arg: string) => void,
    value?: string,
    className?: string,
    availableColors?: string[]
}

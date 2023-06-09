import { Button, MinusIcon, PlusIcon } from "components";
import React, { useEffect, useState } from "react";

export const CartItemQuantifier: React.FC<Props> = ({ quantity }) => {

    const [state, setState] = useState(1);

    useEffect(() => {

        if (quantity) setState(quantity.value);

        // eslint-disable-next-line
    }, []);

    const updateValue = ( newValue : number ) => {

        setState(newValue);

        quantity?.update(newValue)

    }

    return (

        <div className="cart-item-quantifier">

            <Button
                
                onClick={() => updateValue(state + 1)}

                svgIcon={MinusIcon}
                
            /> 

            <p> {state} </p>

            <Button
                
                onClick={() => updateValue(state - 1)}

                svgIcon={PlusIcon}
                
            /> 

        </div>

    )

}

interface Props {

    quantity?: {

        value: number,

        update(n: number): void

    }

}

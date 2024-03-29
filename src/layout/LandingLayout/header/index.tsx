import React, { useState } from 'react';
import { FullHeader } from './FullHeader';
import { HeaderCategories } from './HeaderCategories';
import { MobileHeader } from './MobileHeader';
import { HeaderCart } from 'common/Cart/HeaderCart';

export const Header: React.FC<Props> = ({ isMobile }): JSX.Element => {

    const [triggerCart, setCartTrigger] = useState(false);

    return (
        <>

            {(isMobile) ?
                <MobileHeader /> :

                <>
                    <FullHeader

                        showCart={triggerCart}

                        toggleCart={() => setCartTrigger((prevState) => !prevState)}

                    />

                    <HeaderCategories />
                </>
            }

            <HeaderCart showCart={triggerCart} onClickOutside={()=> setCartTrigger(false)} />

        </>
    )
}
interface Props {
    isMobile: boolean,
    deviceWidth: number,
}

import React from 'react';
import { LandingLayout } from 'layout';
import { useRouter } from 'next/router';
import { EmptyCart as BaseCart } from 'common/Cart/pages/EmptyCart';
import { PopulatedCart } from 'common/Cart/pages/PopulatedCart';

const Cart: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    const router = useRouter();

    const { empty } = router.query;

    return (

        <LandingLayout
            headTitle={"Weave"}
            isMobile={isMobile}
            className={"favorite"}
            deviceWidth={deviceWidth}
            showFooter={true}
            showHeader={true}
        >

            {empty === "true" && <BaseCart />}

            {empty !== "true" && <PopulatedCart isMobile={isMobile} />}

        </LandingLayout >

    )
}

export default Cart;

interface Props {
    isMobile: boolean,
    deviceWidth: number
}

import React from 'react';
import { LandingLayout } from 'layout';
import { StoreProducts } from 'common/Store/StoreProducts';
import { useRouter } from 'next/router';
import { StoreCollection } from 'common/Store/StoreCollection';

const Store: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    const router = useRouter();

    const { view } = router.query;

    return (

        <LandingLayout
            headTitle={"Weave"}
            isMobile={isMobile}
            className='store'
            deviceWidth={deviceWidth}
            trail={view ? undefined : [

                {

                    title: "Home",
                    link: "/"

                },

                {

                    title: "Jewellery & accessories",
                    link: "/store"

                }

            ]}

            showFooter={true}

            showHeader={true}

        >

            {view === "with-store" && <StoreCollection />}

            {!view && <StoreProducts />}

        </LandingLayout >

    )
}

export default Store;

interface Props {
    isMobile: boolean,
    deviceWidth: number
}

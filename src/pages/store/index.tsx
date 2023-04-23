import React from 'react';
import { LandingLayout } from 'layout';
import { Categories } from 'common/Categories';
import { StoreTop } from 'common/Store/StoreTop';
import { NewArrivals } from 'common/NewArrivals';

const Store: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    return (

        <LandingLayout
            headTitle={"Weave"}
            isMobile={isMobile}
            className='store'
            deviceWidth={deviceWidth}
            trail={[

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

            <Categories />

           <StoreTop />

           <NewArrivals title='Top Sellers' />

        </LandingLayout >

    )
}

export default Store;

interface Props {
    isMobile: boolean,
    deviceWidth: number
}

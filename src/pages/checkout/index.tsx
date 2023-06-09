import React from 'react';
import { LandingLayout } from 'layout';
import { CheckOutBase } from 'common/Checkout';

const CheckOut: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    return (

        <LandingLayout
            headTitle={"Weave"}
            isMobile={isMobile}
            className='checkout'
            bodyClass='checkout-body'
            deviceWidth={deviceWidth}
            trail={[

                {

                    title: "Cart",
                    link: "/"

                },

                {

                    title: "Information",
                    link: "/"

                },

                {

                    title: "Shipping",
                    link: "/"

                },

                {

                    title: "Payment",
                    link: "/product"

                }

            ]}

            showFooter={false}

            showHeader={true}

        >

            <CheckOutBase />

        </LandingLayout >

    )

}

export default CheckOut;

interface Props {
    isMobile: boolean,
    deviceWidth: number
}

import React from 'react';
import { LandingLayout } from 'layout';
import { AboutLanding } from 'common/about/Landing';
import { AboutValues } from 'common/about/AboutValues';
import { AboutBecomeSeller } from 'common/about/AboutBecomeSeller';
import { AboutStartBuying } from 'common/about/AboutStartBuying';
import { FrequentlyAskedQuestions } from 'common/Landing/FrequentlyAskedQuestions';

const CheckOut: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    return (

        <LandingLayout
            headTitle={"Weave"}
            isMobile={isMobile}
            className=''
            bodyClass=''
            deviceWidth={deviceWidth}
            showFooter={true}
            showHeader={true}

        >

            <AboutLanding />

            <AboutValues />

            <AboutBecomeSeller />

            <AboutStartBuying />

            <FrequentlyAskedQuestions />

        </LandingLayout >

    )

}

export default CheckOut;

interface Props {
    isMobile: boolean,
    deviceWidth: number
}

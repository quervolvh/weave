import React from 'react';
import { LandingLayout } from 'layout';
import { Banner } from 'common/Banner';
import { Discover } from 'common/Discover';
import { NewArrivals } from 'common/NewArrivals';
import { FrequentlyAskedQuestions } from 'common/Landing/FrequentlyAskedQuestions';
import { LandingInformation } from 'common/Landing/LandingInformation';

const Home: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    return (

        <LandingLayout
            headTitle={"Boldo"}
            isMobile={isMobile}
            deviceWidth={deviceWidth}
            showFooter={true}
            showHeader={true}
        >

            <Banner 

                bannerImage='assets/landing/banner.png'
            
                label="Shop Chivours summer collection to spice up your summer" 
                
                buttonInfo={{

                    label: "View collection",

                    link: ""

                }}
                
            />

            <Discover />

            <NewArrivals />

            <LandingInformation />

            <FrequentlyAskedQuestions />

        </LandingLayout >

    )
}

export default Home;

interface Props {
    isMobile: boolean,
    deviceWidth: number
}

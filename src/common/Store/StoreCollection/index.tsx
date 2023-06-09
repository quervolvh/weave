import { ComponentHolder } from 'components';
import React from 'react';
import { StoreBanner } from '../StoreBanner';
import { NewCollection } from '../NewCollection';
import { StoreTop } from '../StoreTop';
import { StoreReview } from '../StoreReview';
import { StoreDescription } from '../StoreDescption';
import { StoreFAQ } from '../StoreFAQ';

export const StoreCollection: React.FC<Props> = ({ isMobile }) => {

    return (

        <ComponentHolder

            bodyClass='store-collections'

        >

            <StoreBanner

                isMobile={isMobile}

                bottomInfo={{

                    rating: 4,

                    storeName: "Black Craft",

                    storeShortSummary: "Personalized Sculptures, Paintings",

                    storeAltName: "black-crafts",

                    storeThumbnail: "assets/landing/discover/splash.png",

                }}

            />

            <NewCollection />

            <StoreTop title={'Inventory'} className='store-collections-inventory' />

            <StoreReview />

            <StoreDescription />

            <StoreFAQ />

        </ComponentHolder>

    )
}

interface Props {

    isMobile: boolean

}

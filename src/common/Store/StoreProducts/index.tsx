import React from 'react';
import { Categories } from 'common/Categories';
import { StoreTop } from 'common/Store/StoreTop';
import { NewArrivals } from 'common/NewArrivals';

export const StoreProducts: React.FC<Props> = ({}) => {

    return (

        <>

            <Categories />

            <StoreTop title={'Jewellery & Accessories'} />

            <NewArrivals title='Top Sellers' />

        </ >

    )
}

interface Props {}

import React from 'react';
import { ComponentHolder } from 'components';
import { StoreReviewHeader } from './StoreReviewHeader';
import { StoreReviewCategories } from './StoreReviewCategories';
import { ReviewItem } from './ReviewItem';
import { ReviewControls } from './ReviewControls';

export const StoreReview: React.FC<Props> = ({ }) => {

    return (

        <ComponentHolder

            className='store-review'

        >

            <StoreReviewHeader />

            <StoreReviewCategories />

            <ReviewItem />

            <ReviewItem />

            <ReviewItem />

            <ReviewItem />

            <ReviewControls />

        </ComponentHolder>

    )

}

interface Props { }

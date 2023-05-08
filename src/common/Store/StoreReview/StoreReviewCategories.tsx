import React from 'react';
import { ComponentHolder, ViewFormatter } from 'components';

export const StoreReviewCategories: React.FC<Props> = ({ }) => {

    return (

        <ComponentHolder

            className='store-review-category'

        >

            <h2> Reviews that mentions: </h2>

            <div className='store-review-category-block'>

                <ViewFormatter wrapperClass='store-review-category-item' title='Delivery' value={"100"} />

                <ViewFormatter wrapperClass='store-review-category-item' title='Quality' value={"300"} />

                <ViewFormatter wrapperClass='store-review-category-item' title='Customer Service' value={"100"} />

            </div>


        </ComponentHolder>

    )

}

interface Props { }

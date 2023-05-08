import React from 'react';
import { Ratings } from 'common/Ratings';

export const StoreReviewHeader: React.FC<Props> = ({ }) => {

    return (

        <div className='store-review-header'>

            <h2> Review </h2>

            <div className='store-review-header-body'>

                <div className='store-review-header-info'>

                    <p> Average item review </p>

                    <Ratings rating={5} />

                    <p> (11,000) </p>

                </div>

            </div>

        </div>

    );

}

interface Props { }

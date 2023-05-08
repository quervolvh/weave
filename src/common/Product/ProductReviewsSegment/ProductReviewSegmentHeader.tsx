import React from 'react';
import { FormField } from 'components';

export const ProductReviewSegmentHeader: React.FC<Props> = ({ }) => {

    return (

        <div className='product-review-segment-header'>

            <h2> Showing 1-5 of 30 reviews </h2>

            <FormField label={"sort by:"} value="Most Relevant" type='option' />

        </div>

    );

}

interface Props { }

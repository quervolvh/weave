import React from "react";
import { ReviewItem } from "common/Store/StoreReview/ReviewItem";
import { ProductReviewSegmentHeader } from "./ProductReviewSegmentHeader";

export const ProductReviewSegment = () => {

    return (

        <div className="product-review-segment">

            <ProductReviewSegmentHeader />

            <ReviewItem withoutProductImage={true} />

            <ReviewItem withoutProductImage={true} />

            <ReviewItem withoutProductImage={true} />

            <ReviewItem withoutProductImage={true} />

            <ReviewItem withoutProductImage={true} />

        </div>


    )

};

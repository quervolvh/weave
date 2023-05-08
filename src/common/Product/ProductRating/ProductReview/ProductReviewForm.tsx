import React from "react";
import { Button, FormField } from "components";
import { Ratings } from "common/Ratings";

export const ProductReviewForm: React.FC<Props> = ({

    product

}) => {

    return (

        <div

            className="product-rating-review-form"

        >

            <div className="product-rating-review-form-product">

                <img src={product.thumbnail} alt={product.label} />

                <div>

                    <p> {product.label} </p>

                    <Ratings rating={0} />

                </div>

            </div>

            <FormField placeHolder="Size Purchased" type="option" />

            <FormField placeHolder="Your usual size" type="option" />

            <div className="form-field">

                <p className="form-field-title"> How did you like it? </p>

                <div className="product-rating-review-form-flex">

                    <Button label="Was bad" />

                    <Button label="Was Calm" />

                    <Button label="Loved it" />

                </div>

            </div>

            <FormField label="Give your review a title" type="plain" />

            <FormField label="Write a short review" type="textarea" />

            <p className="mt-4"> Submit review as </p>

            <FormField label="Name" type="plain" />

            <FormField label="Email Address" type="plain" />

            <Button label="Submit Review" />

        </div>

    );

}

interface Props {

    product: {

        thumbnail: string,

        label: string

    }

}

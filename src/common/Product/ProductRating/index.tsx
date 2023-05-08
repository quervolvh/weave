import React from "react";
import { ComponentHolder } from "components";
import { Ratings } from "common/Ratings";
import { RatingBar } from "components/RatingBar";
import { ProductReview } from "./ProductReview";

export const ProductRating: React.FC<Props> = ({ product }) => {

    return (

        <ComponentHolder

            className="product-ratings-holder"

            bodyClass="product-ratings"

        >

            <div className="product-ratings-count">

                <h1> 4.75/5 </h1>

                <Ratings rating={5} />

                <small> 30 reviews </small>

            </div>

            <div className="product-ratings-bar">

                <RatingBar rating={26} totalRatings={30} ratingLabel="5" />

                <RatingBar rating={2} totalRatings={30} ratingLabel="4" />

                <RatingBar rating={0} totalRatings={30} ratingLabel="3" />

                <RatingBar rating={0} totalRatings={30} ratingLabel="2" />

                <RatingBar rating={2} totalRatings={30} ratingLabel="1" />

            </div>

            <ProductReview product={product} />

        </ComponentHolder>

    );

}

interface Props {

    product: {

        thumbnail: string,

        label: string

    }

}

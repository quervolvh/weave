import React from "react";
import { Star } from "./Assets";
import { classnames } from "utils";

export const RatingBar: React.FC<Props> = ({ totalRatings, rating, ratingLabel }) => {

    return (

        <div className={classnames("rating-bar", rating === 0 ? "dim" : "bright")}>

            <div

                className={"rating-bar-star"}

                dangerouslySetInnerHTML={{ __html: Star }}

            />

            <div className="rating-bar-cursor">

                <p> {ratingLabel} </p>

                <div className="rating-bar-cursor-block">

                    <span style={{ width: `${(rating / totalRatings) * 100}%` }} />

                </div>

                <p> {rating} </p>

            </div>

        </div>

    );

}

interface Props {

    totalRatings: number,

    rating: number,

    ratingLabel: string

}

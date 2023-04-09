import React from "react";
import { Star } from "components";
import { classnames } from "utils";

export const Ratings: React.FC<Props> = ({ rating, onRateClick }) => {

    return (

        <div className={classnames("ratings", `rating-${rating || "0"}`)}>

            <span onClick={() => onRateClick && onRateClick(1)} dangerouslySetInnerHTML={{ __html: Star }} />

            <span onClick={() => onRateClick && onRateClick(2)} dangerouslySetInnerHTML={{ __html: Star }} />

            <span onClick={() => onRateClick && onRateClick(3)} dangerouslySetInnerHTML={{ __html: Star }} />

            <span onClick={() => onRateClick && onRateClick(4)} dangerouslySetInnerHTML={{ __html: Star }} />

            <span onClick={() => onRateClick && onRateClick(5)} dangerouslySetInnerHTML={{ __html: Star }} />

        </div>

    )

}

interface Props { 
    
    rating: number, 
    
    onRateClick?: (e: number) => void 

}

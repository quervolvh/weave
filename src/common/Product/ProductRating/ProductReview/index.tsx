import React, { useState } from "react";
import { Button, Modal } from "components";
import { SliderInput } from "components/FormField/SliderInput";
import { ProductReviewForm } from "./ProductReviewForm";

export const ProductReview: React.FC<Props> = ({ product }) => {
    
    const [visibility , setVisibility] = useState(false);

    return (

        <>

        <Modal 

            visibility={visibility}

            toggleOut={()=> setVisibility(false)}
        
            title="Write a review"

        >

            <ProductReviewForm product={product} />

        </Modal>

        <div

            className="product-rating-review"

        >

            <div className="product-rating-review-slider">

                <SliderInput

                    label="How did you like it?"

                />

                <div className="product-rating-review-slider-labels">

                    <p> Was bad </p>

                    <p> Was calm </p>

                    <p> Loved it </p>

                </div>

            </div>

            <Button  

                onClick={()=> setVisibility(true)}
            
                className="product-rating-review-slider-button" 
                
                label="Write a review" 
                
            />

        </div>

        </>

    );

}

interface Props {

    product: {

        thumbnail: string,

        label: string

    }

}

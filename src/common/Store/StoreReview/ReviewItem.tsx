import React from 'react';
import { ComponentHolder, ReviewHelpfulIcon } from 'components';
import { Ratings } from 'common/Ratings';
import { classnames } from 'utils';

export const ReviewItem: React.FC<Props> = ({

    comment,

    commentSub,

    reviewer,

    productRating,

    product,

    withoutProductImage

}) => {

    const VariantInfo = () => (

        <div className='review-item-product-details'>

            { !withoutProductImage && <h2> {product?.label || "Chanel Bottle Perfume"} </h2>}

            <div className={classnames('review-item-product-details-info', withoutProductImage && "review-item-comment-variants")}>

                <p> Size purchased: Small </p>

                <p> Usual Size: Large </p>

            </div>

        </div>

    );

    return (

        <ComponentHolder

            bodyClass='review-item'

        >

            <div className='review-item-rating'>

                <Ratings rating={productRating || 5} />

                <h2> {reviewer?.name || "Jane Doe"} </h2>

                <p> July 10th, 2022 </p>

            </div>

            <div className='review-item-comment'>

                <h2 className='review-item-comment-main'> {comment || "Exquisite! I love it"} </h2>

                {withoutProductImage && <VariantInfo />}

                <p className='review-item-comment-sub'>

                    {commentSub ||

                        `I love this dress, the material, color and  fit are all perfect! I would suggest ordering a size up if you have hips.`

                    }

                </p>

                {!withoutProductImage &&

                    <div className='review-item-product'>

                        <div className='review-item-product-thumbnail'>

                            <img src={"assets/store/review-product.png" || product?.thumbnail} alt="review-product" />

                        </div>

                        <VariantInfo />

                    </div>}

            </div>

            <div className='review-item-help-stat'>

                <span dangerouslySetInnerHTML={{ __html: ReviewHelpfulIcon }} />  Helpful (5)

            </div>

        </ComponentHolder>

    )

}

interface Props {

    comment?: string,

    commentSub?: string,

    reviewer?: {

        name: string,

    },

    productRating?: 1 | 2 | 3 | 4 | 5,

    product?: {

        label: string,

        thumbnail: string

    },

    withoutProductImage?: boolean

}

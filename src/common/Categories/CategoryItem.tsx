import React from 'react';
import { LinkWrapper } from 'components/LinkWrapper';

export const CategoryItem: React.FC<Props> = ({

    title,
    img,
    value

}) => {

    return (

        <LinkWrapper

            className='category-item'

            link={`/categories?value=${value}`}

        >

            <>

                <img src={img} alt={`store-category-${value}`} />

                <h2> {title} </h2>

            </>

        </LinkWrapper>

    )
}

interface Props {
    title: string,
    img: string,
    value: string
}

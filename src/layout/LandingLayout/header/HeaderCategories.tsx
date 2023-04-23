import React from 'react';
import { LinkWrapper } from 'components/LinkWrapper';

export const HeaderCategories: React.FC = ({ }) => {

    const categories = [

        {
            title: "JEWELLERY & ACCESSORIES",
            value: "accessories"
        },
        {
            title: "CLOTHING & SHOES",
            value: "clothing"
        },
        {
            title: "HOME & LIVING",
            value: "home"
        },
        {
            title: "WEDDING & PARTY",
            value: "wedding"
        },
        {
            title: "TOYS & ENTERTAINMENT",
            value: "entertainment"
        },
        {
            title: "ART & COLLECTABLES",
            value: "art"
        }

    ];

    return (

        <div className='landingLayout-header-categories'>

            {categories.map((item, index) =>

                <LinkWrapper

                    className='landingLayout-header-categories-item'

                    key={`header-category-item-${item.value}-${index}`}

                    link={`/categories?active=${item.value}`}

                >

                    <p> {item.title} </p>

                </LinkWrapper>

            )}

        </div>

    );

}

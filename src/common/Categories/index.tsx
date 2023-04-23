import React from 'react';
import { ComponentHolder, LeftArrow } from 'components';
import { CategoryItem } from './CategoryItem';

export const Categories: React.FC = ({ }) => {

    const categories = [

        {

            title: "Rings",
            value: "rings",
            img: 'assets/categories/rings.png',

        },

        {

            title: "Pendants",
            value: "pendants",
            img: 'assets/categories/pendants.png',

        },

        {
            title: "Earrings",
            value: "earrings",
            img: 'assets/categories/earrings.png',

        },

        {

            title: "Cufflinks",
            value: "cufflinks",
            img: 'assets/categories/cufflinks.png',

        },

        {

            title: "Armlets",
            value: "armlets",
            img: 'assets/categories/armlets.png',

        },

        {

            title: "Pendants",
            value: "pendants",
            img: 'assets/categories/pendants.png',

        },

        {
            title: "Earrings",
            value: "earrings",
            img: 'assets/categories/earrings.png',

        },

        {

            title: "Cufflinks",
            value: "cufflinks",
            img: 'assets/categories/cufflinks.png',

        },

        {

            title: "Armlets",
            value: "armlets",
            img: 'assets/categories/armlets.png',

        },

        {

            title: "Necklaces",
            value: "necklaces",
            img: 'assets/categories/necklaces.png',

        }

    ];

    return (

        <ComponentHolder

            title='Shop By Categories'

            className="categories"

            bodyClass="categories-block"

        >

            <div className='categories-block-holder'>

                <div

                    className='categories-block-arrow'

                >

                    <span dangerouslySetInnerHTML={{ __html: LeftArrow }} />

                </div>

                <div className='categories-block-items'>

                    {categories.map((item, index) =>

                        <CategoryItem key={`category-item-${index}`} {...item} />

                    )}

                </div>

                <div

                    className='categories-block-arrow'

                >

                    <span dangerouslySetInnerHTML={{ __html: LeftArrow }} />

                </div>

            </div>

        </ComponentHolder>

    )
}

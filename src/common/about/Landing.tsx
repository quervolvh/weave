import React from 'react';
import { ComponentHolder } from 'components';

export const AboutLanding: React.FC<Props> = ({ }) => {

    return (

        <ComponentHolder

            title='About Us'

            className='about-landing'

            subtitle={`Weave is the global marketplace for unique and creative goods, 
                   from handcrafted pieces to vintage treasures. It is powered by people as we help our 
                   community of sellers turn thier ideas into successful businesses.`}

        >

            <div className='about-landing-images'>

                <div> <img src="assets/about/about-landing-one.png" alt="weave" /> </div>

                <div> <img src="assets/about/about-landing-two.png" alt="weave" /> </div>

            </div>

        </ComponentHolder>

    )

}

interface Props { }

import React from 'react';
import { Button, ComponentHolder, ViewFormatter } from 'components';
import { AboutLine } from './AboutLine';

export const AboutBecomeSeller: React.FC<Props> = ({ }) => {

    return (

        <ComponentHolder

            subtitle='Sell Extraordinarily'

            className='about-seller'

            bodyClass='about-seller-body'

            title={`Home to the Global Market`}

            preHeaderControl={AboutLine}

        >

            <div className='about-seller-image'>

                <img src="assets/about/about-seller-image.png" alt="weave" />

            </div>

            <div>

                <ViewFormatter

                    title='Grow your Business'

                    value={`With powerful tools and support, we help creative entrepreneurs start, manage, 
                        and scale their businesses. Want to become a Weave seller?`
                    }

                />

                <Button label='Become a Seller' />

            </div>

        </ComponentHolder>

    )

}

interface Props { }

import React from 'react';
import { Button, ComponentHolder, ViewFormatter } from 'components';
import { AboutLine } from './AboutLine';

export const AboutStartBuying: React.FC<Props> = ({ }) => {

    return (

        <ComponentHolder

            subtitle='Buy Extraordinarily'

            className='about-seller about-buyer'

            bodyClass='about-seller-body'

            title={`Connect to Special Goods`}

            preHeaderControl={AboutLine}

        >

            <div className='about-seller-image'>

                <img src="assets/about/about-buyer-image.png" alt="weave" />

            </div>

            <div>

                <ViewFormatter

                    title='Explore a new world'

                    value={`From the specific to the unexpected (or custom-made), our search tools help buyers explore 
                            all the special one-of-a-kind items offered by Weave sellers. `
                    }

                />

                <Button label='Start Shopping' />

            </div>

        </ComponentHolder>

    )

}

interface Props { }

import React from 'react';
import { ComponentHolder, ViewFormatter } from 'components';
import { AboutLine } from './AboutLine';

export const AboutValues: React.FC<Props> = ({ }) => {

    const ValueItem: React.FC<ValueProps> = ({ valueNumber, title, value }) => {

        return (

            <div className='about-value-item'>

                <AboutLine />

                <small> Weave Value </small>

                <small> (No. ${valueNumber}) </small>

                <ViewFormatter

                    title={title}

                    value={value}

                />

            </div>

        )

    }

    interface ValueProps {

        valueNumber: string,

        title: string,

        value: string

    }

    return (

        <ComponentHolder

            title='Our Values'

            className='about-values'

            bodyClass='about-values-body'

            subtitle={`For us, human connection is at the heart of commerce. 
                       That’s why we built a place where creativity lives and thrives because it’s powered by people.
            `}

        >

            <div className='about-values-body-image'>

                <img src="assets/about/value-one.png" alt="weave" />

            </div>


            <div className='about-values-body-texts'>

                <ValueItem

                    valueNumber='01'

                    title={"Community"}

                    value={`We help our community of sellers turn their ideas into successful businesses. Our platform connects 
                            them with millions of buyers looking for an alternative - something special with a human touch, for those 
                            moments in life that deserve imagination.`
                    }

                />

                <ValueItem

                    valueNumber='02'

                    title={"Empowerment"}

                    value={`Our global marketplace is a vibrant community of real people connecting over special goods.
                            The platform empowers sellers to do what they love and helps buyers find what they love.`
                    }

                />

                <ValueItem

                    valueNumber='03'

                    title={"Empowerment"}

                    value={`Our global marketplace is a vibrant community of real people connecting over special goods.
                            The platform empowers sellers to do what they love and helps buyers find what they love.`
                    }

                />

                <ValueItem

                    valueNumber='04'

                    title={"Community"}

                    value={`We help our community of sellers turn their ideas into successful businesses. Our platform connects 
                            them with millions of buyers looking for an alternative - something special with a human touch, for those 
                            moments in life that deserve imagination.`
                    }

                />

            </div>

        </ComponentHolder>

    )

}

interface Props { }

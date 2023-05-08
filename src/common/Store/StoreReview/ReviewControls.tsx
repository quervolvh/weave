import React from 'react';
import { Button, ComponentHolder } from 'components';

export const ReviewControls: React.FC<Props> = ({ }) => {

    return (

        <ComponentHolder

            className='review-controls'

        >

            <p> Showing 1-10 of 30 reviews </p>

            <Button label='Load More' />

        </ComponentHolder>

    )

}

interface Props { }

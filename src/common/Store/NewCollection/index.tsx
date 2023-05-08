import React from 'react';
import { ComponentHolder } from 'components';
import { NewCollectionsItem } from './NewCollectionItem';

export const NewCollection: React.FC<Props> = ({ }) => {

    return (

        <ComponentHolder

            className='new-collection'

            title='Shop our New Collections'

            bodyClass='new-collection-items'


        >

            <NewCollectionsItem title='Summer Skin Perfection' image='assets/store/store-new-collection-zero.png' />

            <NewCollectionsItem title='New School Glow' image='assets/store/store-new-collection-one.png' />

            <NewCollectionsItem title='Your Element' image='assets/store/store-new-collection-two.png' />

        </ComponentHolder>

    )
}

interface Props { }

import { ComponentHolder } from 'components';
import React from 'react';
import { StoreDescriptionItem } from './StoreDescriptionItem';

export const StoreDescription: React.FC<Props> = ({ }) => {

    return (

        <ComponentHolder className='store-description'>

            <StoreDescriptionItem

                title='BlackCraft'

                value={`
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac sapien, eget amet, 
                sit natoque bibendum a, faucibus. Tempus eget vitae tortor urna nullam dapibus in lacus, 
                sed. Malesuada vel sodales pellentesque magna accumsan congue fermentum. Condimentum orci, 
                bibendum egestas scelerisque netus sagittis amet, lorem. Condimentum orci, bibendum egestas 
                scelerisque netus sagittis amet, lorem.

                `}

            />

            <StoreDescriptionItem

                title='Shop Policy'

                updatedAt={"on Aug 1, 2022"}

                value={`

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac sapien, eget amet, sit natoque bibendum a, faucibus. 
                    Tempus eget vitae tortor urna nullam dapibus in lacus, sed. Malesuada vel sodales pellentesque magna accumsan congue fermentum. 
                    Condimentum orci, bibendum egestas scelerisque netus sagittis amet, lorem. Condimentum orci, bibendum egestas scelerisque netus 
                    sagittis amet, lorem.

                `}

            />

            <StoreDescriptionItem

                title='Return & Exchange Policy'

                updatedAt={"on Aug 1, 2022"}

                arrayValues={[

                    {

                        title: "I gladly accept returns, exchanges, and cancellations",

                        value: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac sapien, eget amet, sit natoque bibendum a,
                                faucibus. Tempus eget vitae tortor urna nullam dapibus in lacus, sed. Malesuada vel sodales pellentesque 
                                magna accumsan congue fermentum. Condimentum orci, bibendum egestas scelerisque netus sagittis amet, lorem. 
                                Condimentum orci, bibendum egestas scelerisque netus sagittis amet, lorem.`

                    },

                    {

                        title: "I gladly accept returns, exchanges, and cancellations",

                        value: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac sapien, eget amet, sit natoque bibendum a,
                                faucibus. Tempus eget vitae tortor urna nullam dapibus in lacus, sed. Malesuada vel sodales pellentesque 
                                magna accumsan congue fermentum. Condimentum orci, bibendum egestas scelerisque netus sagittis amet, lorem. 
                                Condimentum orci, bibendum egestas scelerisque netus sagittis amet, lorem.`

                    }

                ]}

            />

            <StoreDescriptionItem

                title='Payments'

                arrayValues={[

                    {

                        title: "I gladly accept returns, exchanges, and cancellations",

                    }

                ]}

            />

            <StoreDescriptionItem

                title='Delivery'

                arrayValues={[

                    {

                        value: " Once payment is received, it take 3-5 days to process your order because the jewelry is made by hand."

                    },

                    {

                        value: 
                        
                        "SHIPPING TIME : USPS to the USA,UK and Canada takes 1-2 weeks and provides a tracking number.Other locations 2-3 weeks."

                    }

                ]}

            />


        </ComponentHolder>

    )
}

interface Props { }

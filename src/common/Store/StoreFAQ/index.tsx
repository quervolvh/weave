import { ComponentHolder, ViewFormatter } from 'components';
import React from 'react';

export const StoreFAQ: React.FC<Props> = ({ }) => {

    const faqItem = {

        title: "Who can Sign Up on Weave?",

        value: `Revisit, reinforce and reimagine the three pillars of your value chain; strategy operations and culture. 
                    Navigate through value chain shock, audit potental risks  and maintain a mindset aligned to your values.`

    };

    return (

        <ComponentHolder

            className='store-faq'

            bodyClass='store-faq-body'

            title='Frequently Asked Questions'

        >

            <ViewFormatter type="Collapsible" {...faqItem} />

            <ViewFormatter type="Collapsible" {...faqItem} />

            <ViewFormatter type="Collapsible" {...faqItem} />

            <ViewFormatter type="Collapsible" {...faqItem} />


        </ComponentHolder>

    )
}

interface Props { }

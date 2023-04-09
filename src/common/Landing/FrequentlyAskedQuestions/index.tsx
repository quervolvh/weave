import React from "react";
import { ComponentHolder, ViewFormatter } from "components";

export const FrequentlyAskedQuestions: React.FC<Props> = () => {

    const faqItem = {

        title: "Who can Sign Up on Weave?",

        value: `Revisit, reinforce and reimagine the three pillars of your value chain; strategy operations and culture. 
                    Navigate through value chain shock, audit potental risks  and maintain a mindset aligned to your values.`

    };

    return (

        <ComponentHolder

            className="landing-faq"

            bodyClass="landing-faq-body"

            title="Some of the things you may want to know"

            subtitle="We answered questions so you don’t have to ask them."

        >

            <ViewFormatter type="Collapsible" {...faqItem} />

            <ViewFormatter type="Collapsible" {...faqItem} />

            <ViewFormatter type="Collapsible" {...faqItem} />

            <ViewFormatter type="Collapsible" {...faqItem} />

        </ComponentHolder>

    );

}

interface Props { }

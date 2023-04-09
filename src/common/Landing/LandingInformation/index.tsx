import React from "react";
import { Button, ComponentHolder } from "components";

export const LandingInformation: React.FC<Props> = () => {


    return (

        <ComponentHolder className="landing-information-holder">

            <img

                src={"assets/background/weavy-bg-top.png"}

                className="landing-information-holder-top"

            />

            <div className="landing-information-top-content">

                <img src={"assets/landing/information/information-bla.png"} alt="Weave Dreams" />

                <p>

                    Revisit, reinforce and reimagine the three pillars of your value chain; strategy operations and culture.
                    Navigate through value chain shock, audit potental risks  and maintain a mindset aligned to your values.

                </p>

            </div>

            <ComponentHolder

                className="landing-information"

                bodyClass="landing-information-body"

                dangerousTitle="Do you have a </br> dream? Lets help you weave it."

                subtitle="There is no Weave warehouse - just millions of people selling what they love."

                headerControl={<Button label="Learn More" />}

            >

                <img src={"assets/landing/information/dream.png"} alt="Weave Dreams" />

            </ComponentHolder>

            <img

                src={"assets/background/weavy-bg-top.png"}

                className="landing-information-holder-bottom"

            />

        </ComponentHolder>

    );

}

interface Props { }

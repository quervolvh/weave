import { TabLayout } from "components/TabLayout";
import React, { useState } from "react";
import { ContactFormBasicInformation } from "./ContactFormBasicInformation";
import { ComponentHolder } from "components";
import Link from "next/link";
import { ContactFormShippingInformation } from "./ContactFormShippingInformation";

export const ContactForm = () => {

    const [tab, setTab] = useState("start");

    return (

        <ComponentHolder

            className="contact-form"

            headerClass="contact-form-header"

            title={tab === "start" ? 'Contact Information' : undefined}

            headerControl={tab === "start" ?

                <div className="contact-form-header-login">

                    <p> Already have an account? </p>

                    <Link href="#"> Log In </Link>

                </div> : undefined
            }

        >

            <TabLayout

                selectedTab={tab}

                tabs={[

                    {

                        id: "start",

                        component: <ContactFormBasicInformation proceed={() => setTab("continue")} />

                    },

                    {

                        id: "continue",

                        component: <ContactFormShippingInformation goBack={()=> setTab("start")} />

                    }

                ]}


            />

        </ComponentHolder>

    )

}
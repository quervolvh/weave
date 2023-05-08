import React, { useState } from "react";
import { ComponentHolder } from "components";
import { ItemTypeToggle } from "components/ItemTypeToggle";
import { TabLayout } from "components/TabLayout";
import { ProductTopDescription } from "./ProductTopExtendedInfo/ProductTopDescription";
import { ProductTopDetails } from "./ProductTopExtendedInfo/ProductTopDetails";
import { ProductTopShipping } from "./ProductTopExtendedInfo/ProductTopShipping";
import { ProductTopFaqs } from "./ProductTopExtendedInfo/ProductTopFaqs";
import { ProductTopStoreInfo } from "./ProductTopExtendedInfo/ProductTopStoreInfo";

export const ProductTopExtendedInfo: React.FC<Props> = ({}) => {

    const [activeTab, setActiveTab] = useState<string>("description");

    const tabs = [

        {

            label: "Description",
            onClick: () => setActiveTab("description"),
            id: "description",
            component: <ProductTopDescription />,
            active: activeTab === "description",

        },

        {

            label: "Details",
            onClick: () => setActiveTab("details"),
            id: "details",
            component: <ProductTopDetails />,
            active: activeTab === "details",

        },

        {

            label: "Shipping",
            onClick: () => setActiveTab("shipping"),
            id: "shipping",
            component: <ProductTopShipping />,
            active: activeTab === "shipping",

        },

        {

            label: "FAQs",
            onClick: () => setActiveTab("faqs"),
            id: "faqs",
            component: <ProductTopFaqs />,
            active: activeTab === "faqs",

        },

        {

            label: "Shop Details",
            onClick: () => setActiveTab("shop-details"),
            id: "shop-details",
            component: <ProductTopStoreInfo />,
            active: activeTab === "shop-details",

        }

    ];

    return (

        <ComponentHolder

            className="product-top-extended-info"

        >

            <ItemTypeToggle

                items={tabs}

            />

            <TabLayout

                tabs={tabs}

                selectedTab={activeTab}

            />


        </ComponentHolder>

    );

}

interface Props {

    store: {

        label: string

    },

    product: {

        images: { thumbnail: string, image: string }[],

        label: string,

        bigTag: string,

        price: number

    }

}

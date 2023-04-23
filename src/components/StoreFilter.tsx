import React from 'react';
import { ComponentFilter } from './ComponentFilter';

export const StoreFilter: React.FC = ({ }) => {

    return (

        <ComponentFilter

            filterOptions={{

                label: "All Filters",

                safeParams: [],

                options: [

                    {
                        label: "Filter by category",
                        value: "categories",
                        options: [
                            { label: "Jewellery & accessories", value: "accessories", },
                            { label: "necklace", value: "necklace" },
                            { label: "All", value: null }
                        ]
                    },

                    {
                        label: "Special offers",
                        value: "offer",
                        multiSelect: true,
                        alwaysVisible: true,
                        options: [
                            { label: "Free shipping", value: "free-shipping" },
                            { label: "On Sale", value: "on-sale" },
                        ]
                    },

                    {
                        label: "Ready to ship in",
                        value: "shipment",
                        multiSelect: true,
                        alwaysVisible: true,
                        options: [
                            { label: "1 business day", value: "one-business" },
                            { label: "On Sale", value: "on----" },
                        ]
                    },

                    {

                        label: "Price Range (NGN)",
                        value: "price",
                        type: "slider",
                        minValue: 500,
                        maxValue: 100000

                    },

                    {

                        label: "Colours",
                        type: "color",
                        value: "color",

                    }


                ],

                onSubmit: () => null,

            }}

        />

    )
}

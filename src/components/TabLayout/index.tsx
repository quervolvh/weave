import React, { useEffect, useState } from 'react';
import { classnames } from 'utils';

export const TabLayout: React.FC<Props> = ({
    tabs,
    selectedTab,
    className,
}) => {

    const [track, setTrack] = useState<{
        preservedLinks: { [key: string]: string },
        visits: string[]
    }>(
        {
            visits: [],
            preservedLinks: {}
        });

    const [activeTab, setActiveTab] = useState<string | undefined>();

    useEffect(() => {

        setActiveTab(selectedTab);

        setTrack((prevState) => ({ ...prevState, visits: [...prevState.visits, String(selectedTab || "")] }));

        //eslint-disable-next-line
    }, [selectedTab]);

    return (
        <div className={classnames("tab-layout", className)}>

            <div className="tab-layout-body">

                {(tabs || []).map((item, index) => {

                    const Element = item.component;

                    const usesCondition = typeof item.condition === "boolean" ? true : false;

                    const active = usesCondition ? item.condition : (item.id === activeTab);

                    return (
                        <div
                            key={`tab-layout-item-body-${index}`}
                            className={active ? `tab-layout-page-active fadeIn` : "tab-layout-page"}
                        >

                            {(active || track.visits.includes(item.id)) && Element}

                        </div>

                    );
                })}

            </div>

        </div>
    );
};

interface Props {
    tabs: { id: string, component: React.ReactElement, label?: string, condition?: boolean }[],
    defaultTab?: string,
    selectedTab: string,
    queryKey?: string,
    className?: string,
    switcherClass?: string,
};

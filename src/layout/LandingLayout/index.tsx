import React from 'react';
import { Header } from './header';
import { MetaHead } from 'components';
import { classnames } from 'utils';
import LandingLayoutFooterCr from './LandingLayoutFooterCr';
import LandingLayoutFooter from './Footer';
import { LandingLayoutTrail } from './LandingLayoutTrail';

export const LandingLayout: React.FC<Props> = ({
    headTitle,
    isMobile,
    deviceWidth,
    showFooter = true,
    showHeader = false,
    className = "",
    bodyClass,
    bodyAlignment,
    trail,
    ...props
}) => {
    return (
        <>

            <MetaHead
                title={headTitle}
            />

            <div

                id={"landingLayout"}

                className={`landingLayout ${className}`}>

                {
                    showHeader &&

                    <Header
                        isMobile={isMobile}
                        deviceWidth={deviceWidth}
                    />

                }

                {trail && <LandingLayoutTrail trail={trail} />}

                <div

                    className={classnames("landing-layout-body", bodyAlignment === false && "default", bodyClass && bodyClass)}

                    id={"landing-layout-body"}

                >
                    {props.children}

                    {showFooter &&

                        <LandingLayoutFooter />

                    }

                </div>

                {showFooter &&

                    <>

                        <LandingLayoutFooterCr />

                    </>
                }

            </div>
        </>
    );
}

interface Props {
    headTitle: string,
    isMobile: boolean,
    deviceWidth: number,
    shadyHeader?: boolean,
    className?: string,
    showFooter?: boolean,
    showHeader?: boolean,
    bodyAlignment?: boolean,
    trail?: { title: string, link: string }[]
    bodyClass?: string
}

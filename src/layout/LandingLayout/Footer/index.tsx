import React, { FunctionComponent } from 'react';
import { FooterLinks, FooterIconSet, FooterLogoField, FooterLocation, FooterNewsLetterSub } from 'components';
import { LandingFooterAbout, LandingFooterQuickLinks, LandingFooterSupport } from 'constants/index';

const LandingLayoutFooter: FunctionComponent = () => {

    const footerTabs = [
        { title: undefined, tab: LandingFooterAbout },
        { title: "Quick Links", tab: LandingFooterQuickLinks },
        { title: "Resources", tab: LandingFooterSupport }, 
        { title: "Subscribe", tab: undefined }
    ];

    return (
        <div className="landingLayout-footer footer">

            <div className="landingLayout-footer-holder">

                {footerTabs.map((item, index) =>

                    <div key={`footer-tab-item-${index}`}
                        className="landingLayout-footer-tab">
                        
                        <>
                            {item.title && <h1> {item.title} </h1>}

                            {item?.tab?.map((tabItem, tabItemIndex) =>

                                <React.Fragment key={`footer-tabItem-${index}-${tabItemIndex}`}>

                                    {tabItem.logo && tabItem.text &&
                                        <FooterLogoField logo={tabItem.logo} alt={"stellas"} text={tabItem.text} />
                                    }

                                    {tabItem.icons && <FooterIconSet icons={tabItem.icons || []} links={tabItem.iconLinks} />}

                                    {tabItem?.link && <FooterLinks link={tabItem.link || ''} title={tabItem.title || ''} />}

                                    {tabItem?.title && tabItem?.icon &&
                                        <FooterLocation title={tabItem.title} icon={tabItem.icon} />
                                    }

                                </React.Fragment>
                            )}
                                
                            {item.title === "Subscribe" && <FooterNewsLetterSub />}

                        </>
                    </div>)}

            </div>

        </div>
    );
}

export default LandingLayoutFooter;

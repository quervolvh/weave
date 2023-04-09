interface FooterTypes {
    logo?: string,
    text?: string,
    icons?: string[],
    iconLinks?: string[],
    icon?: string,
    title?: string,
    link?: string
};

export const SocialLinks = {
    facebook: "https://www.facebook.com/companyal/",
    youtube: "https://www.youtube.com/channel/companyal",
    instagram: "https://www.instagram.com/companyal",
    twitter: "https://www.twitter.com/companyal"
}

export const LandingFooterAbout: Array<FooterTypes> = [{
    logo: 'svg/logo_white.svg',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar egestas.`,
}]

export const LandingFooterQuickLinks: Array<FooterTypes> = [
    {
        title: "Product",
        link: "#"
    },
    {
        title: "Information",
        link: "#"
    },
    {
        title: "Company",
        link: "#"
    },
    {
        title: "Careers",
        link: "#"
    }
];


export const LandingFooterSupport: Array<FooterTypes> = [
    {
        title: "support@weave.ng",
        link: "#"
    },
    {
        title: "Products",
        link: "+1 (7635) 547-12-97",
    },
    {
        title: "Services",
        link: "#"
    }
];

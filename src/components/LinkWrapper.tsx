import React from 'react';
import Link from 'next/link';
import { classnames } from 'utils';


export const LinkWrapper: React.FC<Props> = ({ children, link, externalLink, className }) => {

    return (

        <>

            {(link || externalLink) ?

                <Link
                    href={String(link || externalLink)}
                    {...(externalLink ? { target: "_blank" } : {})}
                    className={classnames(className || "", "link-wrapper")}
                    tabIndex={0}
                    role="button"
                >

                    {children}

                </Link>

                :

                <>
                    {children}
                </>

            }

        </>

    )

}

interface Props {
    children: React.ReactElement,
    link?: string | null,
    externalLink?: string | null,
    className?: string
}

import React from 'react';
import Link from 'next/link';
import { CartIcon, DarkHeart, NavMenuIcon, SearchIcon, XCancelIcon } from 'components/Assets';
import { LinkWrapper } from 'components/LinkWrapper';

export const MobileHeaderToggler: React.FC<Props> = ({ setExpansion, isExpanded, hideLinks }): JSX.Element => {

    return (

        <div className="landingLayout-header-mobile-top">

            <div

                className='landingLayout-header-mobile-top-search'

                dangerouslySetInnerHTML={{ __html: SearchIcon }}

            />

            <Link

                href={"/"} >

                <img src={"svg/logo_black.svg"} alt={"weav"} />

            </Link>


            <div className="landingLayout-header-mobile-top-right">

                {hideLinks !== true &&

                    <>

                        <LinkWrapper

                            link={"/favourites"}

                        >

                            <span

                                dangerouslySetInnerHTML={{ __html: DarkHeart }}

                            />

                        </LinkWrapper>

                        <LinkWrapper

                            link={"/cart"}>

                            <span

                                dangerouslySetInnerHTML={{ __html: CartIcon }}

                            />

                        </LinkWrapper>

                    </>

                }

                <i

                    dangerouslySetInnerHTML={{ __html: isExpanded ? XCancelIcon : NavMenuIcon }}

                    onClick={() => {
                        setExpansion(!isExpanded);
                    }}
                />

            </div>

        </div>

    );
}

interface Props {
    setExpansion(e: boolean): void,
    isExpanded: boolean,
    hideLinks?: boolean
}

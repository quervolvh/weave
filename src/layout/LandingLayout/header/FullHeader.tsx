import React, { useEffect } from 'react';
import Link from 'next/link';
import { classnames } from 'utils';
import { Button, CartIcon, DarkHeart, SearchIcon } from 'components';
import { LinkWrapper } from 'components/LinkWrapper';


export const FullHeader: React.FC<{ toggleCart: () => void, showCart: boolean }> = ({ toggleCart, showCart }) => {

    const scrollListener = () => {

        if (window.scrollY > 150 && window.screenY < 180) {

            document?.getElementsByClassName?.("landingLayout-header")?.[0]?.classList?.add("header-stick-to-background");

        }

        if (window.scrollY < 120) {

            document?.getElementsByClassName?.("landingLayout-header")?.[0]?.classList?.remove("header-stick-to-background");

        }

    };

    const CartButton:React.FC<{ onClick: ()=> void | null }> = ({ onClick }) => {

        return (

            <div

                tabIndex={0}

                role='button'

                className='landingLayout-header-right-cart'

                onClick={() => onClick()}

            >

                <span

                    dangerouslySetInnerHTML={{ __html: CartIcon }}

                />

            </div>


        );

    }

    useEffect(() => {

        if (typeof window !== "undefined") {

            window.addEventListener("scroll", scrollListener, true);


            return (() => {

                window.removeEventListener("scroll", scrollListener, true)

            })

        }

        // eslint-disable-next-line
    }, [document]);

    return (

        <div
            className={classnames('landingLayout-header', 'with-shades')}>

            <div className="landingLayout-header-holder">

                <div className="landingLayout-header-left">

                    <Button

                        className='landingLayout-header-left-search transparent'

                        label='SEARCH'

                        svgIcon={SearchIcon}

                    />

                </div>

                <Link
                    href={"/"}
                >
                    <img src={"svg/logo_black.svg"} alt={"weav"} />

                </Link>

                <div className="landingLayout-header-right">

                    <LinkWrapper

                        link={"/favourites"}>

                        <span

                            tabIndex={0}

                            role='button'

                            dangerouslySetInnerHTML={{ __html: DarkHeart }}

                        />

                    </LinkWrapper>

                    {showCart && <CartButton onClick={()=> null} />}

                    {!showCart && <CartButton onClick={()=> toggleCart()} />}

                    <Button className='transparent landingLayout-header-right-log-in' label='LOG IN' />

                    <Button className='landingLayout-header-right-sign-up' label='Sign Up' />

                </div>

            </div>

        </div>
    );
}

import React from 'react';
import { FullHeader } from './FullHeader';
import { HeaderCategories } from './HeaderCategories';
import { MobileHeader } from './MobileHeader';

export const Header: React.FC<Props> = ({ isMobile }): JSX.Element => {

    return (
        <>

            {(isMobile) ?
                <MobileHeader /> :

                <>
                    <FullHeader />
                    <HeaderCategories />
                </>
            }

        </>
    )
}
interface Props {
    isMobile: boolean,
    deviceWidth: number,
}

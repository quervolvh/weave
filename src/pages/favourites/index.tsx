import React from 'react';
import { LandingLayout } from 'layout';
import { EmptyFavorites } from 'common/Favorites/EmptyFavorites';
import { Favorites as BaseFavorites } from 'common/Favorites/index';
import { useRouter } from 'next/router';

const Favorites: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    const router = useRouter();

    const { empty } = router.query;

    return (

        <LandingLayout
            headTitle={"Weave"}
            isMobile={isMobile}
            className={"favorites"}
            deviceWidth={deviceWidth}
            showFooter={true}
            showHeader={true}
        >

            {empty === "true" && <EmptyFavorites isMobile={isMobile} />}

            {!empty && <BaseFavorites isMobile={isMobile} />}

        </LandingLayout >

    )
}

export default Favorites;

interface Props {
    isMobile: boolean,
    deviceWidth: number
}

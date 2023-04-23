import React from 'react';
import { LinkWrapper } from 'components/LinkWrapper';
import { TrailArrow } from 'components';

export const LandingLayoutTrail: React.FC<Props> = ({

    trail

}) => {

    return (
        <div className="landingLayout-trail">

            {trail.map((item, index) =>

                <React.Fragment

                    key={`landing-layout-trail-${index}`}

                >

                    <LinkWrapper

                        link={item.link}>

                        <p> {item.title} </p>

                    </LinkWrapper>

                    {index !== (trail.length - 1) &&

                        <div

                            className='landingLayout-trail-right'

                            dangerouslySetInnerHTML={{ __html: TrailArrow }}

                        />

                    }

                </React.Fragment>

            )}

        </div>
    );
}

interface Props {

    trail: {

        title: string,

        link: string

    }[]

}
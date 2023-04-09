import React, { ReactElement } from 'react';
import { ComponentHeader } from 'components';
import { classnames } from 'utils';

export const ComponentHolder: React.FC<Props> = ({ visibility, reffer, ...props }) => {

    return (
        <>
            {(visibility === false ? visibility : true) &&

                <div 
                    
                        className={`component-holder ${props.className || ""}`}
                    
                        {...(reffer ? { ref : reffer } : {} )}

                        >

                    {(props.title || props.customHeader || props.headerControl) &&

                        <>
                            {!props.customHeader ?

                                < ComponentHeader 
                                    {...props} 
                                    control={props.headerControl} 
                                    className={props.headerClass || ""} 
                                />

                                :

                                <props.customHeader />
                            }

                        </>
                    }

                    <div className={classnames("component-holder-body", props.bodyClass)}>
                        {props.children && props.children}
                    </div>
                </div>
            }
        </>
    );
}

interface Props {
    headerControl?: ReactElement<any, any>,
    visibility?: boolean,
    dangerousTitle?: string,
    title?: string,
    subtitle?: string,
    customHeader?: React.FC,
    className?: string,
    bodyClass?: string,
    headerClass?: string,
    reffer?: any
}

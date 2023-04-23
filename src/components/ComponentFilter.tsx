import React, { ReactElement } from 'react';
import { Filters } from 'common/Filters';
import { classnames } from 'utils';

export const ComponentFilter: React.FC<Props> = ({
    
    className,
    
    filterOptions,

    onReset

}) => {


    return (

        <div className={classnames("component-filter", className)}>

            {filterOptions &&

                <div className="component-filter-right">

                    <Filters
                        filterOptions={filterOptions}
                        onReset={() => onReset ? onReset() : null }
                    />

                </div>

            }

        </div>

    )
}

interface Props {

    title?: string,

    className?: string,

    subtitle?: string,

    onReset?: () => void,

    leftComponent?: ReactElement<any, any>,

    filterOptions?: {

        

        safeParams?: string[],

        label?: string,

        options?: {

            label: string,

            value: string,

            multiSelect?: boolean,

            alwaysVisible?: boolean,
            
            type?: "options" | "slider" | 'color',

            options?: {

                label: string,

                value?: string | boolean | null,

            }[]

        }[],

        classNames?: string,

        noFilterIcon?: boolean,

        preSelectedOption?: string,

        withDateSelector?: boolean,

        onSubmit?: (e: { [key: string]: string | boolean | undefined | null | { [key: string]: boolean | string | undefined | null } }) => void
    }

}

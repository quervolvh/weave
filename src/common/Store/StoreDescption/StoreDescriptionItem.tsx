import React from 'react';

export const StoreDescriptionItem: React.FC<Props> = ({

    title,

    updatedAt,

    value,

    arrayValues

}) => {

    return (

        <div className='store-description-item'>

            <div className='store-description-item-title'>

                <h2> {title} </h2>

                {updatedAt && <p> Last updated on {updatedAt} </p>}

            </div>

            {value &&

                <div className='store-description-item-value'>

                    {value}

                </div>

            }

            {arrayValues && arrayValues.map((item, index) =>

                <div className='store-description-item-array' key={`${title}-arr-${index}`}>

                    {item.title && <h2> {item.title} </h2>}

                    {item.value && <p> {item.value} </p>}

                </div>
            )}

        </div>

    )
}

interface Props {

    title: string,

    updatedAt?: string,

    value?: string,

    arrayValues?: { title?: string, value?: string }[]

}

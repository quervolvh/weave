import React from "react";

export const NewCollectionsItem:React.FC<Props> = ({

    image, 

    title

}) => {

    return (

        <div className="new-collection-item">

            <div className="new-collection-item-image">

                <img src={image} alt={title} />
 
            </div>

            <p> {title} </p>

        </div>

    )

}

interface Props {

    image: string,

    title: string

}

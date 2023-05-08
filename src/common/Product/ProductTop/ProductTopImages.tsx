import React, { useState } from "react";

export const ProductTopImages: React.FC<Props> = ({ product }) => {

    const [selectedImage, setSelectedImage] = useState(0);

    return (

        <div className="product-top-images"

        >

            <div className="product-top-images-thumbnail">

                {product?.images.map((item, index) =>

                    <div

                        key={`product-image-${index}`}

                        onClick={() => setSelectedImage(index)}

                    >

                        <img

                            src={item.thumbnail}

                            alt={product.label}

                        />

                    </div>

                )}

            </div>

            <div className="product-top-images-big">

                <img src={product.images[selectedImage].image} alt={product.label} />

            </div>

        </div>

    );

}

interface Props {

    product: {

        images: { thumbnail: string, image: string }[],

        label: string

    }

}

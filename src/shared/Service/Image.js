import React, { useEffect, useState } from 'react';
import Img from './Img';

const Image = () => {
    const [images, setImages] = useState([]);
    // useEffect(() => {
    //     fetch('https://review-server-five.vercel.app/services')
    //         .then(res => res.json())
    //         .then(data => setImages(data))
    // }, [])
    return (
        <div>
            {
                images.map(image => <Img
                key={image.service_id}
                image={image}
                ></Img>)
            }
        </div>
    );
};

export default Image;
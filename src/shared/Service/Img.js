import React from 'react';

const Img = ({image}) => {
    const {img} = image;
    return (
        <div>
            <figure><img className=' h-60 w-full' src={img} alt="" /></figure>
        </div>
    );
};

export default Img;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';

const Service = ({ service }) => {
    const { img, price, description, title, _id } = service;
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch('https://review-server-five.vercel.app/services')
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])
    return (
        <div className='flex justify-center'>
            <div className="card card-compact w-11/12 bg-base-100 shadow-xl">
                <label htmlFor="my-modal-3" className=""><figure><img className=' h-60 w-full' src={img} alt="" /></figure></label>

                <div className="card-body">
                    <h2 className="card-title text-rose-700">{title}</h2>
                    <div>
                        {description.length > 100 ?
                            (
                                <div>
                                    {`${description.substring(0, 100)}...`}<Link href="#">Read more</Link>
                                </div>
                            ) :
                            <p>{description}</p>
                        }
                    </div>
                    <div className="card-actions justify-between">
                        <h2 className="card-title text-rose-600">{price}</h2>
                        <button className="btn btn-primary"><Link to={`/review/${_id}`}>Review</Link></button>
                    </div>
                </div>
            </div>

            {
                images.map(image => <Image
                key={image.service_id}
                image={image}
                ></Image>)
            }

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <figure><img className='  w-full' src={img} alt="" /></figure>
                </div>
            </div>
        </div>
    );
};

export default Service;
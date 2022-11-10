import React, { useContext, useEffect, useState } from 'react';
import {AuthContext} from '../contexts/Authprovider/Authprovider';

const AllReviews = () => {
    const {user} = useContext(AuthContext);
    const [review, setReview] = useState({});


    useEffect( () =>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data =>setReview(data))
    }, [user?.email])

    
    return (
        <div>
            <h2>you have: {review.length}</h2>
        </div>
    );
};

export default AllReviews;
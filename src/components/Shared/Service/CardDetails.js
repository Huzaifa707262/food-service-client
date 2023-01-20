import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CardDetails = () => {
    const foodDetails = useLoaderData();
    console.log(foodDetails)
    const { name, image, price, description } = foodDetails;
    return (
        <div className="card md:w-80 h-auto bg-base-100 shadow-xl mt-4  ms-3 mr-3">
            <figure><img src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add Food</button>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
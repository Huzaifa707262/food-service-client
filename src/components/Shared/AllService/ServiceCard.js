import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { _id, name, price, image, description } = service;

    return (
        <div className="card md:w-80 h-auto bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
                <img src={image} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <p>{
                    description.length > 100 ?
                        <>{description.slice(0, 100) + '...'} <Link to={`/foods/${_id}`}>SeeMore</Link></>
                        :
                        description

                }</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Add Food</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;


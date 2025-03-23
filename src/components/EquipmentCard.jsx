import React from 'react';
import { Link } from 'react-router';

const EquipmentCard = ({data}) => {

    const { _id, name, brand, quantity, price, processing, rating, category, details, photo } = data;




    return (
        <div className='rancho-font'>
            <div className="card bg-base-100 w-[350px] shadow-sm rounded-2xl border-2">
                <figure className='p-2'>
                    <img
                    src={photo} className='w-full h-[290px] object-cover rounded-lg border-2 border-gray-300 shadow-md'
                    alt="Equipment Img" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="">
                        <p className=""> <span className="font-semibold">Brand :</span> {brand}</p>
                        <p className=""> <span className="font-semibold">Quantity :</span> {quantity}</p>
                        <p className=""> <span className="font-semibold">Processing :</span> {processing}</p>
                        <p className=""> <span className="font-semibold">Rating :</span> {rating}</p>
                        <p className=""> <span className="font-semibold">Category :</span> {category}</p>
                        <p className=""> <span className="font-semibold">Price :</span> {price}</p>
                    </div>
                    <p>{details}</p>
                    <div className="card-actions justify-center"> 
                        <Link to={`/details/${_id}`} className="btn btn-primary w-full">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EquipmentCard;
import React from 'react';

const EquipmentCard = ({data}) => {

    const { _id, name, brand, quantity, price, processing, rating, category, details, photo } = data;



    return (
        <div className='rancho-font'>
            <div className="card bg-base-100 w-[350px] shadow-sm rounded-2xl border-2">
                <figure>
                    <img
                    src={photo}
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
                    <button className="btn btn-primary w-full">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EquipmentCard;
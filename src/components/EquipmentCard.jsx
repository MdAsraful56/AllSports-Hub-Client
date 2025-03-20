import React from 'react';

const EquipmentCard = ({data}) => {

    const {_id, details, name} = data;

    return (
        <div className=''>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EquipmentCard;
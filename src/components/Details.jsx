import React from 'react';
import { useLoaderData } from 'react-router';

const Details = () => {

    const data = useLoaderData();
    const { _id, name, brand, quantity, price, processing, rating, category, details, photo } = data;



    return (
        <div className='m-20'>
            <div className="flex lg:flex-row flex-col items-center justify-center gap-10 rancho-font">
                <div className="">
                    <img src={photo} className='w-full h-[290px] object-cover rounded-lg border-2 border-gray-300 shadow-md' alt="" />
                </div>
                <div className="">
                    <h2 className='font-medium'> <span className='font-bold'>Name :</span> {name}</h2>
                    <div className="">
                        <p className=''> <span className='font-semibold'>Brand :</span> {brand}</p>
                        <p className=''> <span className='font-semibold'>Quantity :</span> {quantity}</p>
                        <p className=''> <span className='font-semibold'>Processing :</span> {processing}</p>
                        <p className=''> <span className='font-semibold'>Rating :</span> {rating}</p>
                        <p className=''> <span className='font-semibold'>Category :</span> {category}</p>
                        <p className=''> <span className='font-semibold'>Price :</span> {price}</p>
                    </div>
                    <p className=''>{details}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;
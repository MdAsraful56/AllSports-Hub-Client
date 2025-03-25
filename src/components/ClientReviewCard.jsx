import React from 'react';
import { AuthContext } from '../provider/AuthProvider';

const ClientReviewCard = ({ review }) => {

    const { name, email, photo, message } = review;
    console.log(review);


    return (
        <div className='flex flex-col-reverse gap-5 border-2 border-gray-300 p-3 rounded-lg w-1/3'>
            <div className="flex flex-row gap-5">
                <img src={photo} alt="" className="w-16 h-16 rounded-full object-cover border-2 border-gray-300" />
                <div className="">
                    <h2 className="text-base font-semibold">{name}</h2>
                    <h4 className="text-base font-semibold">{email}</h4>
                </div>
            </div>
            <div className="border-b-2 border-blue-300 p-2">
                <p className="">{message}</p>
            </div>
        </div>
    );
};

export default ClientReviewCard;
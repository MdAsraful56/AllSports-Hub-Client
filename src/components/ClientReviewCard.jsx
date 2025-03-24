import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const ClientReviewCard = ({ review }) => {

    const { user } = useContext(AuthContext);
    console.log(user)

    // const {date, title, body, image_url} = review;
    // console.log(review)


    return (
        <div className='flex flex-col-reverse gap-5 border-2 border-gray-300 p-3 rounded-lg w-1/3'>
            <div className="flex flex-row gap-5">
                <img src={user?.photoURL} alt="" className="w-16 h-16 rounded-full object-cover border-2 border-gray-300" />
                <div className="">
                    <h2 className="text-base font-semibold">{user?.displayName}</h2>
                    <h4 className="text-base font-semibold">{user?.email}</h4>
                </div>
            </div>
            <div className="border-b-2 border-blue-300 p-2">
                <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure numquam ab error explicabo dolore aliquid enim libero, natus accusamus voluptatum totam assumenda tenetur magni nam similique. Dicta sequi culpa vitae.</p>
            </div>
        </div>
    );
};

export default ClientReviewCard;
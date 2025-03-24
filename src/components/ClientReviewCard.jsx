import React from 'react';

const ClientReviewCard = ({ review }) => {

    // const {date, title, body, image_url} = review;
    // console.log(review)

    
    const reviews = {
        name: 'Ashraful',
        img: 'https',
        message: 'something text'
    }

    return (
        <div className=''>
            <div className="">
                <img src={reviews.img} alt="" className="" />
            </div>
            <div className="">
                <h2 className="text-xl">{reviews.name}</h2>
            </div>
        </div>
    );
};

export default ClientReviewCard;
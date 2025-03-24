import React from 'react';
// import { useLoaderData } from 'react-router';
import ClientReviewCard from './ClientReviewCard';

const ClientReview = () => {
    

    // const reviews = {
    //     name: 'Ashraful',
    //     img: 'https',
    //     message: 'something text'
    // }


    return (
        <div>
            <ClientReviewCard />
            {/* {
                reviews.map((review, idx) => <ClientReviewCard key={idx} review={review} />)
            } */}
        </div>
    );
};

export default ClientReview;
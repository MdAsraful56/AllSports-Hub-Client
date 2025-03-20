import React from 'react';
import { useLoaderData } from 'react-router';
import ClientReviewCard from './ClientReviewCard';

const ClientReview = () => {
    

    const reviews = useLoaderData();
    console.log(reviews)

    return (
        <div>
            {
                reviews.map((review, idx) => <ClientReviewCard key={idx} review={review} />)
            }
        </div>
    );
};

export default ClientReview;
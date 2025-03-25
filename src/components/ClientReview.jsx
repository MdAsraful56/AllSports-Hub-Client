import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router';
import ClientReviewCard from './ClientReviewCard';
import Marquee from "react-fast-marquee";

const ClientReview = () => {


    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/review")
            .then((res) => res.json())
            .then((data) => {
                console.log("📌 Reviews Data:", data); // Debugging
                setReviews(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("🔴 Fetch Error:", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <span className="loading loading-dots loading-xl flex items-center justify-center m-20"></span>

    // console.log('reuveuvdjsakfhwuei', reviews)

    return (
        <Marquee pauseOnHover  className=''>
            <div className="grid  gap-5 grid-cols-3">
                {
                    reviews.map((review, idx) => <ClientReviewCard key={idx} review={review} />)
                }
            </div>
        </Marquee>
    );
};

export default ClientReview;
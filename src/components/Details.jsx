import React from 'react';
import { useLoaderData } from 'react-router';

const Details = () => {

    const data = useLoaderData();
    const { _id, name, brand, quantity, price, processing, rating, category, details, photo } = data;



    return (
        <div>
            
        </div>
    );
};

export default Details;
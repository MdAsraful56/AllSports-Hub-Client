import React from 'react';
import Img404 from '../assets/404.jpg';

const Error = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <img 
                src={Img404} 
                alt="404 - Page Not Found" 
                className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-lg shadow-lg"
            />
        </div>
    );
};

export default Error;

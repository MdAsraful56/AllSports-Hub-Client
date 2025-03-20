import React from 'react';
import Slider from '../components/Slider';
import CompanyLogo from '../components/CompanyLogo';

const HomeLayout = () => {
    return (
        <div className='mt-3'>
            <Slider/>
            <CompanyLogo/>
            {/* other components  */}
            <div className="lg:px-32 md:px-20 px-10 my-20 mb-96">
                
            </div>
        </div>
    );
};

export default HomeLayout;
import React from 'react';
import Slider from '../components/Slider';
import CompanyLogo from '../components/CompanyLogo';

const HomeLayout = () => {
    return (
        <div className='mt-3'>
            <Slider/>
            {/* other components  */}
            <div className="lg:px-32 md:px-20 px-10">
                <CompanyLogo/>
            </div>
        </div>
    );
};

export default HomeLayout;
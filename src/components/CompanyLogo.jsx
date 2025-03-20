import React from 'react';
import Marquee from "react-fast-marquee";
import Img01 from '../assets/CompanyLogo/Image (1).png'
import Img02 from '../assets/CompanyLogo/Image (2).png'
import Img03 from '../assets/CompanyLogo/Image (3).png'
import Img04 from '../assets/CompanyLogo/Image (4).png'
import Img05 from '../assets/CompanyLogo/Image (5).png'
import Img06 from '../assets/CompanyLogo/Image (6).png'
import Img07 from '../assets/CompanyLogo/Image (7).png'
import Img08 from '../assets/CompanyLogo/Image (8).png'
import Img09 from '../assets/CompanyLogo/Image (9).png'
import Img10 from '../assets/CompanyLogo/Image (10).png'
import Img11 from '../assets/CompanyLogo/Image (11).png'
import Img12 from '../assets/CompanyLogo/Image (12).png'


const CompanyLogo = () => {
    return (
        <div>
            <div className="">
                <h2 className="lg:text-2xl text-xl rancho-font text-center font-semibold p-3">"Explore Products from All Our Partner Companies"
                </h2>
            </div>
            <Marquee pauseOnHover gradient direction={'right'} speed={100} delay={3} className=''>
                <div className="">
                    <img src={Img01} alt="" className="w-40 h-36" />
                </div>
                <div className="">
                    <img src={Img02} alt="" className="w-40 h-28" />
                </div>
                <div className="">
                    <img src={Img03} alt="" className="w-40 h-28" />
                </div>
                <div className="">
                    <img src={Img04} alt="" className="w-40 h-28" />
                </div>
                <div className="">
                    <img src={Img05} alt="" className="w-40 h-28" />
                </div>
                <div className="">
                    <img src={Img06} alt="" className="w-40 h-28" />
                </div>
                <div className="">
                    <img src={Img07} alt="" className="w-40 h-28" />
                </div>
                <div className="">
                    <img src={Img08} alt="" className="w-40 h-28" />
                </div>
                <div className="">
                    <img src={Img09} alt="" className="w-40 h-28" />
                </div>
                <div className="">
                    <img src={Img10} alt="" className="w-40 h-28" />
                </div>
                <div className="">
                    <img src={Img11} alt="" className="w-40 h-28" />
                </div>
                <div className="">
                    <img src={Img12} alt="" className="w-40 h-28" />
                </div>
            </Marquee>
        </div>
    );
};

export default CompanyLogo;
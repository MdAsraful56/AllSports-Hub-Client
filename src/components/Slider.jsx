import React from 'react';
import Slider1 from '../assets/Slider/Slider (1).png'
import Slider2 from '../assets/Slider/Slider (2).png'
import Slider3 from '../assets/Slider/Slider (3).png'
import Slider4 from '../assets/Slider/Slider (4).png'


const Slider = () => {
    return (
        <div>
            <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full relative">
                
                </div>

                <div id="item2" className="carousel-item w-full bg-black flex flex-row-reverse">
                    <div className="pr-20">
                        <img src={Slider2} className="w-full h-96 object-cover" />
                    </div>
                    <div className="text-white text-left flex flex-col justify-center space-y-4">
                        <h2 className='text-2xl font-semibold'> Nike Velocity Blaze</h2>
                        <ul>
                            <li className="">Style: Performance Training Shoe</li>
                            <li className="">Features: High-energy return, durable outsole for traction</li>
                            <li className="">Colorway: Fiery Gradient with Contrasting Cool-Tone Highlights</li>
                        </ul>
                        <button className="btn">Details</button>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                    className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                    className="w-full" />
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Slider;
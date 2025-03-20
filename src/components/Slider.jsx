import React from 'react';
import Slider1 from '../assets/Slider/Slider (1).png'
import Slider2 from '../assets/Slider/Slider (2).png'
import Slider3 from '../assets/Slider/Slider (3).png'
import Slider4 from '../assets/Slider/Slider (4).png'


const Slider = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full bg-black flex lg:flex-row-reverse flex-col-reverse  ">
                    <div className="lg:w-1/2 w-full">
                        <img src={Slider1} className="lg:w-full h-96 lg:object-cover object-contain" />
                    </div>
                    <div className="text-white text-left flex flex-col justify-center space-y-4 rancho-font lg:w-1/2 w-full lg:px-10 px-4">
                        <h2 className='text-2xl font-semibold'>ASICS Gel-Trabuco 11</h2>
                        <ul>
                            <li className=""> <span className="text-red-500 font-bold">Style:</span> All-Terrain Running Shoe</li>
                            <li className=""> <span className="text-red-500 font-bold">Features:</span> GEL™ technology cushioning, DUOMAX™ support system, and ASICSGRIP™ outsole for enhanced durability and stability</li>
                            <li className=""> <span className="text-red-500 font-bold">Colorway:</span> Midnight Blue, Electric Yellow, and Black</li>
                        </ul>
                        <button className="btn btn-info hover:text-white hover:border-white  hover:bg-gradient-to-r from-green-400  to-blue-500">Details</button>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full bg-black flex lg:flex-row-reverse flex-col-reverse ">
                    <div className="pr-20">
                        <img src={Slider2} className="lg:w-full h-96 lg:object-cover object-contain" />
                    </div>
                    <div className="text-white text-left flex flex-col justify-center space-y-4 rancho-font lg:w-1/2 w-full lg:px-10 px-4">
                        <h2 className='text-2xl font-semibold'> Nike Velocity Blaze</h2>
                        <ul>
                            <li className=""> <span className="text-red-500 font-bold">Style:</span> Performance Training Shoe</li>
                            <li className=""> <span className="text-red-500 font-bold">Features:</span> High-energy return, durable outsole for traction</li>
                            <li className=""> <span className="text-red-500 font-bold">Colorway:</span> Fiery Gradient with Contrasting Cool-Tone Highlights</li>
                        </ul>
                        <button className="btn btn-info hover:text-white hover:border-white  hover:bg-gradient-to-r from-green-400  to-blue-500">Details</button>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full bg-black flex lg:flex-row-reverse flex-col-reverse ">
                    <div className="pr-20 lg:w-1/2 w-full">
                        <img src={Slider3} className="lg:w-full h-96 lg:object-cover object-contain" />
                    </div>
                    <div className="text-white text-left flex flex-col justify-center space-y-4 rancho-font lg:w-1/2 w-full lg:px-10 px-4">
                        <h2 className='text-2xl font-semibold'> Nike Velocity Blaze</h2>
                        <ul>
                            <li className=""> <span className="text-red-500 font-bold">Style:</span> Performance Training Shoe</li>
                            <li className=""> <span className="text-red-500 font-bold">Features:</span> High-energy return, durable outsole for traction</li>
                            <li className=""> <span className="text-red-500 font-bold">Colorway:</span> Fiery Gradient with Contrasting Cool-Tone Highlights</li>
                        </ul>
                        <button className="btn btn-info hover:text-white hover:border-white  hover:bg-gradient-to-r from-green-400  to-blue-500">Details</button>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full bg-black flex lg:flex-row-reverse flex-col-reverse ">
                    <div className="pr-20 lg:w-1/2 w-full">
                        <img src={Slider4} className="lg:w-full h-96 lg:object-cover object-contain" />
                    </div>
                    <div className="text-white text-left flex flex-col justify-center space-y-4 rancho-font lg:w-1/2 w-full lg:px-10 px-4">
                        <h2 className='text-2xl font-semibold'> Nike Velocity Blaze</h2>
                        <ul>
                            <li className=""> <span className="text-red-500 font-bold">Style:</span> Performance Training Shoe</li>
                            <li className=""> <span className="text-red-500 font-bold">Features:</span> High-energy return, durable outsole for traction</li>
                            <li className=""> <span className="text-red-500 font-bold">Colorway:</span> Fiery Gradient with Contrasting Cool-Tone Highlights</li>
                        </ul>
                        <button className="btn btn-info hover:text-white hover:border-white  hover:bg-gradient-to-r from-green-400  to-blue-500">Details</button>
                    </div>
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
import React from 'react';
import Slider from '../components/Slider';
import CompanyLogo from '../components/CompanyLogo';
import { Link } from 'react-router';
import Accordion from '../assets/Accordion.webp'
import AddClientReview from '../components/AddClientReview';
import ClientReview from '../components/ClientReview';

const HomeLayout = () => {



    return (
        <div className='mt-3'>
            <Slider/>
            <CompanyLogo/>
            {/* other components  */}
            <div className="lg:px-32 md:px-20 px-10 my-20 mb-20">
                <div className="rancho-font text-center space-y-5 border-b-2 border-t-2 py-4 border-dashed">
                    <h2 className="text-3xl font-semibold text-center">"Add New Equipment"</h2>
                    <Link to='/addequipment'><button className="btn btn-primary hover:text-white hover:border-white  hover:bg-gradient-to-r from-green-400  to-blue-500">Add Equipment</button></Link>
                </div>
                <div className="rancho-font mt-10">
                    <h2 className="text-3xl font-semibold text-center">All Equipment Category </h2>
                    
                </div>
                <h2 className="text-2xl text-center rancho-font font-semibold mt-20">Our Service</h2>
                <div className="flex lg:flex-row flex-col gap-5 mt-4 rancho-font">
                    <div className="lg:w-1/2 w-full">
                        <img src={Accordion} alt="" className="h-96 w-full object-cover" />
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <div className="join join-vertical bg-base-100">
                            <div className="collapse collapse-arrow join-item border-base-300 border">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className="collapse-title font-semibold"> Why Choose Us?</div>
                                <div className="collapse-content text-sm">
                                            ✔️ Wide range of premium products <br />
                                            ✔️ Affordable prices & exclusive discounts <br />
                                            ✔️ Fast and secure delivery <br />
                                            ✔️ Customer satisfaction guaranteed <br />
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border-base-300 border">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title font-semibold">Looking for the Best Sports Gear? Check Out Our Top Picks!</div>
                                <div className="collapse-content text-sm">A web service that helps customers easily browse and find the best sports gear for various activities, from team sports to individual training. With personalized recommendations and reviews, users can confidently choose high-quality equipment tailored to their needs.</div>
                            </div>
                            <div className="collapse collapse-arrow join-item border-base-300 border">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title font-semibold">Ready for the Big Game? Find the Equipment You Need Here!</div>
                                <div className="collapse-content text-sm">A one-stop web service where customers can shop for all the essential gear they need for any upcoming sports event, from jerseys and cleats to balls and protective equipment. It includes product details, sizes, and even the option to purchase entire team kits for convenience.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-20">
                    <h2 className="text-2xl font-semibold rancho-font text-center mt-10 mb-3">Client Review</h2>
                    <div className="">
                        <ClientReview/>
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <AddClientReview />
                    </div>
                </div>
            </div>

            <div className="mb-10">
                <figure className="diff aspect-16/9 h-72" tabIndex={0}>
                    <div className="diff-item-1" role="img">
                        <div className="bg-primary text-primary-content grid place-content-center text-2xl lg:text-9xl font-black">
                        All Sports Hub
                        </div>
                    </div>
                    <div className="diff-item-2" role="img" tabIndex={0}>
                        <div className="bg-base-200 grid place-content-center text-2xl lg:text-9xl font-black">All Sports Hub</div>
                    </div>
                    <div className="diff-resizer"></div>
                </figure>
            </div>
        </div>
    );
};

export default HomeLayout;
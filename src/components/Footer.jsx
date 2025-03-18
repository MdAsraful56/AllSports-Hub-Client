import React from 'react';
// import capIcon from '../assets/more/logo1.png'
// import footerImg from '../assets/more/9.png'
// import copyRigntImg from '../assets/more/24.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="">
            <div className='w-full h-[450px] '>
                {/* <img src={footerImg} alt="" className="w-full h-[450px] object-cover " /> */}
                <div className="px-10 flex gap-10 md:flex-row flex-col items-center justify-between">
                    {/* details info */}
                    <div className="md:w-1/2 w-full space-y-4">
                        {/* <img src={capIcon} alt="" className="h-32 w-28" /> */}
                        <h3 className="text-3xl text-[#331A15] rancho-font font-semibold ">All Sports Hub</h3>
                        <p className="orbitron-font text-lg">Stay connected with us! Share your unforgettable sports moments with your best companions. Reach out and be part of the AllSports Hub community!</p>
                        {/* icon section  */}
                        <section className="flex flex-row gap-5">
                            <a href="https://www.facebook.com/share/16E9frdLjQ/" target='_blank'><FaFacebook size={35}/></a>
                            <FaTwitter size={35}/>
                            <a href="https://www.instagram.com/ashraful_islam_asrf_56?igsh=MWxnb3dwYmdwc2c0cw==" target='_blank'><FaInstagram size={35}/></a>
                            <a href="https://www.linkedin.com/in/asraful4/" target='_blank'><FaLinkedin size={35}/></a>
                        </section>
                        <h3 className="text-3xl text-[#331A15] rancho-font font-semibold ">Get in Touch</h3>
                        <div className="flex flex-row gap-5 text-center items-center raleway-font ">
                            <FaPhoneAlt/> <span>+8801889245756</span>
                        </div>
                        <div className="flex flex-row gap-5 text-center items-center raleway-font ">
                            <MdEmail/> <span>work.mdasraful56@gmail.com</span>
                        </div>
                        <div className="flex flex-row gap-5 text-center items-center raleway-font ">
                            <FaLocationDot/> <span>72, Wall street, King Road, Dhaka</span>
                        </div>
                    </div>
                    {/* contact info */}
                    <div className="md:w-1/2 w-full lg:ml-20 ml-2">
                        <h2 className="text-4xl text-[#331A15] rancho-font font-semibold mb-5">Connect with Us</h2>
                        <form className='space-y-3'>
                            <input type="text" name='name' className='input input-accent' placeholder='Name' /> 
                            <br />
                            <input type="email" name="email" id="" className='input input-accent' placeholder='example@mail.com' />
                            <br />
                            <textarea type="text" placeholder="Messages" className="resize-none textarea textarea-accent"></textarea>
                        </form>
                        <button className="btn mt-3 text-lg rancho-font text-[#331A15] rounded-2xl border-2 border-[#331A15] ">Send Message</button>
                    </div>
                </div>
                <h2 className="lg:text-3xl md:text-2xl text-lg text-center text-black rancho-font pt-5 px-5">Copyright All Sports Hub ! All Rights Reserved</h2>
            </div>
            {/* <div className="h-16 w-full text-center relative pt-10 md:block hidden">
                <img src={copyRigntImg} alt="" className="h-16 w-full object-cover" />
                <h2 className="text-3xl text-center absolute inset-0 top-1/2 rancho-font pt-5 text-white">Copyright Espresso Emporium ! All Rights Reserved</h2>
            </div> */}
        </div>
    );
};

export default Footer;
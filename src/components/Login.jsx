import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex md:flex-row-reverse flex-col lg:mx-40 md:mx-20 mx-12 items-center justify-center mt-16 border-2 border-red-400 rounded-2xl md:gap-2 gap-10'>
            <div className="md:w-2/5 w-full bg-blue-500 h-[450px] text-center space-y-3 items-center justify-center flex flex-col md:rounded-r-2xl iansui-font p-2">
                <h2 className="text-4xl">New Here?</h2>
                <p className="">If you don’t have an account, sign up now and join us!</p>
                <Link to='/aa'><button className="btn btn-accent iansui-font font-semibold text-base rounded-lg hover:bg-transparent hover:text-white hover:border-2 hover:border-[#a5357c]">Registration</button></Link>
            </div>
            <form className="md:w-3/5 w-full flex flex-col gap-4 items-center justify-center iansui-font">
                <h2 className="text-2xl font-semibold">Login Your Account</h2>
                <label className="input validator">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                        <input type="email" placeholder="mail@site.com" required/>
                </label>
                <label className="input validator">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg>
                        <input type="password" required placeholder="Password" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
                </label>
                <input type="submit" value="Login" className='btn btn-accent font-semibold text-sm rounded-lg hover:bg-transparent hover:border-2 hover:border-[#a5357c]'/>
            </form>
        </div>
    );
};

export default Login;
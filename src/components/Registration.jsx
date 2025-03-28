import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from 'react-toastify';


const Registration = () => {

    const { createUser, updateInformation, setLoader, setUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigrate = useNavigate();

    const handleRegistration = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, photo, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                const creationTime = result?.user?.metadata?.creationTime;
                const newUser = {name, email, photo, creationTime}
                updateInformation({ photoURL: photo, displayName: name })
                .then(() => {
                    toast.success("Successfully Registration !");
                    setLoader(true);
                    setUser(user);
                        setTimeout(() => {
                            setLoader(false);  
                        }, 100);
                    console.log(result.user);
                    e.target.reset;
                    navigrate("/") ;

                    // save to new user info to database

                        fetch('http://localhost:5000/users', {
                            method : 'POST',
                            headers : {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(newUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log('user save to database', data);
                            })

                })
                // eslint-disable-next-line no-unused-vars
                .catch((err) => {
                    toast.error("Failed to update user information.");
                });
            })
            .catch(error => {
                toast.error(error.message || "Failed to Registration.Your mail is already exist!");
            })
        };
    

    return (
        <div className='flex md:flex-row flex-col lg:mx-40 md:mx-20 mx-12 mb-10 items-center justify-center mt-16 rounded-2xl md:gap-2 gap-10'>
            <div className="md:w-2/5 w-full bg-blue-500 h-[450px] text-center space-y-3 items-center justify-center flex flex-col md:rounded-l-2xl">
                <h2 className="text-4xl iansui-font">Welcome Back!</h2>
                <p className="iansui-font">If you already have an account, please log in with your credentials.</p>
                <Link to='/login'><button className="btn btn-accent iansui-font font-semibold text-base rounded-lg hover:bg-transparent hover:text-white hover:border-2 hover:border-[#a5357c]">Login</button></Link>
            </div>
            <form onSubmit={handleRegistration} className="md:w-3/5 w-full flex flex-col gap-4 items-center justify-center iansui-font">
                <h2 className="text-2xl font-semibold">Create a Account</h2>
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
                    <input type="input" name='name' required placeholder="Name" pattern="[A-Za-z][A-Za-z0-9\-]*" title="Only letters, numbers or dash" />
                </label>
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></g></svg>
                    <input type="url" name='photo' required placeholder="Photo URL" pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$" title="Must be valid URL" />
                </label>
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                    <input type="email" name='email' placeholder="mail@site.com" required/>
                </label>
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg>
                    <input type={showPassword ? 'text' : 'password'} name='password' required placeholder="Password" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
                    <button onClick={() => {setShowPassword(!showPassword)}} className="btn btn-xs absolute right-1 top-2" type="button">
                        {
                            showPassword ?  <FaEye /> : <FaEyeSlash />
                        }
                    </button>
                </label>
                <input type="submit" value="Registration" className='btn btn-accent font-semibold text-sm rounded-lg hover:bg-transparent hover:border-2 hover:border-[#a5357c]'/>
            </form>
        </div>
    );
};

export default Registration;


import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const nav = <>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/aa'><li>Registration</li></NavLink>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            nav
                        }
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">AllSports Hub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {
                        nav
                    }
                    </ul>
                </div>
                <div className="navbar-end">

                {user && user.email ? (
                    <>
                        {/* User Avatar */}
                        {<img src={user?.photoURL}></img> && (
                        (
                        // user profile
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-12 border-2 border-blue-500 rounded-full">
                                    {user ? (
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={user.photoURL}
                                    />
                                    ) : (
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    />
                                    )}
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow" >
                                <li>
                                    {user ? (
                                        user.displayName
                                    ) : (
                                        <h1>Annonymus user</h1>
                                    )}
                                </li>
                                <li>{/* <a>Settings</a> */}</li>
                                <li>
                                    <button onClick={logOut}>Logout</button>
                                </li>
                            </ul>
                        </div>
                        ))}
                    </>
                    ) : (
                    <>
                        <NavLink  className={({ isActive }) =>
                        `inline-block px-6 py-3 text-sm font-bold uppercase rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 ${
                            isActive
                            ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white'
                            : 'text-gray-600 hover:text-gray-900'
                        }`
                        } to="/login" >Log In</NavLink>
                    </>
                    )}


                </div>
            </div>
        </div>
    );
};

export default Navbar;
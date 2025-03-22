import React, { useContext } from 'react';
// import bg from '../assets/more/11.png'
import { Link } from 'react-router';
import { FaArrowLeft } from "react-icons/fa";
import { AuthContext } from '../provider/AuthProvider';
// import { Swal } from 'sweetalert2';
import Swal from "sweetalert2";
const AddEquipment = () => {

    const { user } = useContext(AuthContext);


    const handleAddEquipment = e =>{
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const processing = form.processing.value;
        const rating = form.rating.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const email = user?.email;

        const equipment = {name, brand, quantity, price, processing, rating, category, details, photo, email};

        console.log(equipment);

        // send data to the server 
        fetch('http://localhost:5000/equipment', {
            method: 'post', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(equipment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Add Equipment Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }


    return (
        <div>
            <div className="mb-8">
                {/* <img src={bg} alt="" className=""  /> */}
                <div className=" mt-10 lg:px-52 md:px-24 px-5 space-y-3">
                    <Link to='/'>
                        <button className="text-2xl p-2 rounded-xl py-4 rancho-font gap-2 flex flex-row items-center hover:text-white hover:border-white  hover:bg-gradient-to-r from-green-400  to-blue-500"> <span><FaArrowLeft /></span> Back to home</button>
                    </Link>
                    <div className="text-center raleway-font bg-[#F4F3F0] py-5 rounded-xl">
                        <h1 className="text-4xl rancho-font">Add Equipment</h1>
                        {/* <p className="lg:px-40 md:px-10 px-5">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distraceted by the readable.</p> */}
                        <div className="lg:px-20 md:px-10 px-4 py-5">
                            <form onSubmit={handleAddEquipment}>
                                <div className="text-left flex md:flex-row flex-col gap-5">
                                    <fieldset className="fieldset md:w-1/2 w-full items-center">
                                        <legend className="fieldset-legend text-lg">Equipment Name</legend>
                                        <input type="text" name='name' className="input input-info input-lg w-full" placeholder="Enter Equipment Name" />
                                    </fieldset>
                                    <fieldset className=" md:w-1/2 w-full items-center">
                                        <legend className="fieldset-legend text-lg">Brand Name</legend>
                                        <input type="text" name='brand' className="input input-info input-lg w-full" placeholder="Enter Brand Name" />
                                    </fieldset>
                                </div>
                                <div className="text-left flex md:flex-row flex-col gap-5">
                                    <fieldset className="fieldset md:w-1/2 w-full items-center">
                                        <legend className="fieldset-legend text-lg">Quantity</legend>
                                        <input type="text" name='quantity' className="input input-info input-lg w-full" placeholder="Enter Quantity Number" />
                                    </fieldset>
                                    <fieldset className=" md:w-1/2 w-full items-center">
                                        <legend className="fieldset-legend text-lg">Price</legend>
                                        <input type="text" name='price' className="input input-info input-lg w-full" placeholder="Enter Price" />
                                    </fieldset>
                                </div>
                                <div className="text-left flex md:flex-row flex-col gap-5">
                                    <fieldset className="fieldset md:w-1/2 w-full items-center">
                                        <legend className="fieldset-legend text-lg">Processing Time</legend>
                                        <input type="text" name='processing' className="input input-info input-lg w-full" placeholder="Enter Processing Time" />
                                    </fieldset>
                                    <fieldset className=" md:w-1/2 w-full items-center">
                                        <legend className="fieldset-legend text-lg">Rating</legend>
                                        <input type="text" name='rating' className="input input-info input-lg w-full" placeholder="Enter Equipment Rating" />
                                    </fieldset>
                                </div>
                                <div className="text-left flex md:flex-row flex-col gap-5">
                                    <fieldset className="fieldset md:w-1/2 w-full items-center">
                                        <legend className="fieldset-legend text-lg">Category Name</legend>
                                        <input type="text" name='category' className="input input-info input-lg w-full" placeholder="Enter Equipment Category" />
                                    </fieldset>
                                    <fieldset className=" md:w-1/2 w-full items-center">
                                        <legend className="fieldset-legend text-lg">Details</legend>
                                        <input type="text" name='details' className="input input-info input-lg w-full" placeholder="Enter coffee Details" />
                                    </fieldset>
                                </div>
                                <div className="text-left">
                                    <fieldset className="fieldset w-full items-center">
                                        <legend className="fieldset-legend text-lg">Equipment Photo</legend>
                                        <input type="text" name='photo' className="input input-info input-lg w-full" placeholder="Enter Equipment photo url" />
                                    </fieldset>
                                </div>
                                <div className="mt-6">
                                    <button className="btn w-full bg-[#5c93f8] text-black text-xl rancho-font hover:text-white hover:border-white  hover:bg-gradient-to-r from-green-400  to-blue-500">Add Equipment</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEquipment;
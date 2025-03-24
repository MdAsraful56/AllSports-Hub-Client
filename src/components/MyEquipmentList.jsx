import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useLoaderData } from 'react-router';
import MyEquipmentCard from './MyEquipmentCard';

const MyEquipmentList = () => {

    const { user } = useContext(AuthContext);
    const allData = useLoaderData();

    const email = user?.email;
    console.log(email);

    
    // Filter the data based on the logged-in user's email
    const filteredData = allData.filter(data => data.email === email);

    return (
        <div className='lg:px-32 md:px-20 px-10 my-20 mb-96'>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                {
                    filteredData.map(data => <MyEquipmentCard data={data} key={data._id} /> )
                }
            </div>
        </div>
    );
};

export default MyEquipmentList;
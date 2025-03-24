import React from 'react';
import { useLoaderData } from 'react-router';
import EquipmentCard from './EquipmentCard';

const AllSportsEquipment = () => {


    const allData = useLoaderData();

    // const cricketData = allData.filter(data => data.category === 'Cricket');
    // const footballData = allData.filter(data => data.category === 'Football');



    return (
        <div className='lg:px-32 md:px-20 px-10 my-20 mb-96'>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                {
                    allData.map(data => <EquipmentCard data={data} key={data._id} />)
                }
            </div>
        </div>
    );
};

export default AllSportsEquipment;
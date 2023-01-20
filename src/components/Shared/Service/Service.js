import React, { useEffect, useState } from 'react';
import Home from '../../pages/Home/Home';
import Card from './Cards';

const Service = () => {

    const [foods, setFoods] = useState([]);


    useEffect(() => {
        fetch(' https://food-service-server-ten.vercel.app/foods')
            .then(res => res.json())
            .then(data => setFoods(data.data));
    }, [])

    console.log(foods);

    return (
        <div className='grid md:grid-cols-3 gap-2 mt-4  ms-3'>

            {
                foods.map(food => <Card
                    key={food._id}
                    food={food}
                ></Card>)
            }

        </div>
    );
};

export default Service;
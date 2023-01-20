import React from 'react';
import { Link } from 'react-router-dom';
import Service from '../../Shared/Service/Service';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <p className='text-center mt-5 text-2xl '><Link to='/service'>See All</Link></p>

        </div>
    );
};

export default Home;
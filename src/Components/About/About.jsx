import React from 'react';
import Tools from './Tools'
import Skills from './Skills';
import Aboutcard from './Aboutcard';
import Github from './Github';

const About = () => {
    return (
        <div className=' mt-28'>
            <h1 className='text-black mt-8'>this is the project page u can preview it her </h1>
           <Aboutcard />
             < Skills />
            <Tools />
            <Github />
        </div>
    );
}

export default About;

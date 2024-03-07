import React from 'react';
import Navigation from '../Components/Navigation';
import Languages from '../Components/Knowledges/languages';

const Knowledges = () => {
    return (
        <div className='knowledges'>
         <Navigation />
         <div className='knoledgesContent'>
         <Languages />
         </div>
        </div>
    );
};

export default Knowledges;
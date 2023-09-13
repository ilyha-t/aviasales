import React from 'react';

import cl from './AircraftFly.module.css';
import aircraft from './assets/aircraft.svg';

const AircraftFly = () => {
    return (
        <div className={cl.airplane}>
            <img src={aircraft} alt="Aircraft" />
        </div>
    );
};

export default AircraftFly;
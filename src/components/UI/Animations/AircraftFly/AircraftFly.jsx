import React from 'react';

import cl from './AircraftFly.module.css';
import aircraft from './assets/aircraft.svg';

const AircraftFly = () => {
    return (
        <div  className={cl.airplane__loading}>
            <h2  className={cl.airplane__loading__title}>Загружаем самолёты и билеты...</h2>
            <div className={cl.airplane__container}>
                <img src={aircraft} alt="Aircraft" className={cl.airplane} />
            </div>
        </div>
    );
};

export default AircraftFly;
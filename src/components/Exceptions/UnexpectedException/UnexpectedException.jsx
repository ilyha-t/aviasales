import React from 'react';

import cl from './UnexpectedException.module.css';

import programmer from './assets/programmer.svg';

function UnexpectedException() {
    return (
        <div className={cl.unexpected__exception}>
            <img src={programmer} alt="ProgrammerIcon" className={cl.unexpected__exception__img}/>
            <h3 className={cl.unexpected__exception__title}>Произошли технические трудности, но я уже все починил. <br/> Пожалуйста, перезагрузи страницу.</h3>
        </div>
    );
};

export default UnexpectedException;
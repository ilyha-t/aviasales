import React from 'react';

import cl from './NotFoundException.module.css';

import ticketIcon from './assets/ticketIcon.svg';

const NotFoundException = () => {
    return (
        <div className={cl.exception__container}>
            <img src={ticketIcon} alt="TicketIcon" className={cl.exception__image}/>
            <h4 className={cl.exception__message}>Ничего не найдено. <br/> Попробуйте изменить фильтры.</h4>
        </div>
    );
};

export default NotFoundException;
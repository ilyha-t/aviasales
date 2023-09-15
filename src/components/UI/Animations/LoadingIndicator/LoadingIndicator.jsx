import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

import cl from './LoadingIndicator.module.css';

function LoadingIndicator() {
    const state = useSelector(state => state);

    useEffect(() => {
        console.log(state)
    }, [state])

    return (
        <div className={cl.loading__information__container}>
            <span className={cl.loading__text}>
                Продолжаем искать лучшие предложения для вашего путешествия...
            </span>
        </div>
    );
};

export default LoadingIndicator;
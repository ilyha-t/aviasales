import React, {useEffect} from 'react';

import cl from './LoadingIndicator.module.css';

function LoadingIndicator() {
    return (
        <div className={cl.loading__information__container}>
            <span className={cl.loading__text}>
                Продолжаем искать лучшие предложения для вашего путешествия...
            </span>
        </div>
    );
};

export default LoadingIndicator;
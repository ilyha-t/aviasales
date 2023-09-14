import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

function LoadingIndicator() {
    const state = useSelector(state => state);

    useEffect(() => {
        console.log(state)
    }, [state])

    return (
        <div>
            {state.loading && 'Загружаем лучшие предложения для вашего путешествия...'}
        </div>
    );
};

export default LoadingIndicator;
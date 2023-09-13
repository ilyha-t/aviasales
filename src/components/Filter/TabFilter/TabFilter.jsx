import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import cl from './TabFilter.module.css';
import {sortByeDuration, sortByeOptimal, sortByePrice} from "../../../store/Actions/TicketAction/TicketsAction";

function TabFilter() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        switch(state.tab) {
            case 2:
                dispatch(sortByeDuration(state.tickets.tickets));
                break;
            case 3:
                dispatch(sortByeOptimal(state.tickets.tickets));
                break;
            default:
                dispatch(sortByePrice(state.tickets.tickets));
                break;
        }
    }, [state.tickets.tickets])

    return (
        <ul className={cl.tabs__filter}>
            <li className={state.tab === 1 ?  `${cl.tab} ${cl.tab__selected}` : `${cl.tab}`}
                onClick={() => dispatch(sortByePrice(state.tickets.tickets))}>
                Самый дешёвый
            </li>
            <li className={state.tab === 2 ?  `${cl.tab} ${cl.tab__selected}` : `${cl.tab}`}
                onClick={() => dispatch(sortByeDuration(state.tickets.tickets))}>
                Самый быстрый
            </li>
            <li className={state.tab === 3 ?  `${cl.tab} ${cl.tab__selected}` : `${cl.tab}`}
                onClick={() => dispatch(sortByeOptimal(state.tickets.tickets))}>
                Оптимальный
            </li>
        </ul>
    );
}

export default TabFilter;
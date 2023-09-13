import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {applyFilterTickets, filterTickets} from "../../../../store/Actions/TicketAction/TicketsAction";

import cl from './FilterItem.module.css';

function FilterItem({ filter }) {
    const { filters, tickets } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(filters);
    }, [filters])

    return (
        <div className={cl.filter__item}>
            <input type="checkbox"
                   id={filter.id}
                   className={cl.filter__checkbox}
                   onChange={() => {
                       dispatch(filterTickets(filters, filter));
                       // dispatch(applyFilterTickets(tickets, filters));
                   }}
                   checked={filters.checked.indexOf(filter.id) !== -1 ? true : false}
            />
            <label htmlFor={filter.id} className={cl.filter__name}>{filter.name}</label>
        </div>
    );
}

export default FilterItem;
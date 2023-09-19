import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {filterTickets} from "../../../../store/Actions/TicketAction/TicketsAction";

import cl from './FilterItem.module.css';

function FilterItem({ filter }) {
    const { filters } = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div className={cl.filter__item}>
            <input type="checkbox"
                   id={filter.id}
                   className={cl.filter__checkbox}
                   onChange={() => {
                       dispatch(filterTickets(filters, filter));
                   }}
                   checked={filters.checked.indexOf(filter.id) !== -1 ? true : false}
            />
            <label htmlFor={filter.id} className={cl.filter__name}>{filter.name}</label>
        </div>
    );
}

export default FilterItem;
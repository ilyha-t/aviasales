import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {filterTickets} from "../../../../store/Actions/TicketAction/TicketsAction";

import cl from './FilterItem.module.css';

function FilterItem({ filter }) {
    const { filters } = useSelector(state => state);
    const dispatch = useDispatch();

    function isChecked(id) {
        const match = filters.indexOf(id);

        if(match !== -1) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className={cl.filter__item}>
            <input type="checkbox"
                   id={filter.id}
                   className={cl.filter__checkbox}
                   onChange={(e) => dispatch(filterTickets(filters, e.target.id))}
                   checked={isChecked(filter.id)}
            />
            <label htmlFor={filter.id} className={cl.filter__name}>{filter.name}</label>
        </div>
    );
}

export default FilterItem;
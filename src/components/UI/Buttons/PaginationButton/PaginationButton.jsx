import React from "react";
import {useDispatch} from "react-redux";

import {showMoreTickets} from "../../../../store/Actions/TicketAction/TicketsAction";

import cl from './PaginationButton.module.css';

function PaginationButton() {
    const dispatch = useDispatch();

    return (
        <button className={cl.pagination_button} onClick={() => dispatch(showMoreTickets())}>Показать ещё 5 билетов!</button>
    );
}

export default PaginationButton;
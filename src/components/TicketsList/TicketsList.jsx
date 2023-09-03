import React, {useEffect} from "react";
import {useSelector} from "react-redux";

import TabFilter from "../Filter/TabFilter/TabFilter";
import TicketCardItem from "../TicketCardItem/TicketCardItem";
import PaginationButton from "../UI/Buttons/PaginationButton/PaginationButton";

import cl from './TicketsList.module.css';

function TicketsList() {
    const { tickets, error, showTicket } = useSelector(state => state);

    return (
        <div className={cl.tickets}>
            <TabFilter />
            {(tickets.tickets.length > 0 && !error) &&
                tickets.tickets.slice(0,showTicket).map(ticket =>
                    <TicketCardItem key={`${ticket.carrier}${ticket.segments[0].date}`} ticket={ticket}/>)
            }
            {error && <div>Произошла ошибка!</div>}
            <PaginationButton />
        </div>
    );
}

export default TicketsList;
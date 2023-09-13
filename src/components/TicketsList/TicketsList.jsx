import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import TabFilter from "../Filter/TabFilter/TabFilter";
import TicketCardItem from "../TicketCardItem/TicketCardItem";
import PaginationButton from "../UI/Buttons/PaginationButton/PaginationButton";

import cl from './TicketsList.module.css';

function TicketsList() {
    const [] = useState();
    const { tickets, showTicket, filters } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(tickets.tickets);
    }, [tickets])

    function isFitTicket(filters, ticket) {
        let fit = true;
        for(const segment of ticket.segments) {
            if(filters.total_stop.indexOf(segment.stops.length) === -1) {
                fit = false;
            }
        }

        return fit;
    }

    return (
        <div className={cl.tickets}>
            <TabFilter />
            {tickets.tickets.length > 0 &&
                tickets.tickets.filter(ticket => isFitTicket(filters, ticket)).slice(0,showTicket).map(ticket =>
                    <TicketCardItem key={`${ticket.carrier}${ticket.segments[0].date}}`} ticket={ticket}/>)
            }
            <PaginationButton />
        </div>
    );
}

export default TicketsList;
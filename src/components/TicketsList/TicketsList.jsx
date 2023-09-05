import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import TabFilter from "../Filter/TabFilter/TabFilter";
import TicketCardItem from "../TicketCardItem/TicketCardItem";
import PaginationButton from "../UI/Buttons/PaginationButton/PaginationButton";

import cl from './TicketsList.module.css';
import {sortByePrice} from "../../store/Actions/TicketAction/TicketsAction";

function TicketsList() {
    const { tickets, showTicket, filters } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(sortByePrice(tickets.tickets))
    }, [tickets.tickets])

    return (
        <div className={cl.tickets}>
            <TabFilter />
            {tickets.tickets.length > 0 &&
                tickets.tickets.slice(0,showTicket).map(ticket =>
                    <TicketCardItem key={`${ticket.carrier}${ticket.segments[0].date}`} ticket={ticket}/>)
            }
            <PaginationButton />
        </div>
    );
}

export default TicketsList;
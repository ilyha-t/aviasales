import React, {Fragment, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import TabFilter from "../Filter/TabFilter/TabFilter";
import TicketCardItem from "../TicketCardItem/TicketCardItem";
import PaginationButton from "../UI/Buttons/PaginationButton/PaginationButton";

import cl from './TicketsList.module.css';
import NotFoundException from "../Exceptions/NotFoundException/NotFoundException";
import AircraftFly from "../UI/Animations/AircraftFly/AircraftFly";

function TicketsList() {
    const { tickets, showTicket, filters } = useSelector(state => state);

    function isFitTicket(filters, ticket) {
        let fit = true;
        for(const segment of ticket.segments) {
            if(filters.total_stop.indexOf(segment.stops.length) === -1) {
                fit = false;
            }
        }

        return fit;
    }

    function showFilteredTickets() {
        const ticketsLength = tickets.tickets.length;
        if (ticketsLength === 0) {
            return <AircraftFly />;
        }

        const applyFilters = tickets.tickets.filter(ticket => isFitTicket(filters, ticket));
        if (applyFilters.length === 0) {
            return <NotFoundException />;
        } else {
            return (
                <Fragment>
                    {applyFilters.slice(0,showTicket).map(ticket =>
                        <TicketCardItem key={`${ticket.carrier}${ticket.segments[0].date}}`} ticket={ticket}/>)
                    }
                    <PaginationButton />
                </Fragment>
            )
        }
    };

    return (
        <div className={cl.tickets}>
            <TabFilter />
            {showFilteredTickets()}
        </div>
    );
}

export default TicketsList;
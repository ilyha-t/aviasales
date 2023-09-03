import React, {useEffect} from "react";
import SegmentRoute from "../SegmentRoute/SegmentRoute";
import NetworkService from "../../services/Network/NetworkService";

import cl from './TicketCardItem.module.css';

function TicketCardItem({ ticket }) {
    return (
        <div className={cl.ticket}>
            <div className={cl.ticket__title}>
                <h3 className={cl.ticket__title__price}>{ticket.price} P</h3>
                <img src={`https://pics.avs.io/99/36/${ticket.carrier}.png`}
                     alt="Logotype Airlines"
                     className={cl.ticket__logotype}
                />
            </div>
            <SegmentRoute className={cl.ticket__segments} segments={ticket.segments}/>
        </div>
    );
}

export default TicketCardItem;
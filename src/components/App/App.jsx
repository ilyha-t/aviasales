import React, {useEffect} from "react";

import TransfersFilter from "../Filter/TransfersFilter/TransfersFilter";
import TicketsList from "../TicketsList/TicketsList";
import {useDispatch, useSelector} from "react-redux";

import cl from './App.module.css';
import Logotype from "../Logotype/Logotype";
import {fetchDataFromServer} from "../../store/Actions/NetworkAction/NetworkAction";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDataFromServer());
    }, []);

    return (
        <div className={cl.app}>
            <Logotype />
            <section className={cl.app__search}>
                <TransfersFilter />
                <TicketsList />
            </section>
        </div>
    );
}

export default App;
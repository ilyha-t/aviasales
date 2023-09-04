import React, {useEffect, Fragment} from "react";

import TransfersFilter from "../Filter/TransfersFilter/TransfersFilter";
import TicketsList from "../TicketsList/TicketsList";
import {useDispatch, useSelector} from "react-redux";

import cl from './App.module.css';
import Logotype from "../Logotype/Logotype";
import {fetchDataFromServer} from "../../store/Actions/NetworkAction/NetworkAction";

function App() {
    const { error } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDataFromServer());
    }, []);

    return (
        <div className={cl.app}>
            {!error ?
                <Fragment>
                    <Logotype />
                    <section className={cl.app__search}>
                        <TransfersFilter />
                        <TicketsList />
                    </section>
                </Fragment> :
                <div>Технические неполадки! Попробуйте перезагрузить страницу.</div>
            }
        </div>
    );
}

export default App;
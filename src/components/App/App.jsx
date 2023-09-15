import React, {useEffect, Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";

import TransfersFilter from "../Filter/TransfersFilter/TransfersFilter";
import TicketsList from "../TicketsList/TicketsList";
import { fetchDataFromServer, getTicketsSuccess} from "../../store/Actions/NetworkAction/NetworkAction";

import cl from './App.module.css';
import Logotype from "../Logotype/Logotype";
import LoadingIndicator from "../UI/Animations/LoadingIndicator/LoadingIndicator";
import UnexpectedException from "../Exceptions/UnexpectedException/UnexpectedException";

function App() {
    const { error, tickets, loading } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDataFromServer());
    }, []);

    return (
        <div className={cl.app}>
            {!error ?
                <Fragment>
                    <Logotype />
                    <section className={cl.app__search__section}>
                        {loading && <LoadingIndicator /> }
                        <div className={cl.app__search}>
                            <TransfersFilter />
                            <TicketsList />
                        </div>
                    </section>
                </Fragment> :
                <UnexpectedException />
            }
        </div>
    );
}

export default App;
import React from "react";

import {filters} from "../../../config/Filters/Filters";
import FilterItem from "./FilterItem/FilterItem";

import cl from './TransfersFilter.module.css';

function TransfersFilter() {
    return (
        <section className={cl.tranfers__filter}>
            <span className={cl.tranfers__filter__title}>Количество пересадок</span>
            <form className={cl.tranfers__filter__params}>
                {filters.map(filter => <FilterItem key={filter.id} filter={filter} />)}
            </form>
        </section>
    );
}

export default TransfersFilter;
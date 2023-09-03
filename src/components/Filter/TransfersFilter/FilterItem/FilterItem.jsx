import React from "react";

import cl from './FilterItem.module.css';

function FilterItem({ filter }) {
    return (
        <div className={cl.filter__item}>
            <input type="checkbox" id={filter.id} className={cl.filter__checkbox}/>
            <label htmlFor={filter.id} className={cl.filter__name}>{filter.name}</label>
        </div>
    );
}

export default FilterItem;
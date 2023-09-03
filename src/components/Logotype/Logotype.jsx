import React from "react";

import cl from './Logotype.module.css';
import logo from './assets/LogoType.png';

function Logotype() {
    return (
        <img src={logo} alt="Site Logotype" className={cl.logotype}/>
    );
}

export default Logotype;
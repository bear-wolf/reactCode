import React, {useState} from 'react';
import {Header} from "./header/header";
import {NavigationMenu} from "./navigation-menu/navigation-menu";

export const LayOut = (props) => {
    // Объявление переменной состояния, которую мы назовём "count"
    // const [count, setCount] = useState(0);

    return (
        <div className="layout-wrapper menu-layout-static">
            <Header props={props}></Header>
            <NavigationMenu props={props}></NavigationMenu>

            <div className="layout-main">
                {props.children}
            </div>
        </div>
    );
}
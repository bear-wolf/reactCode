import React, {useEffect, useState} from 'react';
import {ProfileInline} from "../profile-inline/profile-inline";
import "./navigation-menu.scss"
import {NavigationMenuService} from "../../../services/navigation-menu.service";

let loaded = false;

export const NavigationMenu = (props) => {
    // Объявление переменной состояния, которую мы назовём "count"
    const [navigationMenu, setNavigationMenu] = useState([]);

    const getMenu = event => {
        NavigationMenuService.getMainList()
            .then(res => {
                setNavigationMenu(res.data.data)

                console.log(res['data']['data'])
                //setState(state);
            })
            .catch(err => console.log(err));

        return true;
    }

    useEffect((event) => {
        loaded = !loaded ? getMenu() : loaded;
    }, []);

    return (
        <div className="layout-menu-container">
            <div className="menu-scroll-content">
                <ProfileInline></ProfileInline>

                <ul className="layout-menu layout-main-menu clearfix">
                    {navigationMenu.map((item, index) => {
                        return <li
                            key={item.id || index}
                            className="nav-item">
                            <a className=" nav-item-link">
                                <i className=" fa fa-fw "></i>
                                <span>{item.title}</span>
                                <i className=" fa fa-fw fa-angle-down menuitem-toggle-icon "></i>
                            </a>
                            <div className=" submenu-arrow "></div>
                        </li>
                    })}
                </ul>
            </div>
        </div>

    )
}

import React from 'react';

class NavigationMenu extends React.Component {
    render() {
        return <nav className='d-flex'>
            <ul className='navigation-menu'>
                <li><a href={'link1'}>link 1</a></li>
                <li><a href={'link2'}>link 2</a></li>
            </ul>
        </nav>;
    }
}

export default NavigationMenu;

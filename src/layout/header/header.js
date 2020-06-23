import React from 'react';
import "./header.scss";
import NavigationMenu from "../navigationMenu/navigationMenu";
import {themes} from "../../theme";
import Select from 'react-select';
import { withTranslation } from 'react-i18next';

export const ThemeContext = React.createContext(
    themes.dark // значение по умолчанию
);

const options = [
    { value: 'theme-light', label: 'light' },
    { value: 'theme-dark', label: 'dark' },
];

class Header extends React.Component {
    state = {
        selectedOption: null,
    };
    handleChange = selectedOption => {
        this.setState(
            { selectedOption },
            (item) => {
                let label = this.state.selectedOption.value;
                document.body.classList.remove(options[0].value);
                document.body.classList.remove(options[1].value);

                document.body.classList.add(label);
                console.log(`Option selected:`, this.state.selectedOption)
            }
        );
    };
    render() {
        const { selectedOption } = this.state;
        const { i18n } = this.props;

        return <header className=''>
            <span className='title'>title</span>

            <NavigationMenu/>
            <Select className='theme-select'
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
            />

            <div className='language-block'>
                <button className='btn' onClick={() => i18n.changeLanguage('ua')}>ua</button>
                <button className='btn' onClick={() => i18n.changeLanguage('en')}>en</button>
            </div>
        </header>;
    }

    contextType = ThemeContext
}
export default withTranslation('common')(Header);

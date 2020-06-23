import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Header from "./layout/header/header";
import Footer from "./layout/footer/footer";
import './index.scss';
import './layout/layout.scss'

import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import common_ua from "./translations/ua/common.json";
import common_en from "./translations/en/common.json";

i18next.init({
    interpolation: {escapeValue: false},  // React already does escaping
    lng: 'en',                              // language to use
    resources: {
        en: {
            common: common_en               // 'common' is our custom namespace
        },
        ua: {
            common: common_ua
        },
    },
});


ReactDOM.render(
    <I18nextProvider i18n={i18next}>
        <div className='layout'>
            <Header></Header>
            <Footer></Footer>
        </div>
    </I18nextProvider>,
    document.getElementById('root')
);


// ReactDOM.render(
//     <React.StrictMode>
//         {/*<Layout/>*/}
//         <div className='layout'>
//             <Header></Header>
//             <Footer></Footer>
//         </div>
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

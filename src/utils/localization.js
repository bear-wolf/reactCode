import i18next from 'i18next';
import EN from './../i18n/en.json';
import UA from './../i18n/ua.json';

// const detectLanguage =

export class Localization {
    static initI18 = () => {
        i18next.init({
            lng: 'ua',
            debug: true,
            resources: {
                en: {
                    translation: EN
                },
                ua: {
                    translation: UA
                }
            }
        });
    }
}
import React, {useEffect, useState} from 'react';
import './anonymous.scss'
import {SystemService} from "../../services/system.service";
import {StorageService} from "../../services/storage.service";

let loaded = false;

export const Anonymous = (props) => {
    const [background, setBackground] = useState('');

    useEffect((event) => {
        loaded = !loaded ? getParams() : loaded;
    }, []);

    let style = {
        //background: background
    }

    const getParams = () => {
        SystemService.getPreliminaryParams()
            .then(res => {
                let auth = JSON.parse(StorageService.getAuth() || '{}');

                auth.background = res["data"]['data']['design']['background_anonimus_img'];
                auth.logoType = res["data"]['data']['design']['logo_img'];
                auth.enable = res["data"]['data']['enable'];
                auth.language = res["data"]['data']['language'];
                auth.title = res["data"]['data']['title'];

                StorageService.setAuth(JSON.stringify(auth));

                setBackground(auth.background);
            })
            .catch(err => console.log(err));

        return true;
    }


    return (<div className={'page full-page anonymous-page justify-content-center align-items-center'}
                 style={style}>
        {props.children}
    </div>)
}

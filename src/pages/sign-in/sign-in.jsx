import React, {useEffect, useState} from 'react';
import '../../components/anonymous/anonymous.scss'
import './sign-in.scss'
import {FormControlInput} from "../../components/form-controls/form-control-input/form-control-input";
import {Anonymous} from "../../components/anonymous/anonymous";
import {AuthService} from "../../services/auth.service";
import i18next from "i18next";
import {Validation} from "../../handlers/validators/validation";
import {StorageService} from "../../services/storage.service";

export const SignIn = (props) => {

    const [state, setState] = useState({
        username: "",
        password: "",
        touchedBtn: false,
        validate: {
            username: [
                {required: Validation.required},
                {email: Validation.email}
            ],
            password: [
                {required: Validation.required}
            ]
        }
    });

    // async componentDidMount() {
    //     // Load async data.
    //     // console.log('componentDidMount sign in')
    //     // let data = await API.get('/');
    //     // console.log(data);
    //     //
    //     // data = data.data.results[0]; //// Парсим резульатты.
    //     // //const name = `${userData.name.first} ${userData.name.last}`;
    // }

    useEffect((event) => {
        console.log('useEffect', event);
    }, [ state.username]);

    const onChangeEmail = (json) => {
        state.username = json.email;
        setState(state);
    }

    const onChangePassword = (json) => {
        state.password = json.password;
        setState(state);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        setState({
            ...state,
            touchedBtn: true
        })

        if (isValid()) {
            AuthService.signIn({
                username: state.username,
                password: state.password
            })
                .then(res => {
                    let auth = JSON.parse(StorageService.getAuth() || '{}');

                    auth.token = res["data"]['data']['token'];

                    StorageService.setAuth(JSON.stringify(auth));
                    StorageService.setToken(auth.token);
                    window.location.href ='/';

                    console.log(res);
                })
                .catch(err => console.log(err));
        }
    }

    const isValid = () => {
        let value = true;

        return true;

        let state = this.state;
        let fields = this.state.validate;

        for (let key of Object.keys(fields)) {
            let name = Object.keys(fields[key][0])[0];
            let error = fields[key][name](name, state.value);

            if (error) {
                value = false;
                state.errors[name] = error[name];
                setState(state);
            }
        }

        return value;
    }

    let formClass = '';

    if (state.touchedBtn) {
        formClass += ' submitted'
    }

    return (<Anonymous>
        <div className='sign-in-content'>
            <div className="container-fluid">
                <div className="container">
                    <h1 className="title">{i18next.t('authHeader')}</h1>

                    <form noValidate onSubmit={onSubmit}
                          className={formClass}>
                        <div className="row">
                            <div className="col-12">
                                <FormControlInput label={i18next.t('formTitleEmail')}
                                                  value={state.username}
                                                  name='email'
                                    //validateStatus={state.touchedBtn}
                                    //validateRules={state.validate.username}
                                                  onChange={onChangeEmail}></FormControlInput>
                                {/*{state.errors.username && <div className={'error'}>{state.errors.username}</div>}*/}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <FormControlInput label='formTitlePassword'
                                                  type='password'
                                                  name='password'
                                    //validateStatus={state.touchedBtn}
                                                  onChange={onChangePassword}
                                                  value={state.password}></FormControlInput>
                            </div>
                        </div>

                        {/*<div className="row">*/}
                        {/*    <div className="col-12">*/}
                        {/*        <FormControlSelect*/}
                        {/*            label='list'*/}
                        {/*            onChange={this.onChangeSelect}*/}
                        {/*            value={state.list}></FormControlSelect>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex justify-content-center">
                                    <button className={'btn-entry btn btn-primary btn-sm'}
                                            type="submit">{i18next.t('buttonEntry')}</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="sub-link">
                        <a href={'/sign-up'}>{i18next.t('authSignUpLink')}</a>
                        <a href={'/remind-password'}>{i18next.t('authRemindPasswordLink')}</a>
                    </div>
                </div>
            </div>
        </div>
    </Anonymous>)
}

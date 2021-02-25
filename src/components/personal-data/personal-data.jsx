import React from 'react';
import './personal-data.scss'
import {FormControlInput} from "../form-controls/form-control-input/form-control-input";

export class PersonalData extends React.Component {
    state = {
        fio: '',
        email: '',
        password: '',
    };

    constructor(props) {
        super(props);

        this.onChangeFio = this.onChangeFio.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    }

    onChangeFio(json) {
        let state = this.state;

        state['fio']= json.fio;
        this.setState(state);
    }
    onChangeEmail(json) {
        let state = this.state;

        state['email']= json.email;
        this.setState(state);
    }
    onChangePassword(json) {
        let state = this.state;

        state['password']= json.password;
        this.setState(state);
    }

    render() {
        return  <form noValidate onSubmit={this.onSubmit}>
            <div className="row">
                <div className="col-12">
                    <FormControlInput label='Фамилия, имя, отчество'
                                      text={'text'}
                                      value={this.state.fio}
                                      name='fio'
                                      onChange={this.onChangeFio}></FormControlInput>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <FormControlInput label='Email'
                                      name='email'
                                      onChange={this.onChangeEmail}
                                      value={this.state.password}></FormControlInput>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <FormControlInput label='Password'
                                      type='password'
                                      name='password'
                                      onChange={this.onChangePassword}
                                      value={this.state.password}></FormControlInput>
                </div>
            </div>

            {/*<div className="row">*/}
            {/*    <div className="col-12">*/}
            {/*        <FormControlSelect*/}
            {/*            label='list'*/}
            {/*            onChange={this.onChangeSelect}*/}
            {/*            value={this.state.list}></FormControlSelect>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="row">
                <div className="col-12">
                    <div className="d-flex justify-content-center">
                        <button className={'btn-entry btn btn-primary btn-sm'}
                                type="submit">Сохранить
                        </button>
                    </div>
                </div>
            </div>
        </form>
    }
}
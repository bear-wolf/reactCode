import React from 'react';
import '../../components/anonymous/anonymous.scss'
import './remind-password.scss'
import {FormControlInput} from "../../components/form-controls/form-control-input/form-control-input";
import {Anonymous} from "../../components/anonymous/anonymous";
import i18next from "i18next";

export class RemindPassword extends React.Component {
    state = {
        email: ""
    };

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeField = this.onChangeField.bind(this);
    }

    onChangeField(json) {
        let state = this.state;

        state['email'] = json.email; debugger

        this.setState(state);
    }

    onSubmit(e) {
        e.preventDefault();
        var val = e.target.value;
        console.log('state', this.state);

        this.setState({
            email: val,
            password: e.password
        });
    }

    render() {
        return <Anonymous>
            <div className="remind-content">
                <div className="container-fluid">
                    <div className="container">
                        <h1 className="title">{i18next.t('remindPasswordTitle')}</h1>

                        <form novalidate>

                            <div class="row">
                                <div class="col-12">
                                    <FormControlInput label='Email'
                                                      name='email'
                                                      placeholder="Введите ваш email"
                                                      onChange={this.onChangeField}
                                                      value={this.state.password}></FormControlInput>

                                    {this.state.errors.username && <div className={'error'}>{this.state.errors.username}</div>}
                                </div>
                            </div>
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-primary btn-sm btn-entry" type="submit">
                                    {i18next.t('buttonSend')}
                                </button>
                            </div>

                            <div class="sub-link">
                                <a href={'/sign-in'}>
                                    {i18next.t('linkAuth')}</a>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </Anonymous>
    }
}
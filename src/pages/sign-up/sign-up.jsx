import React from 'react';
import '../../components/anonymous/anonymous.scss'
import './sign-up.scss'
import {Anonymous} from "../../components/anonymous/anonymous";
import {PersonalData} from "../../components/personal-data/personal-data";
import i18next from "i18next";

export class SignUp extends React.Component {
    render() {
        return <Anonymous>
                <div className="sign-up-content">
                    <div className="container-fluid">
                        <div className="container">

                            <div className="content-body">
                                <div>
                                    <div className="row step1-content">
                                        <div className="col-lg-12">
                                            <h1 className="title"
                                                translate>{i18next.t('authSignUpHeader')}</h1>
                                            <PersonalData props={this.props}></PersonalData>
                                        </div>
                                    </div>

                                    <div className="row step2-content">
                                        <div className="col-lg-12">
                                            <h1 className="title"
                                                translate>{i18next.t('authSignUpHeader')}</h1>
                                            app-private-data
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Anonymous>
    }
}

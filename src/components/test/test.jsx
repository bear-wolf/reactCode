import React from 'react';
import {Anonymous} from "../anonymous/anonymous";
import {SignIn} from "../../pages/sign-in/sign-in";

export class Test extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className={'page full-page justify-content-center align-items-center'}>
                    <Anonymous>
                        <SignIn></SignIn>
                    </Anonymous>
                </div>
    }
}

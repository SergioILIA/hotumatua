import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
export default class Home extends Component {
render() 
    { 
        return (
            <React.Fragment>
                <LoginForm />
            </React.Fragment>
        ); 
    }
}

import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import Helmet from 'react-helmet';
import './styles/Home.css';
export default class Home extends Component {
render() 
    { 
        return (
            <React.Fragment>
                <Helmet>
                    <style>{'body { background:antiquewhite;}'}</style>
                </Helmet>
                <LoginForm />
            </React.Fragment>
        ); 
    }
}

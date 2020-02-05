import React from 'react';
import logoHotumatua from '../images/logo-hotu-matua.png';

class LoginForm extends React.Component{

    render(){
        return(
            <React.Fragment>
                <div className="row d-flex justify-content-center">
                    <div className="panel col-md-6">
                        <div className="row d-flex justify-content-center logo-login ">
                            <img
                            src={logoHotumatua}
                            alt="Logo Hotumatua"
                            />
                        </div>
                        <div>
                            <h1 className="text-center">Bienvenido</h1>
                            <h3 className="text-center">Ingrese suu usuario y su clave</h3>
                            <form>
                                <div className="form-group">
                                    <label className="text-justify font-weight-bold">Usuario </label>
                                    <input className="form-control" type="text" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>            

            </React.Fragment>
        );
    }
}
export default LoginForm;
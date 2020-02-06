import React from 'react';
import logoHotumatua from '../images/logo-hotu-matua.png';

class LoginForm extends React.Component{

    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="panel col-md-6">
                            <div className="row d-flex justify-content-center logo-login ">
                                <img
                                className="img-fluid"
                                src={logoHotumatua}
                                alt="Logo Hotumatua"
                                />
                            </div>
                            <h1 className="text-center">Bienvenido</h1>
                            <h3 className="text-center">Ingrese su usuario y su clave</h3>
                            <form>
                                <div className="form-group">
                                    <label for="usuario" className="text-justify font-weight-bold">Usuario </label>
                                    <input id="usuario" className="form-control" type="text" />
                                </div>
                                <div className="form-group">
                                    <label for="pass" className="text-justify font-weight-bold">Clave </label>
                                    <input id="pass" className="form-control" type="password" />
                                </div>
                                <button  type="submit" className="btn btn-primary col">ENTRAR</button>
                            </form>  
                        </div>
                    </div>  
                    <div className="row">    
                        <a href="" className="col text-center">
                            <span className="glyphicon glyphicon-wrench" aria-hidden="true"></span>
                            Olvido su clave
                        </a>           
                    </div>            
                </div>
            </React.Fragment>
        );
    }
}
export default LoginForm;
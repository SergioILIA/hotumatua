import React from 'react';

class LoginForm extends React.Component{

    render(){
        return(
            <div>
                <h1>Bienvenido</h1>
                <h3>Ingrese su usuario y su clave</h3>
                <form>
                    <div className="form-group">
                        <label>Usuario: </label>
                        <input className="form-control" type="text" />
                    </div>
                </form>
            </div>
        );
    }
}
export default LoginForm;
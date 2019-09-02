import React from 'react'
import './loginComponent.css'

export class LoginComponent extends React.Component<any, any>{
    state: any = {
        email: "",
        password: "",
        error: this.props.error,
        message: this.props.message
    };
    handle = (event: any) => this.setState({ [event.target.name]: event.target.value } as any);
    login = () => {
        const { doLogin } = this.props;
        doLogin({ email: this.state.email, password: this.state.password}) ;
    }
    xE = this.state.email = this.props.emailToLogin
    xP = this.state.password = this.props.passwordToLogin
    render(){  
        return(
            <div>
                <p>Log-in please</p>
                <div className="error">
                    {this.props.error}
                </div>
                <div className="message">
                    {this.props.message}
                </div>
                <div className="log-form">
                    <input
                        required
                        type="text"
                        name="email"
                        value={this.props.emailToLogin.length !== 0 ?  this.xE : this.state.email}
                        onChange={this.handle}
                        placeholder="email">
                    </input>
                    <input
                        required
                        type="password"
                        placeholder="password"
                        name="password"
                        value={this.props.passwordToLogin.length !== 0 ? this.xP : this.state.password}
                        onChange={this.handle}>
                    </input>
                    <button onClick={() => this.login()}>Login</button>
                </div>
            </div>
        )
    }
    
}
export default LoginComponent;
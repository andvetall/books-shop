import React from 'react'
import '../register/registerComponent.css'
import { Redirect } from 'react-router';

export class RegisterComponent extends React.Component<any, any>{
    state: any = {
        login: "",
        email: "",
        password: "",
        passwordComfirm: "",
        error: "",
        image: ""
    };
    handle = (event: any) => this.setState({ [event.target.name]: event.target.value } as any);
    register = () => {
        const { doRegister } = this.props;
        this.state.login.length < 3 ? this.setState({error: 'Name should be at least 3 letters'}) :
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.state.email) ?  this.setState({error:'Innvalid Email'}) :
                (this.state.password !== this.state.passwordComfirm) ?  this.setState({error:'Passwords should match to each other'}) :
                    (this.state.password.length < 8) ?  this.setState({error:'Password should be at least 8 symbols'}) :
                    doRegister({ login: this.state.login, email: this.state.email, password: this.state.password }) && this.setState({error: ''}) ;
    }
    
    render() {
        
        return (
           
            <div>
                 {/* {console.log(this.add())} */}
                {this.props.isRegistred ? 
                    <Redirect to='/login'/> :
                        null}
                <p>Register please</p>
                <div className="error">
                    {this.state.error}<br/>
                    {this.props.error}
                </div>
                <div className="reg-form">
                    
                    <input
                        required
                        type="text"
                        name="login"
                        value={this.state.login}
                        onChange={this.handle}
                        placeholder="login">
                    </input>
                    <input
                        required
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handle}
                        placeholder="email">
                    </input>
                    <input
                        required
                        type="password"
                        placeholder="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handle}>
                    </input>
                    <input
                        required
                        type="password"
                        placeholder="password comfirm"
                        name="passwordComfirm"
                        value={this.state.passwordComfirm}
                        onChange={this.handle}>
                    </input>
                    <button onClick={() => this.register()}>Login</button>
                

                </div>
            </div>
        )
    }
}
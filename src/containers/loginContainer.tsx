import { connect } from 'react-redux'
import  LoginComponent  from '../components/login/loginComponent'
import { RootState } from "../redux/rootReducer";
import  {doLogin} from '../redux/login/actions'

const mapStateToProps = (state: RootState) => ({
    email: state.login.email,
    password: state.login.password,
    error: state.login.error,
    message: state.login.message,
    emailToLogin: state.register.email,
    passwordToLogin: state.register.password,
    isAdmin: state.login.isAdmin,
    id: state.login.id,
    login: state.login.login
});

export default connect(mapStateToProps,
     {doLogin}
     )(LoginComponent)
  
import { connect } from 'react-redux'
import { RegisterComponent } from '../components/register/registerComponent'
import { RootState } from "../redux/rootReducer";
import  {doRegister} from '../redux/registration/actions'

const mapStateToProps = (state: RootState) => ({
    login: state.register.login,
    email: state.register.email,
    password: state.register.password,
    error: state.register.error,
    isRegistred: state.register.isRegistred
});

export default connect(mapStateToProps,
     {doRegister}
     )(RegisterComponent)
  
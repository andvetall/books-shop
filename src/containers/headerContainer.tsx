import { connect } from 'react-redux'
import  HeaderComponent  from '../components/header/headerComponent'
import { RootState } from "../redux/rootReducer";


const mapStateToProps = (state: RootState) => ({
    email: state.login.email,
    isLoggedIn: state.login.isLoggedIn,
    bookId: state.addToCart.id,
    isAdmin: state.login.isAdmin,
    userImage: state.login.userImage,
    details: state.login.details
});

export default connect(mapStateToProps)(HeaderComponent)
  
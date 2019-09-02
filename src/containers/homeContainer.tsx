import { connect } from 'react-redux'
import  HomeComponent  from '../components/home/homeComponent'
import { RootState } from "../redux/rootReducer";
import { addToCart } from "../redux/addToCart/actions"

const mapStateToProps = (state: RootState) => ({
    email: state.login.email,
    isLoggedIn: state.login.isLoggedIn,
    id: state.addToCart.id
});

export default connect(mapStateToProps,{addToCart})(HomeComponent)
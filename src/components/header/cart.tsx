import React from 'react'
import '../header/headerComponent.css'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { addToCart, moveFromCart } from '../../redux/addToCart/actions';





const SimpleMenuCart: React.FC<any> = (props) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        setAnchorEl(event.currentTarget);
    }
    function handleClose() {
        setAnchorEl(null);
    }
    let totalPrice = () => props.bookId.selectedBooks.reduce(
            (a: any, b: any) => {
                return a + b.price * b.quantity
            },0
        )
        const addItem = (id:any) => {
            const { addToCart } = props;
            addToCart( id ) ;
        }
        const moveItem = (id:any) => {
            const { moveFromCart } = props;
            moveFromCart( id ) ;
        }
        
    return (
        <div className={props.class}>
            <div aria-controls="simple-menu" aria-haspopup="true" onClick={(e:any) => handleClick(e)}>
                {props.user}
            </div>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {props.bookId.selectedBooks.map((book: any) => {
                    return <MenuItem 
                    className='cart-item'
                    key={`${Math.random()}-key`}
                    >{
                        <div 
                        id={book.id}
                        className="cart-item-wrapper">
                            <button 
                                onClick = {(e: any) => moveItem(book.id)}
                                id = {`${book.id}iD`}
                                className="dec">-
                            </button>
                            <p>{` ${book.title}: ${book.price}usd (${book.quantity})`}</p>
                            <button 
                                onClick = {(e: any) => addItem(book.id)}
                                id = {`${book.id}id`}
                                className="inc">+
                            </button>
                        </div>
                    }
                    </MenuItem>
                })}
                {<p className="total">Total price: {totalPrice()} $usd</p>}
                
            </Menu>
        </div>
    );
}
const mapStateToProps = (state: RootState) => ({
    bookId: state.addToCart
});
export default connect(mapStateToProps,{addToCart, moveFromCart})(SimpleMenuCart)
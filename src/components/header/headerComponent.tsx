import React from 'react'
import '../header/headerComponent.css'
import { BrowserRouter as Router, Redirect, Link, LinkProps } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { withStyles, Theme } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SimpleMenuCart from './cart'
import { RootState } from '../../redux/rootReducer';
import { connect } from 'react-redux'
import { Avatar } from "@material-ui/core"

const SimpleMenu: React.FC<any> = (props:any) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }
    const AdapterLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
        <Link innerRef={ref as any} {...props} />
      ));
    
    return (
        <div className={props.class}>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                {props.user}
                <Avatar
                    src={props.imgQQQ} alt="user-image"
                />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem 
                component={AdapterLink} to='/userInfo'
                 
                onClick={handleClose}>{props.my}</MenuItem>
                <MenuItem onClick={handleClose}>{props.logout}</MenuItem>
            </Menu>
        </div>
    );
}

const StyledBadge = withStyles((theme: Theme) => ({
    badge: {
      top: '50%',
      right: -3,
      border: `2px solid ${
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
      }`,
    },
  }))(Badge);

  const ms = (state: RootState) => ({
    addToCart: state.addToCart
}); 

const CustomizedBadges:React.FC<any> = (props:any) => {
        const count = props.addToCart.selectedBooks.reduce((a:any, b:any) => {
            return a + b.quantity
        },0)
        return(
            <IconButton
            aria-label="cart">
              <StyledBadge badgeContent={count} color="primary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          );
    }
    const cz = connect(ms)(CustomizedBadges)
    


export default class HeaderComponent extends React.Component<any, any>{
    state: any = {
        email: ""
    };
    toggleClass = ((e: any) => {
        let x: any = document.querySelectorAll('.link')
        for (let item of x) {
            item.className = "link"
        }
        e.target.className = "link active"
    })
    
    render() {
       return (
            <div>
                <div>
                    {
                        this.props.isAdmin ? 
                            (<div className="header-wrapper">
                                <div onClick={(e) => this.toggleClass(e)} className='link'><Link to="home-admin">Home Admin</Link></div>
                                <SimpleMenu 
                                    imgQQQ={this.props.userImage}
                                    class="welcome"
                                    my = 'My Account'
                                    user={<div className="logout">{`Welcome ${this.props.email}`}</div>}
                                    logout={<div className="logout" onClick={() => {localStorage.clear(); window.location.reload(); window.location.href = "/login"}}>Logout</div>}
                                ></SimpleMenu>
                                <Redirect to="/home-admin" />
                            </div>) :
                        this.props.isLoggedIn ?
                            (<div className="header-wrapper">
                                <div onClick={(e) => this.toggleClass(e)} className='link'><Link to="home">Home</Link></div>
                                <SimpleMenuCart 
                                    class="cart"
                                    user = { React.createElement(cz, {})}
                                ></SimpleMenuCart>
                                <SimpleMenu 
                                    imgQQQ={this.props.userImage}
                                    class="welcome"
                                    my = 'My Account'
                                    user={`Welcome ${this.props.email}`}
                                    logout={<div className="logout" onClick={() => {localStorage.clear(); window.location.reload(); window.location.href = "/login"}}>Logout</div>}
                                ></SimpleMenu>
                                <Redirect to="/home" />
                            </div>) :
                            (<div className="header-wrapper">
                                <li onClick={(e) => this.toggleClass(e)} className='link' key='register-link'><Link to="register">Register</Link></li>
                                <li onClick={(e) => this.toggleClass(e)} className='link' key='login-link'><Link to="login">Log In</Link></li>
                            </div>)
                    }
                </div>
            </div>
        )
    }
}


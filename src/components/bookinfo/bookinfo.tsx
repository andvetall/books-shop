import React from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }),
);


const BookInfo: React.FC  = (props:any) => {
    const classes = useStyles();
   const data = props.location.state.bookInfo
   const addItem = (id:any) => {
    const { addToCart } = props
    addToCart( id ) ;
}
   
        return(
                <div style={{
                    width: "50%",
                    margin: "-20px auto",
                    backgroundColor: "#f0f8ff",
                    height: "100vh",
                    padding: "100px 50px",
                    boxShadow: "0px 0px 28px 0px"
                }}>
                    <img 
                        style={{width: "400px", margin: "0 0 50px 0"}}
                        src={data.image} 
                        alt={data.title}
                    />
                    <h1><span>{data.title}</span></h1>
                    <h2>{data.price}</h2>
                    <p
                        style={{
                            width: "70%",
                            margin: "-40px auto",
                            backgroundColor: "#f0f8ff",
                            padding: "100px 50px",
                            lineHeight: "43px"
                        }}
                    >{data.description}</p>
                    <span>
                        <Button  variant="outlined" color="primary" className={classes.button}>
                           <Link
                            style = {{
                                textDecoration: "none",
                                color: "inherit"
                            }}
                           to="/home"> Go Back</Link>
                        </Button>
                    </span>
                    
                    <span>
                        <Button
                        onClick = {() => addItem(data.bookId)}
                        variant="outlined" color="primary" className={classes.button}>
                            Add To Cart
                        </Button>
                    </span>
                    
                                    
                </div>
            
        )
  
    
 }
export default BookInfo
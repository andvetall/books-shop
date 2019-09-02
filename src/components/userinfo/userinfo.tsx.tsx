import React from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';



const TextFields:React.FC<any> = (props) => {
  return (
         <TextField
        id="standard-dense"
        label={props.title}
        defaultValue={props.value}
        className={props.class}
        margin="dense"
      />
  );
}

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStylesModal = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

const SimpleModal1:React.FC <any> = (props) =>  {
  const classes = useStylesModal();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button 
       style={{
        padding: "0",
        margin: "0",
        backgroundColor: "#d1dfec",
        border: "none",
        width: "100px",
        height: "30px",
        cursor: "pointer"
      }}
     
      type="button" 
      onClick = {handleOpen}
      >
        Change Details
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Details will be updated automaticaly during typing in textareas</h2>
          {props.userDetails.map((prop:any) => {
              return <TextFields class={`text-area-details${Object.keys(prop)}`} key={`${Object.values(prop)}+${Object.keys(prop)}`} value={Object.values(prop)} title={Object.keys(prop)}/> 
          })}
          <button
          style={{
            position: "absolute",
            right: "20px",
            bottom: "23px",
            backgroundColor: "#d1dfec",
            border: "none",
            width: "100px",
            height: "30px",
            cursor: "pointer"
          }}
          onClick = {props.doAction}
          >Submit</button>
        </div>
      </Modal>
    </div>
  );
}

const useStylesUserINfo = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }),
);

const UserInfo: React.FC <any> = (props) => {
    
    const classes = useStylesUserINfo();
   const data = props
  
   let createTitles = () => {
       let titles:any =[];
       for(let title in data.userinfo.details){
           if(title !== "address"){titles.push({[title]: data.userinfo.details[title]})}
       }
       for(let addr in data.userinfo.details.address){
        titles.push({[addr]: data.userinfo.details.address[addr]})
    }
       return titles
   }

const update = (id:number) => {
    let email1 = document.getElementsByClassName("text-area-detailsemail")[0].children[1].children[0] as HTMLInputElement
    let city1 = document.getElementsByClassName("text-area-detailscity")[0].children[1].children[0] as HTMLInputElement
    let mobile1 = document.getElementsByClassName("text-area-detailsmobile")[0].children[1].children[0] as HTMLInputElement
    let website1 = document.getElementsByClassName("text-area-detailswebsite")[0].children[1].children[0] as HTMLInputElement
    let street1 = document.getElementsByClassName("text-area-detailsstreet")[0].children[1].children[0] as HTMLInputElement
    let house1 = document.getElementsByClassName("text-area-detailshouse")[0].children[1].children[0] as HTMLInputElement
    let appartment1 = document.getElementsByClassName("text-area-detailsappartment")[0].children[1].children[0] as HTMLInputElement
    let country1 = document.getElementsByClassName("text-area-detailscountry")[0].children[1].children[0] as HTMLInputElement

          let body = {
            img: data.userinfo.userImage,  
            login: data.userinfo.login,
            email: email1.value,
            password: data.userinfo.password,
            isAdmin: data.userinfo.isAdmin,
            details: {
                email: email1.value,
                address: {
                    country: country1.value,
                    city: city1.value,
                    street: street1.value,
                    house: house1.value,
                    appartment: appartment1.value
                },
                mobile: mobile1.value,
                website: website1.value
            }
          }
        const { updateUser } = props;
        updateUser(id, body)
        };
   

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
                        src={data.userinfo.userImage} 
                        alt="userImage"
                    />
                    <h1><span>{data.userinfo.details.email}</span></h1>
                    <h2>{data.userinfo.details.mobile}</h2>
                    <p
                        style={{
                            width: "70%",
                            margin: "-40px auto",
                            backgroundColor: "#f0f8ff",
                            padding: "100px 50px",
                            lineHeight: "43px"
                        }}
                    ><a href={data.userinfo.details.website}>{data.userinfo.details.website}</a></p>
                    <span>
                        <Button  variant="outlined" color="primary" className={classes.button}>
                           <Link
                            style = {{
                                textDecoration: "none",
                                color: "inherit"
                            }}
                           to={data.userinfo.isAdmin ? "/home-admin" : "/home"}> Go Back</Link>
                        </Button>
                    </span>
                    <span>
                            <SimpleModal1
                            doAction = {(e:any) => update(data.userinfo.id)}
                            userDetails={createTitles()}
                            />
                    </span>             
                </div>
        )
}
 export default UserInfo


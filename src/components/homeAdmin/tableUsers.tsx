import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from "react-redux"
import { showUsers, moveUser } from "../../redux/showUsers/actions"
import { RootState } from '../../redux/rootReducer';
import Delete from "@material-ui/icons/Delete"


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  }),
);

 
const SimpleTableUsers:React.FC = (props:any) =>  {
  const classes = useStyles();
  let users:any = props.users
  let moveU = (id:number) => {
        const { moveUser } = props;
        moveUser(id)
}
  
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Remove</TableCell>
            <TableCell>User Avatar</TableCell>
            <TableCell >User Email</TableCell>
            <TableCell align="right">User Login</TableCell>
            <TableCell align="right">Admin</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user:any) => (
            <TableRow key={`${user.login}${user.id}`}>
              <TableCell component="th" scope="row">
                {!user.isAdmin ? 
                <Delete
                  style={{cursor: "pointer"}}
                  onClick={(e:any) => moveU(user.id)}
                /> : null}
                
              </TableCell>
              <TableCell>
                <img style={{maxWidth:"35px"}} src={user.img} alt={`${user.login}image`}/>
              </TableCell>
              <TableCell >{user.email}</TableCell>
              <TableCell >{user.login}</TableCell>
              <TableCell align="right">{user.isAdmin ? "yes" : "no"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
const mapStateToProps = (state: RootState) => ({
  users: state.showUsers.Users
});

export default connect(mapStateToProps,{showUsers, moveUser})(SimpleTableUsers)
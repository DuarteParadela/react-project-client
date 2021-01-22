import React from "react";
import Button from "../Button";
import "../../styles/cardInfos.css";
import withUser from '../Auth/withUser'
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { FormHelperText, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 20,
    width: 700,
    boxShadow: '0 1px 5px rgba(0, 0, 0, 0.2)',
  },
  field: {
    marginBottom: 10
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  deleteBtn: {
    marginLeft: 10
  }
});



const CardInfos = ({
  firstName,
  lastName,
  _id,
  image,
  handleEdit,
  handleDelete,
  context
}) => {
  
  console.log(context);
  const classes = useStyles();

  if(!context.user) return <div>Loading...</div>;

  return (
    
    <div className="cardInfos">
      <Card className={classes.root} variant="outlined">
        <div className="form-info">
        <CardContent>
        <TextField className={classes.field}
          id="outlined-helperText"
          label="First name"
          type="text"
          InputProps={{
            readOnly: true,
          }}
          value={context.user.firstName}
          variant="outlined"
          name="firstName"
          fullWidth
        />
        <TextField className={classes.field}
          id="outlined-helperText"
          label="Last name"
          type="text"
          InputProps={{
            readOnly: true,
          }}
          value={context.user.lastName}
          variant="outlined"
          name="lastName"
          fullWidth
        />
        <TextField className={classes.field}
          id="outlined-helperText"
          label="Email"
          type="text"
          InputProps={{
            readOnly: true,
          }}
          value={context.user.email}
          variant="outlined"
          name="email"
          fullWidth
        />
        <TextField className={classes.field}
          id="outlined-helperText"
          label="Phone number"
          type="number"
          InputProps={{
            readOnly: true,
          }}
          value={context.user.phoneNumber}
          variant="outlined"
          name="phoneNumber"
          fullWidth
        />
        </CardContent>
        </div>
        </Card>
        {/* <input type="email" value={context.user.email} onChange={() => {}}/>
        <input type="text" value={context.user.firstName} onChange={() => {}}/>
        <input  type="text" value={context.user.lastName} onChange={() => {}}/>
        <input  type="number" value={context.user.phoneNumber} onChange={() => {}}/> */}
        <div className="buttons">
          {/* <Button handleClick={(event) => handleEdit(_id)} primary>
            Edit
          </Button> */}
        </div>
      </div>

  );
};

export default withUser(CardInfos) ;

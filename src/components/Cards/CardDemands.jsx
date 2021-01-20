import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import ErrorIcon from '@material-ui/icons/Error';
import BlockIcon from '@material-ui/icons/Block';
import ReactDOM from 'react-dom'
import "../../styles/cardInfos.css";



const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 20,
    boxShadow: '0 1px 5px rgba(0, 0, 0, 0.2)'
  },
  pending: {
    color: 'orange',
    borderColor: 'orange'
  },
  validated: {
    color: 'green',
    borderColor: 'green'
  },
  rejected: {
    color: 'red',
    borderColor: 'red'
  },
  closed: {
    color: 'grey',
    borderColor: 'grey'
  },
  title: {
    fontSize: 14,

  },
  pos: {
    marginBottom: 12,
  },
});

const CardDemands = ({
  
  id_user: {
      firstName,
      lastName,
      phoneNumber,
      age,
      email
  },
  id_home,
  numOfChildren,
  numOfAnimals,
  tempAddress,
  tempCity,
  tempZipCode,
  additionalInformation,
  status,
  _id,
  image,
  context,
  handleChangeStatus
  
}) => {
  const classes = useStyles();
  const getIcon = (status) => {
    switch (status) {
      case 'pending':
        return <ErrorIcon className={classes[status]} />
      case 'closed':
        return <CancelIcon className={classes[status]}/>
      case 'rejected':
        return <BlockIcon className={classes[status]} />
      default:
        return <CheckCircleIcon className={classes[status]} />
    }
  }
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
      <Chip
        icon={getIcon(status.toLowerCase())}
        label={status}
        variant="outlined"
        className={classes[status.toLowerCase()]}
      />
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          {status}
        </Typography> */}
        <Typography variant="h5" component="h2">
          {firstName} {lastName}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          
        </Typography>
        <Typography variant="body2" component="p">
        Phone number: {phoneNumber}
        <br />
        Email: {email}
        <br />
        {age} years old
        <br />
        {numOfChildren} children
        <br />
        {numOfAnimals} animals
        <br />
        Currently at {tempAddress}, {tempZipCode}, {tempCity}
        <br />
        Additional information : {additionalInformation}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><a href="/safehomes">Assign a home</a></Button>
        {status !== 'Closed' ? <Button  onClick={() => handleChangeStatus(_id, 'Closed', id_home)}>Close</Button> : null}
        {status !== 'Rejected' ?  <Button variant="contained" color="secondary" onClick={() => handleChangeStatus(_id, 'Rejected', id_home)}>Reject</Button> : null}
        {status !== 'Pending' ? <Button variant="outlined" color="primary" onClick={() => handleChangeStatus(_id, 'Pending', id_home)}>Re-open</Button> : null}
      </CardActions>
    </Card>

    // <div className="cardDemand">
    //     <div className={`status card-${status.toLowerCase() || ""}`}><p>{status}</p></div>
    //     <ul>
    //       <li>Name: {firstName}</li>
    //       <li>Last Name: {lastName}</li>
    //       <li>Phone number: {phoneNumber}</li>
    //       <li>Email: {email}</li>
    //       <li>Age: {age}</li>
    //       <li>Number of children: {numOfChildren}</li>
    //       <li>Number of animals: {numOfAnimals}</li>
    //       <li>Currently at : {tempAddress}, {tempZipCode}, {tempCity}</li>
    //       <li>Additional information: {additionalInformation}</li>
    //     </ul>
            

    //     <div className="buttons">
    //     <Button variant="outlined" color="primary">
    //         <a href="/safehomes">Select a safe home</a>
    //       </Button>
        
        // {status !== 'Closed' ? <Button  onClick={() => handleChangeStatus(_id, 'Closed', id_home)}>Close</Button> : null}
        // {status !== 'Rejected' ?  <Button variant="contained" color="secondary" onClick={() => handleChangeStatus(_id, 'Rejected', id_home)}>Reject</Button> : null}
        // {status !== 'Pending' ? <Button variant="outlined" color="primary" onClick={() => handleChangeStatus(_id, 'Pending', id_home)}>Re-open</Button> : null}
        
    //     </div>
    //   </div>
  );
};

export default CardDemands;

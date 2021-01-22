import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import ErrorIcon from '@material-ui/icons/Error';
import BlockIcon from '@material-ui/icons/Block';
import StatusChip from "../../components/StatusChip"
import "../../styles/cardDemands.css"
import "../../styles/cardInfos.css";

const dayjs = require("dayjs");
require("dayjs/locale/en");
var advancedFormat = require("dayjs/plugin/advancedFormat");
var LocalizedFormat = require("dayjs/plugin/localizedFormat");
var utc = require("dayjs/plugin/utc");
var timezone = require("dayjs/plugin/timezone");
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advancedFormat);
dayjs.extend(LocalizedFormat);
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

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

  handleChangeStatus
  
}) => {
  const classes = useStyles();
  const {address, zipCode, city, id_user} = id_home || {}
  const {firstName:homeFirstName, lastName:homeLastName, phoneNumber:homePhoneNumber, email:homeEmail} = id_user || {}
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
      <div className={"card-container"}>
        <div className={"left-column"}>
      <StatusChip status={status}/>
       
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
        {dayjs(`${age}`).fromNow(true)} old
        <br />
        {numOfChildren} children
        <br />
        {numOfAnimals} animals
        <br />
        Currently at {tempAddress}, {tempZipCode}, {tempCity}
        <br />
        Additional information : {additionalInformation}
        </Typography>
        </div>
        <div>
        <Typography variant="h5" component="h2">
          Assigned Safe Home:  
        </Typography>  
        <Typography variant="body2" component="p">
        Address: {address}
        <br />
        ZipCode: {zipCode}
        <br />
        City: {city}
        <br />
        Owner: {homeFirstName} {homeLastName}
        <br />
        Phone number: {homePhoneNumber}
        <br />
        Email: {homeEmail}
        </Typography>
        </div>
      </div>
        
      </CardContent>
      <CardActions>
        <Button size="small"><a href="/safehomes">Assign a home</a></Button>
        {status !== 'Closed' ? <Button  onClick={() => handleChangeStatus(_id, 'Closed', id_home)}>Close</Button> : null}
        {status !== 'Rejected' ?  <Button variant="contained" color="secondary" onClick={() => handleChangeStatus(_id, 'Rejected', id_home)}>Reject</Button> : null}
        {status !== 'Pending' ? <Button variant="outlined" color="primary" onClick={() => handleChangeStatus(_id, 'Pending', id_home)}>Re-open</Button> : null}
      </CardActions>
    </Card>

  );
};

export default CardDemands;

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
      {/* <CardActions>
        <Button size="small"><a href="/safehomes">Assign a home</a></Button>
        {status !== 'Closed' ? <Button  onClick={() => handleChangeStatus(_id, 'Closed', id_home)}>Close</Button> : null}
        {status !== 'Rejected' ?  <Button variant="contained" color="secondary" onClick={() => handleChangeStatus(_id, 'Rejected', id_home)}>Reject</Button> : null}
        {status !== 'Pending' ? <Button variant="outlined" color="primary" onClick={() => handleChangeStatus(_id, 'Pending', id_home)}>Re-open</Button> : null}
      </CardActions> */}
    </Card>

  );
};

export default CardDemands;


// import React, { Component } from "react";
// import "../../styles/cardInfos.css";
// import apiHandler from "../../api/apiHandler"
// import TextField from '@material-ui/core/TextField';
// import {  withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import StatusChip from '../../components/StatusChip'
// import '../../styles/cardMyDemand.css'
// import Typography from '@material-ui/core/Typography';

// const styles = () => ({
//   root: {
//     minWidth: 275,
//     marginBottom: 20,
//     boxShadow: '0 1px 5px rgba(0, 0, 0, 0.2)'
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
//   deleteBtn: {
//     marginLeft: 10
//   }
// });

//  class CardMyDemands extends Component {
//   state = {
//     status: this.props.status,
//     _id: this.props._id,
//     numOfChildren: this.props.numOfChildren,
//     numOfAnimals: this.props.numOfAnimals,
//     tempAddress: this.props.tempAddress,
//     tempZipCode: this.props.tempZipCode,
//     tempCity: this.props.tempCity,
//     additionalInformation: this.props.additionalInformation,
//     searchNodes: "",
//     id_home: this.props.id_home
//   }

//   handleChange = (event) => {
//     const value = event.target.value;
//     const key = event.target.name;
//     this.setState({ [key]: value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();

//     apiHandler
//       .updateDemand(this.state._id, {...this.state} )
//       .then((data) => {

//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   render() {
//     const {numOfChildren, numOfAnimals, tempAddress, tempCity, tempZipCode, additionalInformation, status, _id} = this.state
//     const {classes} = this.props
//     log
//     return (
//       <div className="one-card">
//       <Card className={classes.root} variant="outlined">
//         <CardContent>
//       <div  className= "cardDemand">
//         <p>Your request cannot be modified. If you wish to update it, please delete it and send a new request <a href="/request">here</a> </p> 
        
//           <div className="status">
//             <StatusChip status={status}/>
//           </div>
//         <form className= "form-request">
//           <div className="input-form">
//         <TextField
//           id="outlined-number"
//           label="Number of children"
//           type="number"
//           InputProps={{
//             readOnly: true,
//           }}
//           value={numOfChildren}
//           variant="outlined"
//           onChange={this.handleChange}
//           name="numOfChildren"
//           fullWidth
//         />
//         </div>
//         <br/>
//         <div className="input-form">
//          <TextField
//           id="outlined-number"
//           label="Number of animals"
//           type="number"
//           InputProps={{
//             readOnly: true,
//           }}
//           value={numOfAnimals}
//           variant="outlined"
//           onChange={this.handleChange}
//           name="numOfAnimals"
//           fullWidth
//         />
//         </div>
//         <br/>
//         <div className="input-form">
//         <TextField
//           id="outlined-helperText"
//           label="Address"
//           value={tempAddress}
//           variant="outlined"
//           onChange={this.handleChange}
//           name="tempAddress"
//           multiline
//           fullWidth
//           InputProps={{
//             readOnly: true,
//           }}
//         />
//         </div>
//         <br/>
//         <div className="input-form">
//         <TextField
//           id="outlined-helperText"
//           label="Zipcode"
//           value={tempZipCode}
//           variant="outlined"
//           name="tempZipCode"
//           multiline
//           fullWidth
//           InputProps={{
//             readOnly: true,
//           }}
//         />
//         </div>
//         <br/>
//         <div className="input-form">
//         <TextField
//           id="outlined-helperText"
//           label="City"
//           value={tempCity}
//           variant="outlined"
//           name="tempCity"
//           multiline
//           fullWidth
//           InputProps={{
//             readOnly: true,
//           }}
//         />
//         </div>
//         <br/>
//         <div className="input-form">
//          <TextField
//           id="outlined-helperText"
//           label="Information"
//           value={additionalInformation}
//           multiline
//           fullWidth
//           variant="outlined"
//           name="additionalInformation"
//           InputProps={{
//             readOnly: true,
//           }}
//         />
//         </div>
//         </form>
//         </div>
//         </CardContent>
//         <TextField
//           id="outlined-helperText"
//           label="City"
//           value={tempCity}
//           variant="outlined"
//           name="tempCity"
//           multiline
//           fullWidth
//           InputProps={{
//             readOnly: true,
//           }}
//         />
//         <CardContent>

//         </CardContent>
//         {/* <Typography variant="h5" component="h2">
//           Assigned Safe Home:  
//         </Typography>  
//         <Typography variant="body2" component="p">
//         Address: {id_home.address}
//         <br />
//         ZipCode: {zipCode}
//         <br />
//         City: {city}
//         </Typography> */}
//         <CardActions>
//             <Button className={classes.deleteBtn} variant="contained" color="secondary" onClick={() => this.props.handleDelete(_id)}>Delete request</Button>
//             </CardActions>
        
//         {/* disabled={this.dataChanged()} */}
//       </Card>
//       </div>
//     )
//   }
// }

// export default withStyles(styles)(CardMyDemands) 



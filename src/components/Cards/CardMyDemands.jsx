import React, { Component } from "react";
import "../../styles/cardInfos.css";
import apiHandler from "../../api/apiHandler"
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import StatusChip from '../../components/StatusChip'
import '../../styles/cardMyDemand.css'

const styles = () => ({
  root: {
    minWidth: 275,
    marginBottom: 20,
    boxShadow: '0 1px 5px rgba(0, 0, 0, 0.2)'
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


 class CardMyDemands extends Component {

  state = {
    status: this.props.status,
    _id: this.props._id,
    numOfChildren: this.props.numOfChildren,
    numOfAnimals: this.props.numOfAnimals,
    tempAddress: this.props.tempAddress,
    tempZipCode: this.props.tempZipCode,
    tempCity: this.props.tempCity,
    additionalInformation: this.props.additionalInformation,
    searchNodes: ""
  }

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;
    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .updateDemand(this.state._id, {...this.state} )
      .then((data) => {

      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const {numOfChildren, numOfAnimals, tempAddress, tempCity, tempZipCode, additionalInformation, status, _id} = this.state
    const {classes} = this.props
    return (
      <div className="one-card">
      <Card className={classes.root} variant="outlined">
        <CardContent>
      <div  className= "cardDemand">
        <p>Your request cannot be modified. If you wish to update it, please delete it and send a new request <a href="/request">here</a> </p> 
        
          <div className="status">
            <StatusChip status={status}/>
          </div>
        <form className= "form-request">
          <div className="input-form">
        <TextField
          id="outlined-number"
          label="Number of children"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={numOfChildren}
          variant="outlined"
          onChange={this.handleChange}
          name="numOfChildren"
          fullWidth
        />
        </div>
        <br/>
        <div className="input-form">
         <TextField
          id="outlined-number"
          label="Number of animals"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={numOfAnimals}
          variant="outlined"
          onChange={this.handleChange}
          name="numOfAnimals"
          fullWidth
        />
        </div>
        <br/>
        <div className="input-form">
        <TextField
          id="outlined-helperText"
          label="Address"
          value={tempAddress}
          variant="outlined"
          onChange={this.handleChange}
          name="tempAddress"
          multiline
          fullWidth
        />
        </div>
        <br/>
        <div className="input-form">
        <TextField
          id="outlined-helperText"
          label="Zipcode"
          value={tempZipCode}
          variant="outlined"
          name="tempZipCode"
          multiline
          fullWidth
        />
        </div>
        <br/>
        <div className="input-form">
        <TextField
          id="outlined-helperText"
          label="City"
          value={tempCity}
          variant="outlined"
          name="tempCity"
          multiline
          fullWidth
        />
        </div>
        <br/>
        <div className="input-form">
         <TextField
          id="outlined-helperText"
          label="Information"
          value={additionalInformation}
          multiline
          fullWidth
          variant="outlined"
          name="additionalInformation"
        />
        </div>
        </form>
        </div>
        
        </CardContent>
        <CardActions>
            <Button className={classes.deleteBtn} variant="contained" color="secondary" onClick={() => this.props.handleDelete(_id)}>Delete request</Button>
            </CardActions>
        
        {/* disabled={this.dataChanged()} */}
      </Card>
      </div>
    )
  }
}

export default withStyles(styles)(CardMyDemands) 



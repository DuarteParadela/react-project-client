import React, { Component } from "react";
import Button from "../Button";
import "../../styles/cardInfos.css";
import apiHandler from "../../api/apiHandler"
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import StatusChip from '../../components/StatusChip'


export default class CardMyDemands extends Component {

  state = {
    status: this.props.status,
    _id: this.props._id,
    numOfChildren: this.props.numOfChildren,
    numOfAnimals: this.props.numOfAnimals,
    tempAddress: this.props.tempAddress,
    tempZipCode: this.props.tempZipCode,
    tempCity: this.props.tempCity,
    additionalInformation: this.props.additionalInformation,
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
        // this.props.history.push("/myrequests")// update the context
      })
      .catch((error) => {
        console.log(error);
      });
  };

  

  // dataChanged = () => {
  //   console.log(JSON.stringify(this.state), JSON.stringify(this.props));
  //   const {id_user, ...rest} = this.props
  //   return JSON.stringify(this.state) !== JSON.stringify(rest)
  // }

  render() {
    const {numOfChildren, numOfAnimals, tempAddress, tempCity, tempZipCode, additionalInformation, status, _id} = this.state
    return (
      <div  className= "cardDemand">
        
        <StatusChip status={status}/>
        <form>
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
        />
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
        />
        <TextField
          id="outlined-helperText"
          label="Address"
          value={tempAddress}
          variant="outlined"
          onChange={this.handleChange}
          name="tempAddress"
        />
        <TextField
          id="outlined-helperText"
          label="Zipcode"
          value={tempZipCode}
          variant="outlined"
          name="tempZipCode"
        />
        <TextField
          id="outlined-helperText"
          label="City"
          value={tempCity}
          variant="outlined"
          name="tempCity"
        />
         <TextField
          id="outlined-helperText"
          label="Information"
          value={additionalInformation}
          
          variant="outlined"
          name="additionalInformation"
        />
          
        </form>
        {/* disabled={this.dataChanged()} */}

            <Button  handleClick={this.handleSubmit}>Save</Button>
            <Button handleClick={() => this.props.handleDelete(_id)}>Delete</Button>
      </div>
    )
  }
}

 



import React, { Component } from "react";
import Button from "../Button";
import "../../styles/cardInfos.css";
import apiHandler from "../../api/apiHandler"

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
        
        <form>
          <input type="number" onChange={this.handleChange} value={numOfChildren}  name="numOfChildren"/>
          <input type="number" onChange={this.handleChange} value={numOfAnimals} name="numOfAnimals"/>
          <input type="text" onChange={this.handleChange} value={tempAddress} name="tempAddress"/>
          <input type="text" onChange={this.handleChange} value={tempCity} name="tempCity"/>
          <input type="text" onChange={this.handleChange} value={tempZipCode} name="tempZipCode"/>
          <input type="text" onChange={this.handleChange} value={additionalInformation} name="additionalInformation"/>
          <input type="text" onChange={this.handleChange} value={status} name="status"/>
        </form>
        {/* disabled={this.dataChanged()} */}

            <Button  handleClick={this.handleSubmit}>Save</Button>
            <Button handleClick={() => this.props.handleDelete(_id)}>Delete</Button>
      </div>
    )
  }
}

 



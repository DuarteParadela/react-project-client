import React, { Component } from "react";
import Button from "../Button";
import "../../styles/cardInfos.css";
import  "../../styles/cardHomes.css"
import apiHandler from "../../api/apiHandler"

export default class CardMyHome extends Component {

  state = {
    address: this.props.address,
    _id: this.props._id,
    zipCode: this.props.zipCode,
    city: this.props.city,
    acceptsChildren: this.props.acceptsChildren,
    acceptsAnimals: this.props.acceptsAnimals,
    size: this.props.size,
    numOfRooms: this.props.numOfRooms,
  }

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;
    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .updateHome(this.state._id, {...this.state} )
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
    const {address,
        zipCode,
        city,
        acceptsChildren,
        acceptsAnimals,
        size,
        numOfRooms,
        _id} = this.state
    return (
      <div  className= "cardDemand">
        
        <form>
          <input type="text" onChange={this.handleChange} value={address}  name="address"/>
          <input type="text" onChange={this.handleChange} value={zipCode} name="zipCode"/>
          <input type="text" onChange={this.handleChange} value={city} name="city"/>
          <input type="text" onChange={this.handleChange} value={acceptsChildren} name="acceptsChildren"/>
          <input type="text" onChange={this.handleChange} value={acceptsAnimals} name="acceptsAnimals"/>
          <input type="text" onChange={this.handleChange} value={size} name="size"/>
          <input type="text" onChange={this.handleChange} value={numOfRooms} name="numOfRooms"/>
        </form>
        {/* disabled={this.dataChanged()} */}

            <Button  handleClick={this.handleSubmit}>Save</Button>
            <Button handleClick={() => this.props.handleDelete(_id)}>Delete</Button>
      </div>
    )
  }
}

 



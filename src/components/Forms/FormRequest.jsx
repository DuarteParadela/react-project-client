import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import UserContext from "../Auth/UserContext";
import  withUser from "../Auth/withUser"
import apiHandler from "../../api/apiHandler";
import "../../styles/form.css";

class FormRequest extends Component {
  static contextType = UserContext;

  state = {
    message: "",
    numOfChildren: 0,
    numOfAnimals: 0,
    tempAddress: "",
    tempZipCode: "",
    tempCity: "",
    AdditionalInformation: "",
    id_user: ""
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;
    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .createDemand(this.state)
      .then((data) => {
        this.context.setUser(data); 
        this.props.history.push("/myrequests")// update the context
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {

    return (
      <section className="form-section">
        <header className="header">
          <h1>We are here for you</h1>
        </header>

        <form autoComplete="off" className="form" onSubmit={this.handleSubmit}>
          <p>We need some additional information first</p>

          
          <div className="form-group">
            
            <label className="label" htmlFor="children">
              Are you accompanied by children?
            </label>
            <input
              onChange={this.handleChange}
              value={this.state.numOfChildren}
              className="input"
              id="children"
              type="number"
              name="numOfChildren"
            />
          </div>
          <div className="form-group">
            
            <label className="label" htmlFor="animals">
              Are you accompanied by animals?
            </label>
            <input
              onChange={this.handleChange}
              value={this.state.numOfAnimals}
              className="input"
              id="animals"
              type="number"
              name="numOfAnimals"
            />
          </div>
          <div className="form-group">
            <p>Where are you currently ?</p>
            <label className="label" htmlFor="address">
              Address
            </label>
            <input
              onChange={this.handleChange}
              value={this.state.tempAddress}
              className="input"
              id="address"
              type="text"
              name="tempAddress"
            />
             <label className="label" htmlFor="zipcode">
              Zip Code
            </label>
            <input
              onChange={this.handleChange}
              value={this.state.tempZipCode}
              className="input"
              id="zipcode"
              type="text"
              name="tempZipCode"
            />
             <label className="label" htmlFor="city">
              City
            </label>
            <input
              onChange={this.handleChange}
              value={this.state.tempCity}
              className="input"
              id="city"
              type="text"
              name="tempCity"
            />
          </div>
          
          
          <div className="form-group">
            <label className="label" htmlFor="adiInformation">
            Any additionnal information ?
            </label>
            <input
              onChange={this.handleChange}
              value={this.state.additionalInformation}
              className="input"
              id="adiInformation"
              type="textarea"
              name="additionalInformation"
              placeholder="Allergies, special needs, etc"
            />
          </div>

          <button className="btn-submit">Send</button>
        </form>

      </section>
    );
  }
}

export default withRouter(FormRequest)

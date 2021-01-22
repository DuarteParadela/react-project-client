import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../Auth/UserContext";
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
      .then(() => {
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
          <h1>We are here to help</h1>
        </header>

        <form autoComplete="off" className="form" onSubmit={this.handleSubmit}>
          <p className="form-title">We just need some additional information before calling you</p>
          <div className="form-group">
            
            <label className="label" htmlFor="children">
              How many children are with you?
            </label>
            <input
              onChange={this.handleChange}
              value={this.state.numOfChildren}
              className="input"
              id="children"
              type="number"
              name="numOfChildren"
              required
            />
          </div>
          <div className="form-group">
            
            <label className="label" htmlFor="animals">
            How many pets are with you?
            </label>
            <input
              onChange={this.handleChange}
              value={this.state.numOfAnimals}
              className="input"
              id="animals"
              type="number"
              name="numOfAnimals"
              required
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
              required
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
              required
            />
          </div>
          
          
          <div className="form-group">
            <label className="label" htmlFor="adiInformation">
            <p>Any additionnal information ?</p>
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

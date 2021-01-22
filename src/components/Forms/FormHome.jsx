import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../Auth/UserContext";
import apiHandler from "../../api/apiHandler";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import "../../styles/form.css";


class FormRequest extends Component {
  static contextType = UserContext;

  state = {
    address: "",
    zipCode: "",
    city: "",
    acceptsChildren: false,
    acceptsAnimals: false,
    id_user: "",
    size: 0,
    numOfRooms: 0
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;
    this.setState({ [key]: value });
  };

  handleCheckbox = (event) => {
    const value = event.target.checked
    const key = event.target.name
    this.setState({[key]: value})
  }

  handleSubmit = (event) => {
    event.preventDefault();

  
    apiHandler
      .createHome(this.state)
      .then(() => {
        this.props.history.push("/myhome")// update the context
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {

    return (
      <section className="form-section">
        <header className="header">
          <h1>Become a Safe home ! </h1>
        </header>

        <form autoComplete="off" className="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <p>Where do you live</p>
            <label className="label" htmlFor="address">
              Address
            </label>
            <input
              onChange={this.handleChange}
              value={this.state.address}
              className="input"
              id="address"
              type="text"
              name="address"
              required
            />
            <label className="label" htmlFor="city">
              City
            </label>
            <input
              onChange={this.handleChange}
              value={this.state.city}
              className="input"
              id="city"
              type="text"
              name="city"
              required
            />
            <label className="label" htmlFor="zipCode">
              Zipcode
            </label>
            <input
              onChange={this.handleChange}
              value={this.state.zipCode}
              className="input"
              id="zipCode"
              type="text"
              name="zipCode"
              required
            />
          </div>
          <div className="form-group">
            <p>About your home</p>
            <label className="label" htmlFor="size">
                What is its size ?
            </label>
            <input
              onChange={this.handleChange}
              value={this.state.size}
              className="input"
              id="size"
              type="number"
              name="size"
              required
            />
             <label className="label" htmlFor="rooms">
              How many rooms does it have ?
            </label>
            <input
              onChange={this.handleChange}
              value={this.state.numOfRooms}
              className="input"
              id="rooms"
              type="number"
              name="numOfRooms"
              required
            />
          </div>

          <div className="form-group">
            <p>Children and Animals</p>
            <FormControlLabel
        control={
        <Checkbox
            checked={this.state.acceptsChildren}
            onChange={this.handleCheckbox}
            name="acceptsChildren"
            color="primary"
          />
        }
        label="I can welcome Children"
        />
        <br/>
        <FormControlLabel
        control={
          <Checkbox
          checked={this.state.acceptsAnimals}
          onChange={this.handleCheckbox}
          name="acceptsAnimals"
          color="primary"
        />
        }
        label="I can welcome Animals"
        />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="adiInformation">
            Any additionnal information ?
            </label>
            <input
              onChange={this.handleChange}
              value={this.state.AdditionalInformation}
              className="input"
              id="adiInformation"
              type="text"
              name="AdditionalInformation"
              placeholder="Special needs, regular visits, etc"
            />
          </div>
          <button className="btn-submit">Send</button>
        </form>

      </section>
    );
  }
}

export default withRouter(FormRequest)

import React, { Component } from "react";
import "../../styles/cardInfos.css";
import apiHandler from "../../api/apiHandler"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';



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
});


class CardMyHome extends Component {

  state = {
    address: this.props.address,
    _id: this.props._id,
    zipCode: this.props.zipCode,
    city: this.props.city,
    acceptsChildren: this.props.acceptsChildren,
    acceptsAnimals: this.props.acceptsAnimals,
    size: this.props.size,
    numOfRooms: this.props.numOfRooms,
    searchNodes: "",
    isAvailable: true,
  }

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;
    this.setState({ [key]: value });
  };

  handleSwitch = (event) => {
    const value = event.target.checked
    const key = event.target.name
    this.setState({[key]: value})
  }

  handleCheckbox = (event) => {
    const value = event.target.checked
    const key = event.target.name
    this.setState({[key]: value})
  }

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .updateHome(this.state._id, {...this.state} )
      .then((data) => {
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const {address,
        zipCode,
        city,
        acceptsChildren,
        acceptsAnimals,
        size,
        isAvailable,
        numOfRooms,
        _id} = this.state
    const {classes} = this.props
    return (
      <div  className= "one-home">
        <Card className={classes.root} variant="outlined">
        <CardContent>
        <form>
      
      <FormControlLabel
        control={
          <Switch
            checked={isAvailable}
            onChange={this.handleSwitch}
            name="isAvailable"
            color="primary"
          />
        }
        label="My home is available"
      />
      <div>
        <TextField
          id="outlined-number"
          label="Address"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          value={address}
          variant="outlined"
          onChange={this.handleChange}
          name="address"
          fullWidth
        />
      </div>
      <br/>
        <div>
          <TextField
          id="outlined-number"
          label="Zipcode"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          value={zipCode}
          variant="outlined"
          onChange={this.handleChange}
          name="zipCode"
          fullWidth
        />
        </div>
        <br/>
        
        <TextField
          id="outlined-number"
          label="City"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          value={city}
          variant="outlined"
          onChange={this.handleChange}
          name="city"
          fullWidth
        />
        <br/>
        <FormControlLabel
        control={
        <Checkbox
            checked={acceptsChildren}
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
          checked={acceptsAnimals}
          onChange={this.handleCheckbox}
          name="acceptsAnimals"
          color="primary"
        />
        }
        label="I can welcome Animals"
        />
        <br/>
        <br/>
      <TextField
          id="outlined-number"
          label="Size"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={size}
          variant="outlined"
          onChange={this.handleChange}
          name="size"
          fullWidth
        />
        <br/>
        <br/>
        <TextField
          id="outlined-number"
          label="Number of rooms"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={numOfRooms}
          variant="outlined"
          onChange={this.handleChange}
          name="numOfRooms"
          fullWidth
        />
        </form>
        </CardContent>
        <CardActions>
        <Button onClick={this.handleSubmit}>Save</Button>
        <Button variant="contained" color="secondary" onClick={() => this.props.handleDelete(_id)}>Delete</Button>
        </CardActions>
            </Card>
      </div>
    )
  }
}

export default withStyles(styles)(CardMyHome)



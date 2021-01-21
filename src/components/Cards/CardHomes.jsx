import React,  { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import "../../styles/cardInfos.css";
import  "../../styles/cardHomes.css";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';

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

const useStyles = makeStyles ({
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
  },
  formControl: {
    minWidth: 120,
  },
  
});

const CardHomes = ({
  id_user: {
      firstName,
      lastName,
      phoneNumber,
      age,
      email
  },
  address,
  city,
  zipCode,
  acceptsChildren,
  acceptsAnimals,
  size,
  numOfRooms,
  isAvailable,
  _id,
  image,
  handleChange,
  context,
  demands
  
}) => {
 
  const [isSelectShown, toggleIsSelectShown] = useState(false)
  const [selectValue, setSelectValue] = useState()
  const classes = useStyles();
  
 const hideSelect = () => {
   toggleIsSelectShown(false)
 }

 const handleChangeDemand = ({ target: { value }}) => {
   setSelectValue(value)
 }

 const assignRequest = () => {
  handleChange(selectValue, 'Validated', _id)

 }

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title, "owner-info"} color="textSecondary" gutterBottom>
          {firstName} {lastName.toUpperCase()}, {dayjs(`${age}`).fromNow(true)} old
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {city}, {address}, {zipCode}
        </Typography>
        <Typography variant="body2" component="p">
          {acceptsChildren ? "This person can welcome children" : "This person cannot welcome children"}
          <br/>
          {acceptsChildren ? "This person can welcome animals" : "This person cannot welcome animals"}
          <br />
          {`Her home has ${numOfRooms} rooms and is ${size}m² big`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary" onClick={() => toggleIsSelectShown(true) }>Assign request</Button>
        {isSelectShown && (
          <>
            <FormControl className={classes.formControl}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectValue}
              onChange={handleChangeDemand}
            >
              {demands.map((demand) => {
                  return <MenuItem key={demand._id} value={demand._id}>{demand.id_user.firstName} {demand.id_user.lastName}</MenuItem>
                })}
            </Select>
            <FormHelperText>Select Request</FormHelperText>
          </FormControl>
              <Button onClick={assignRequest}>Confirm</Button>
              <Button onClick={hideSelect}>Cancel</Button>
              </>
          )}
      </CardActions>
    </Card>
    
  );
};

export default CardHomes;

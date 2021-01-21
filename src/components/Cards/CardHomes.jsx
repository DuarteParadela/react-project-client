import React,  { useState } from "react";
import "../../styles/cardInfos.css";
import  "../../styles/cardHomes.css";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
  const classes = styles();
  
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
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {firstName} {lastName.toUpperCase()}, {age} years old
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
        <Button size="small" variant="contained" color="primary" onClick={assignRequest}>Assign request</Button>
      </CardActions>
    </Card>
    // <div  className={`cardHomes`}>
        
    //         <p>Name: {firstName}</p>
    //         <p>Last Name: {lastName}</p>
    //         <p>Phone number: {phoneNumber}</p>
    //         <p>Email: {email}</p>
    //         <p>Age: {age}</p>
    //         <p>Accepts children: {acceptsChildren ? "true" : "false"}</p>
    //         <p>Accepts animals: {acceptsAnimals ? "true" : "false"}</p>
    //         <p>Address : {address}</p>
    //         <p>City: {city}</p>
    //         <p>Zipcode: {zipCode}</p>
    //         <p>Size: {size}</p>
    //         <p>Number of rooms: {numOfRooms}</p>
    //         <p>Is available:{isAvailable ? "true" : "false"}</p>
      
    //     <div className="buttons">
    //     <Button handleClick={() => toggleIsSelectShown(true) } primary>
    //         Assign request
    //       </Button>
    //       {isSelectShown && (
    //         <>
    //           <select value={selectValue} onChange={handleChangeDemand} name="pets" id="pet-select">
    //             <option value="">--Select request--</option>
    //             {demands.map((demand) => {
    //               return <option key={demand._id} value={demand._id}>{demand.id_user.firstName} {demand.id_user.lastName}</option>
    //             })}
                
    //           </select>
    //           <Button handleClick={assignRequest}>Confirm</Button>
    //           <Button handleClick={hideSelect}>Cancel</Button>
    //         </>
    //       )}

    //     </div>
    //   </div>
  );
};

export default CardHomes;

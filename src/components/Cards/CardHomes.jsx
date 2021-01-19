import React,  { useState } from "react";
import Button from "../Button";
import "../../styles/cardInfos.css";
import  "../../styles/cardHomes.css"

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
    <div  className={`cardHomes`}>
        
            <p>Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Phone number: {phoneNumber}</p>
            <p>Email: {email}</p>
            <p>Age: {age}</p>
            <p>Accepts children: {acceptsChildren ? "true" : "false"}</p>
            <p>Accepts animals: {acceptsAnimals ? "true" : "false"}</p>
            <p>Address : {address}</p>
            <p>City: {city}</p>
            <p>Zipcode: {zipCode}</p>
            <p>Size: {size}</p>
            <p>Number of rooms: {numOfRooms}</p>
            <p>Is available:{isAvailable ? "true" : "false"}</p>
        

      
        <div className="buttons">
        <Button handleClick={() => toggleIsSelectShown(true) } primary>
            Assign request
          </Button>
          {isSelectShown && (
            <>
              <select value={selectValue} onChange={handleChangeDemand} name="pets" id="pet-select">
                <option value="">--Select request--</option>
                {demands.map((demand) => {
                  
                  return <option key={demand._id} value={demand._id}>{demand.id_user.firstName} {demand.id_user.lastName}</option>
                })}
                
              </select>
              <Button handleClick={assignRequest}>Confirm</Button>
              <Button handleClick={hideSelect}>Cancel</Button>
            </>
          )}

        </div>
      </div>
  );
};

export default CardHomes;

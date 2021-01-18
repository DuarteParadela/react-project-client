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
  _id,
  image,
  handleChangeStatus,
  context,
  demands
  
}) => {
  const [isSelectShown, toggleIsSelectShown] = useState(false)
  
 const hideSelect = () => {
   toggleIsSelectShown(false)
 }

 const handleChange = (status) => {
   hideSelect()
   handleChangeStatus(_id, status)
 }

  return (
    <div  className={`cardHomes`}>
        
            <p>Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Phone number: {phoneNumber}</p>
            <p>Email: {email}</p>
            <p>Age: {age}</p>
            <p>Accepts children: {acceptsChildren}</p>
            <p>Accepts animals: {acceptsAnimals}</p>
            <p>Address : {address}</p>
            <p>City: {city}</p>
            <p>Zipcode: {zipCode}</p>
            <p>Size: {size}</p>
            <p>Number of rooms: {numOfRooms}</p>
        

      
        <div className="buttons">
        <Button handleClick={() => toggleIsSelectShown(true) } primary>
            Assign request
          </Button>
          {isSelectShown && (
            <>
              <select name="pets" id="pet-select">
                <option value="">--Select user--</option>
                {demands.map((demand) => {
                  console.log(demand);
                  return <option key={demand._id} value={demand._id}>{demand.id_user.firstName} {demand.id_user.lastName}</option>
                })}
                
              </select>
              <Button>Confirm</Button>
              <Button handleClick={hideSelect}>Cancel</Button>
            </>
          )}

        </div>
      </div>
  );
};

export default CardHomes;

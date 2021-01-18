import React,  { useState } from "react";
import Button from "../Button";
import "../../styles/cardInfos.css";
import  "../../styles/cardDemands.css"

const CardDemands = ({
  id_user: {
      firstName,
      lastName,
      phoneNumber,
      age,
      email
  },
  numOfChildren,
  numOfAnimals,
  tempAddress,
  tempCity,
  tempZipCode,
  additionalInformation,
  status,
  _id,
  image,
  handleChangeStatus,
  context,
  
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
    <div  className={`cardDemand card-${status.toLowerCase() || ""}`}>
        
            <p>Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Phone number: {phoneNumber}</p>
            <p>Email: {email}</p>
            <p>Age: {age}</p>
            <p>Number of children: {numOfChildren}</p>
            <p>Number of animals: {numOfAnimals}</p>
            <p>Temporary address : {tempAddress}</p>
            <p>Temporary city: {tempCity}</p>
            <p>Temporary zipcode: {tempZipCode}</p>
            <p>Additional information: {additionalInformation}</p>
            <p>Status: {status}</p>
        

      
        <div className="buttons">
        <Button handleClick={() => toggleIsSelectShown(true) } primary>
            Select safe home
          </Button>
          {isSelectShown && (
            <>
              <select name="pets" id="pet-select">
                <option value="">--Select home--</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
              </select>
              <Button>Confirm</Button>
              <Button handleClick={hideSelect}>Cancel</Button>
            </>
          )}
          
          <Button handleClick={() => handleChange('Closed')} secondary>
            Close
          </Button>
          <Button handleClick={() => handleChange('Rejected')} primary>
            Reject
          </Button>
        </div>
      </div>
  );
};

export default CardDemands;

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
  context,
  handleChangeStatus
  
}) => {

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
        <Button >
            <a href="/safehomes">Select a safe home</a>
          </Button>
        
        <Button handleClick={() => handleChangeStatus(_id, 'Closed')}>Close</Button>
        <Button handleClick={() => handleChangeStatus(_id, 'Rejected')}>Reject</Button>
        <Button handleClick={() => handleChangeStatus(_id, 'Pending')}>Re-open</Button>
        </div>
      </div>
  );
};

export default CardDemands;

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
  id_home,
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
        
        {status !== 'Closed' ? <Button handleClick={() => handleChangeStatus(_id, 'Closed', id_home)}>Close</Button> : null}
        {status !== 'Rejected' ?  <Button handleClick={() => handleChangeStatus(_id, 'Rejected', id_home)}>Reject</Button> : null}
        {status !== 'Pending' ? <Button handleClick={() => handleChangeStatus(_id, 'Pending', id_home)}>Re-open</Button> : null}
        
        </div>
      </div>
  );
};

export default CardDemands;

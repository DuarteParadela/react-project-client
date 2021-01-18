import React,  { useState } from "react";
import Button from "../Button";
import "../../styles/cardInfos.css";
import  "../../styles/cardDemands.css"

const CardMyDemands = ({
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
        
            <p>Number of children: {numOfChildren}</p>
            <p>Number of animals: {numOfAnimals}</p>
            <p>Temporary address : {tempAddress}</p>
            <p>Temporary city: {tempCity}</p>
            <p>Temporary zipcode: {tempZipCode}</p>
            <p>Additional information: {additionalInformation}</p>
            <p>Status: {status}</p>
        
      </div>
  );
};

export default CardMyDemands;

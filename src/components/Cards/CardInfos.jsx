import React from "react";
import Button from "../Button";
import "../../styles/cardInfos.css";
import withUser from '../Auth/withUser'

const CardInfos = ({
  firstName,
  lastName,
  _id,
  image,
  handleEdit,
  handleDelete,
  context
}) => {
  
  return (
    <div className="CardInfos">
        <input type="email" value={context.user.email} onChange={() => {}}/>
        <input type="text" value={context.user.firstName} onChange={() => {}}/>
        <input  type="text" value={context.user.lastName} onChange={() => {}}/>
        <input  type="number" value={context.user.phoneNumber} onChange={() => {}}/>
        <div className="buttons">
          <Button handleClick={(event) => handleEdit(_id)} primary>
            Edit
          </Button>
        </div>
      </div>

  );
};

export default withUser(CardInfos) ;

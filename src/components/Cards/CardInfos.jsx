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
        <input type="email" value={context.user.email}/>
        <input type="text" value={context.user.firstName}/>
        <input  type="text" value={context.user.lastName}/>
        <input  type="number" value={context.user.phoneNumber}/>

      <div className="round-image">
        <img src={image} alt={firstName} />
      </div>
      <div className="description">
        <h2>{firstName}, {lastName}</h2>
        <div className="buttons">
          <Button handleClick={(event) => handleDelete(_id)} secondary>
            Delete
          </Button>
          <Button handleClick={(event) => handleEdit(_id)} primary>
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withUser(CardInfos) ;

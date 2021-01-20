import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserContext from "../components/Auth/UserContext";
import apiHandler from "../api/apiHandler";
import CardInfos from "../components/Cards/CardInfos";
// import ItemEditFrom from "../components/Items/ItemEditForm";
// import ItemForm from "../components/Items/ItemForm";
import "../styles/Profile.css";


export default class Profile extends Component {
    
    
    render() {
        return (
            <div>
                
                <CardInfos/>
            </div>
        )
    }
}

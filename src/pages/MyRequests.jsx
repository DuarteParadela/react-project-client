import React, { Component } from 'react'
import { Link } from "react-router-dom"
import apiHandler from '../api/apiHandler';
import CardMyDemands from '../components/Cards/CardMyDemands'
import "../styles/adminDashboard.css"

class MyDemands extends Component {

    state = {
        demands: [],
    }

    componentDidMount() {
        apiHandler.getDemandsByUser().then((data) => {
            this.setState({demands: data})
       
        })
    }
    
    render() {

    const { demands } = this.state;
        return (
            <div className= "cardsContainer">
            <div className="container">
                {demands.map((demand) => {
                    return <CardMyDemands key={demand._id} handleChangeStatus={this.handleChangeStatus} {...demand} />
                })}
            </div> 
        </div>
        )
    }
}


export default MyDemands
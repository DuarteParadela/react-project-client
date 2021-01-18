import React, { Component } from 'react'
import { Link } from "react-router-dom"
import apiHandler from '../api/apiHandler';
import UserContext from '../components/Auth/UserContext'
import withUser from '../components/Auth/withUser'
import CardHomes from '../components/Cards/CardHomes'
import "../styles/adminDashboard.css"


class SafeHomes extends Component {
    static contextType = UserContext;

    state = {
        demands: [],
        homes: []
    }

    componentDidMount() {
        this.fetchDemands()
        this.fetchHomes()
    }

    fetchHomes = () => {
        apiHandler.getHomes().then((data) => {
            this.setState({homes: data})
        })
    }

    fetchDemands = () => {
        apiHandler.getDemands().then((data) => {
            this.setState({demands: data})
        })
    }

    fetchPendingDemands = () => {
       return this.state.demands.filter(demand => demand.status === "Pending")
    }

    handleChangeStatus = (demandId, status) => {
        apiHandler.updateDemand(demandId, {status}).then(() => {
            this.fetchHomes()
        })
    }

    render() {
        const { homes } = this.state;
        console.log(this.fetchPendingDemands());
        return (
            <div className= "cardsContainer">
                <div className="container">
                    {homes.map((home) => {
                        return <CardHomes key={home._id} handleChangeStatus={this.handleChangeStatus} demands={this.fetchPendingDemands()}{...home} />
                    })}
                </div> 
            </div>
        )
    }
}


export default SafeHomes
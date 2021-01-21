import React, { Component } from 'react'
import apiHandler from '../api/apiHandler';
import UserContext from '../components/Auth/UserContext'
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

    getAvailableHomes = () => {
      return this.state.homes.filter(home => home.isAvailable === true)
      
    }
;

    fetchDemands = () => {
        apiHandler.getDemands().then((data) => {
            this.setState({demands: data})
        })
    }

    fetchPendingDemands = () => {
       return this.state.demands.filter(demand => demand.status === "Pending")
    }

    handleChange = (demandId, status, id_home) => {
        apiHandler.updateDemand(demandId, {status, id_home}).then(() => {
            apiHandler.updateHome(id_home, {isAvailable: false}).then(() => {
                this.fetchHomes()
            })  
        })
    }

    render() {
        const { homes } = this.state;
        return (
            <div className= "cardsContainer">
                <div className="container">
                    {this.getAvailableHomes().map((home) => {
                        return <CardHomes key={home._id} handleChange={this.handleChange} demands={this.fetchPendingDemands()}{...home} />
                    })}
                </div> 
            </div>
        )
    }
}


export default SafeHomes
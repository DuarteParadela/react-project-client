import React, { Component } from 'react'
import apiHandler from '../api/apiHandler';
import UserContext from '../components/Auth/UserContext'
import CardDemands from '../components/Cards/CardDemands'
import "../styles/adminDashboard.css"


class AdminDashboard extends Component {
    static contextType = UserContext;

    state = {
        demands: [],
        homes: []
    }

    componentDidMount() {
        this.fetchDemands()
        this.fetchHomes()
    }

    fetchDemands = () => {
        apiHandler.getDemands().then((data) => {
            this.setState({demands: data})
        })
    }

    handleChangeStatus = (demandId, status, id_home) => {
        apiHandler.updateDemand(demandId, {status, id_home: null}).then(() => {
            apiHandler.updateHome(id_home, {isAvailable: true}).then(() => {
                this.fetchDemands()
            })  
            
        })
    }

    fetchHomes = () => {
        apiHandler.getHomes().then((data) => {
            this.setState({homes: data})
        })
    }
    render() {
        const { demands } = this.state;
        console.log(demands)
        
        return (
            <div className= "cardsContainer">
                <div className="container">
                    {demands.map((demand) => {
                        return <CardDemands key={demand._id} handleChangeStatus={this.handleChangeStatus} {...demand} />
                    })}
                </div> 
            </div>
        )
    }
}


export default AdminDashboard
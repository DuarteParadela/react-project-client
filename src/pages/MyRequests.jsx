import React, { Component } from 'react'
import apiHandler from '../api/apiHandler';
import CardDemands from '../components/Cards/CardMyDemands'

import "../styles/adminDashboard.css"

class MyDemands extends Component {

    state = {
        demands: [],
    }

    componentDidMount() {
       this.fetchDemandsByUser()
    }

    fetchDemandsByUser = () => {
        apiHandler.getDemandsByUser().then((data) => {
            this.setState({demands: data})
        })
    }

    
    handleDelete = (demandId) => {
        apiHandler.removeDemand(demandId).then(() => {
            this.fetchDemandsByUser()
        }).catch((error) => {
          console.log(error);
        })
      }
    
    render() {

    const { demands } = this.state;
        return (
            <div className= "cardsContainer">
            <div className="container">
                {demands.map((demand) => {
                    return <CardDemands key={demand._id} handleDelete={this.handleDelete} {...demand} />
                })}
            </div> 
        </div>
        )
    }
}


export default MyDemands
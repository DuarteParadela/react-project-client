import React, { Component } from 'react'
import { Link } from "react-router-dom"
import apiHandler from '../api/apiHandler';
import CardMyDemands from '../components/Cards/CardMyDemands'

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
            <div>
                {demands.map((demand)=> {
                  return  <p key={demand._id}>{demand.status}</p>
                })}
            </div>
        )
    }
}


export default MyDemands
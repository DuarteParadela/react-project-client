import React, { Component } from 'react'
import apiHandler from '../api/apiHandler';
import CardMyHome from '../components/Cards/CardMyHome'
import "../styles/adminDashboard.css"

class MyHome extends Component {

    state = {
        homes: [],
    }

    componentDidMount() {
       this.fetchHomesByUser()
    }

    fetchHomesByUser = () => {
        apiHandler.getHomesByUser().then((data) => {
            this.setState({homes: data})
        })
    }

    
    handleDelete = (homeId) => {
        apiHandler.removeHome(homeId).then(() => {
            this.fetchHomesByUser()
        }).catch((error) => {
          console.log(error);
        })
      }
    
    render() {

    const { homes } = this.state;
        return (
            <div className= "cardsContainer">
            <div className="container">
                
                {homes.map((home) => {
                    return <CardMyHome key={home._id} handleDelete={this.handleDelete} {...home} />
                })}
            </div> 
        </div>
        )
    }
}


export default MyHome
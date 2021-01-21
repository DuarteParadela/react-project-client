import React from "react";
import { NavLink } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import banner from '../img/img/banner.png';
import home from '../img/img/home.png';
import womanTree from '../img/img/woman-tree.jpg';
import manSitting from '../img/img/man-sitting.jpg';
import "../styles/home.css";

export default function Home() {
  return (
    <div className="home-page">
      <section className="banner">
        <div className="text-wrapper"> 
          <div className="text-container"> 
            <p className="title">
              We are a safe haven for troubled souls.
            </p>
            <p className="subtitle">
              Wether you are struggling to leave an abusive partner or struggling on the streets because your family does not accept you for who you are, we are here for you.
            </p>
            <p className="subtitle">
              Some people are here to help you.<br/>
              Just sign up on the top right corner and we’ll put you in contact with people who are offering a room, a studio or even a spot on the couch to help you get back on track.
            </p>
            <NavLink to="/request">I NEED HELP</NavLink>
          </div>
        </div>
        <div className="img-wrapper">
          <img src={banner} alt="banner" />
        </div>
      </section>

      <section className="columns-wrapper">
        <p className="main-title green">How does it work?</p>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <div className="column">
              <p className="column-title">
                1. Register and tell us how we can help.
              </p>
              <p>
                After your request, we will call you to get more information to help you at the best of our possibility
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="column">
              <p className="column-title">
                2. We will find a home that fits your needs.            
              </p>
              <p>
                After getting in contact with you, we will search a <i>safe home</i> for you.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="column">
              <p className="column-title">
                3. We accompany you all the way           
              </p>
              <p>
                Once you are settled in your <i>safe home</i>, we will stay in touch to make sure everything is ok
              </p>
            </div>
          </Grid>
        </Grid>
      </section>

      <section className="help-wrapper">
        <img className="home home-1" src={home} alt="home" />
        <img className="home home-2" src={home} alt="home" />
        <div className="text-wrapper">
          <p className="main-title peach">I want to help !</p>
          <p>
            I have an extra bedroom, a tiny house in my garden and I want it to put it at good use ?<br/>
      Just reach out and we’ll put you in contact with someone who needs it.
          </p> 
          <NavLink to="/becomesafehome">OFFER MY HELP</NavLink>
        </div>
      </section>

      <section className="ressources-wrapper">
        <p className="main-title green">Here are some ressources that you might find interesting</p>
        <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
            <div className="column">
              <a className="external-link" target="_blank" href="https://www.solidaritefemmes.org/nous-trouver">
                <div className="thumbnail-wrapper">
                  <div className="thumbnail-container">
                    <img src={banner} alt="banner" />
                  </div>
                </div>
                <p>Solidarité femmes</p>
              </a>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="column">
              <a className="external-link" target="_blank" href="https://fondationdesfemmes.org/">
                <div className="thumbnail-wrapper">
                  <div className="thumbnail-container">
                    <img src={womanTree} alt="banner" />
                  </div>
                </div>
                <p>Fondation des femmes</p>
              </a>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="column">
              <a className="external-link" target="_blank" href="https://www.le-refuge.org/">
                <div className="thumbnail-wrapper">
                  <div className="thumbnail-container">
                    <img src={manSitting} alt="banner" />
                  </div>
                </div>
                <p>Le refuge</p>
              </a>
            </div>
          </Grid>
        </Grid>
      </section>
    </div>
  )
}

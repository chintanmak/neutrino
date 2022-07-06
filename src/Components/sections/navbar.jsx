import React, { Component } from 'react';
import '../scss/_navbar.scss';
import logo from '../assets/logo.png';

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div className='navbar-container'>
            <div className='navbar-logo'>
                <img src={logo} />
            </div>
            <div className='navbar-menu'>
                <a href='#' >About us</a>
                <a href='#' >Services</a>
                <a href='#' >Solutions</a>
                <a href='#' >Partners</a>
                <a href='#' >Insights</a>
                <a href='#' >Careers</a>
                <a href='#' >Contact Us</a>
            </div>
        </div>
      </>
    )
  }
}

import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBCollapse,
  MDBBtn
} from 'mdbreact';
import LoginModal from './LoginModal';

export default class Navbar extends Component {
  state = {
    collapseID: '',
    modal1: false
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  toggle = nr => () => {
    let modalNumber = 'modal' + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  render() {
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'primary' }}
        onClick={this.toggleCollapse('navbarCollapse')}
      />
    );

    return (
      <header>
        <MDBNavbar dark expand='md' fixed='top'>
          <MDBContainer>
            <MDBNavbarBrand>
              <strong className='white-text'>Tracer</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse('navbarCollapse')} />
            <MDBCollapse
              id='navbarCollapse'
              isOpen={this.state.collapseID}
              navbar
            >
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink to='/'>Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to='/about'>About</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to='/pricing'>Pricing</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBBtn onClick={this.toggle(1)} color='indigo'>
                    Login
                  </MDBBtn>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
        {this.state.collapseID && overlay}
        <LoginModal toggle={this.toggle} modal1={this.state.modal1} />
      </header>
    );
  }
}

import React, { Component } from 'react';
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput
} from 'mdbreact';
import './LandingPage.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../actions/authActions';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    const newUser = { ...this.state };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    return (
      <div id='LandingPage'>
        <MDBView>
          <MDBMask className='d-flex justify-content-center align-items-center gradient'>
            <MDBContainer>
              <MDBRow>
                <div className='white-text text-center text-md-left col-md-6 mt-xl-5 mb-5'>
                  <h1 className='h1-responsive font-weight-bold'>
                    Sign up right now!{' '}
                  </h1>
                  <hr className='hr-light' />
                  <h6 className='mb-4'>
                    Having trouble keeping up with all your assignments in your
                    classes? I was too until I built, Tracer an assingment
                    tracker that helped me keep up with all my school work and
                    graduate college!!
                  </h6>
                  <MDBBtn
                    outline
                    color='white'
                    onClick={() => this.props.history.push('/about')}
                  >
                    Learn More
                  </MDBBtn>
                </div>
                <MDBCol md='6' xl='5' className='mb-4'>
                  <MDBCard id='classic-card'>
                    <MDBCardBody className='z-depth-2 white-text'>
                      <form>
                        <h3 className='text-center'>
                          <MDBIcon icon='user' /> Register:
                        </h3>
                        <hr className='hr-light' />
                        <MDBInput
                          name='first_name'
                          label='Your first name'
                          icon='file-signature'
                          className='white-text'
                          value={this.state.first_name}
                          onChange={this.onChange}
                        />
                        <MDBInput
                          name='last_name'
                          label='Your last name'
                          icon='signature'
                          className='white-text'
                          value={this.state.last_name}
                          onChange={this.onChange}
                        />
                        <MDBInput
                          name='email'
                          label='Your email'
                          icon='envelope'
                          className='white-text'
                          value={this.state.email}
                          onChange={this.onChange}
                        />
                        <MDBInput
                          name='password'
                          label='Your password'
                          icon='lock'
                          type='password'
                          className='white-text'
                          value={this.state.password}
                          onChange={this.onChange}
                        />

                        <div className='text-center mt-4 black-text'>
                          <MDBBtn color='indigo' onClick={this.handleSubmit}>
                            Sign Up
                          </MDBBtn>

                          <hr className='hr-light' />
                          <div className='text-center d-flex justify-content-center white-label'>
                            <a href='#!' className='p-2 m-2'>
                              <MDBIcon
                                fab
                                icon='twitter'
                                className='white-text'
                              />
                            </a>
                            <a href='#!' className='p-2 m-2'>
                              <MDBIcon
                                fab
                                icon='linkedin-in'
                                className='white-text'
                              />
                            </a>
                            <a href='#!' className='p-2 m-2'>
                              <MDBIcon
                                fab
                                icon='instagram'
                                className='white-text'
                              />
                            </a>
                          </div>
                        </div>
                      </form>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

LandingPage.propTypes = {
  registerUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { registerUser }
)(LandingPage);

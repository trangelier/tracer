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

class LandingPage extends Component {
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
                      <h3 className='text-center'>
                        <MDBIcon icon='user' /> Register:
                      </h3>
                      <hr className='hr-light' />
                      <MDBInput label='Your name' icon='user' />
                      <MDBInput label='Your email' icon='envelope' />
                      <MDBInput
                        label='Your password'
                        icon='lock'
                        type='password'
                      />
                      <div className='text-center mt-4 black-text'>
                        <MDBBtn color='indigo'>Sign Up</MDBBtn>
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

export default LandingPage;

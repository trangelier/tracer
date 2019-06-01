import React, { Component } from 'react';
import {
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput,
  MDBBtn
} from 'mdbreact';

export default class LoginModal extends Component {
  render() {
    return (
      <MDBModal isOpen={this.props.modal1} toggle={this.props.toggle(1)}>
        <MDBModalHeader
          className='text-center'
          titleClass='w-100 font-weight-bold'
          toggle={this.props.toggle(1)}
        >
          Sign in
        </MDBModalHeader>
        <MDBModalBody>
          <form className='mx-3 grey-text'>
            <MDBInput
              label='Type your email'
              icon='envelope'
              group
              type='email'
              validate
              error='wrong'
              success='right'
            />
            <MDBInput
              label='Type your password'
              icon='lock'
              group
              type='password'
              validate
            />
          </form>
        </MDBModalBody>
        <MDBModalFooter className='justify-content-center'>
          <MDBBtn onClick={this.props.toggle(1)}>Login</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    );
  }
}

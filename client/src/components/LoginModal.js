import React from 'react';
import {
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput,
  MDBBtn
} from 'mdbreact';
import { loginUser } from '../actions/authActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

    const loginUser = { ...this.state };

    this.props.loginUser(loginUser, this.props.history);
  };

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
              name='email'
              label='Type your email'
              icon='envelope'
              group
              type='email'
              validate
              error='wrong'
              success='right'
              value={this.state.email}
              onChange={this.onChange}
            />
            <MDBInput
              name='password'
              label='Type your password'
              icon='lock'
              group
              type='password'
              validate
              value={this.state.password}
              onChange={this.onChange}
            />
          </form>
        </MDBModalBody>
        <MDBModalFooter className='justify-content-center'>
          <MDBBtn onClick={this.props.toggle(1) && this.handleSubmit}>
            Login
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    );
  }
}

LoginModal.propTypes = {
  loginUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { loginUser }
)(LoginModal);

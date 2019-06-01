import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBIcon,
  MDBBtn,
  MDBContainer,
  MDBView,
  MDBCardBody,
  MDBMask
} from 'mdbreact';

const PricingPage = () => {
  return (
    <MDBView>
      <MDBMask className='d-flex justify-content-center align-items-center gradient'>
        <MDBContainer>
          <MDBCard style={{ marginTop: '7em' }} className='gradient'>
            <MDBCardBody>
              <section className='text-center my-5'>
                <h2 className='h1-responsive font-weight-bold my-5 white-text'>
                  Pricing
                </h2>
                <p className='white-text w-responsive mx-auto mb-5 '>
                  My pricing model is super simple! Get an uninteruppted 60 day
                  day trial to see if the tool fits your needs. After that, a
                  subscription of $9.99 a month is required.
                </p>
                <MDBRow>
                  <MDBCol md='6' className='md-0 mb-4'>
                    <MDBCard
                      className='card-image'
                      style={{
                        backgroundImage:
                          'url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)'
                      }}
                    >
                      <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded'>
                        <div>
                          <h6 className='pink-text'>
                            <MDBIcon icon='chart-pie' />
                            <strong> Free!!</strong>
                          </h6>
                          <h3 className='py-3 font-weight-bold'>
                            <strong>Free Tier</strong>
                          </h3>
                          <p className='pb-3 '>
                            Go ahead and give Tracer a try, you know you want
                            to. Free 60-day trial, no credit-card required. Just
                            create an account and select the Free Trial.
                          </p>
                          <MDBBtn color='pink' rounded size='md'>
                            <MDBIcon far icon='clone' className='left' /> Try
                            Now!
                          </MDBBtn>
                        </div>
                      </div>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol md='6' className='md-0 mb-4'>
                    <MDBCard
                      className='card-image'
                      style={{
                        backgroundImage:
                          'url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)'
                      }}
                    >
                      <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded'>
                        <div>
                          <h6 className='green-text'>
                            <MDBIcon icon='eye' />
                            <strong> Paid $$$</strong>
                          </h6>
                          <h3 className='py-3 font-weight-bold'>
                            <strong>Paid Tier</strong>
                          </h3>
                          <p className='pb-3'>
                            You won't regret this purchase, and I'll make sure
                            of it. With your new personal assignment-tracker,
                            you can get detailed notifications for every class.
                          </p>
                          <MDBBtn color='success' rounded size='md'>
                            <MDBIcon far icon='clone' className='left' /> Pay
                            Now!
                          </MDBBtn>
                        </div>
                      </div>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </section>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </MDBMask>
    </MDBView>
  );
};

export default PricingPage;

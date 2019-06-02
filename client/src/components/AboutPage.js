import React from 'react';
import { MDBCard, MDBContainer, MDBView, MDBCardBody, MDBMask } from 'mdbreact';

const AboutPage = () => {
  return (
    <MDBView>
      <MDBMask className='d-flex justify-content-center align-items-center gradient'>
        <MDBContainer>
          <MDBCard style={{ marginTop: '7em' }} className='gradient'>
            <MDBCardBody>
              <section className='text-center my-5'>
                <h2 className='h1-responsive font-weight-bold my-5 white-text'>
                  About Me
                </h2>
                <p className='white-text w-responsive mx-auto mb-5 '>
                  My name is Tyler Angelier, a Computer Information Systems
                  graduate from Valdosta State University. I am currently
                  employed at Valdosta State University's Information Technology
                  Department as a Programmer Analyst II. My Gitbub is at{' '}
                  <a
                    href='https://github.com/trangelier'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    https://github.com/trangelier{'. '}
                  </a>
                  I have a passion for anything code or cars.
                </p>
                <p className='white-text w-responsive mx-auto mb-5 '>
                  You can follow more of that Tracer is doing on Twitter
                  (INSERT_TWITTER) as I'll post updates as I develop the tool
                  more and more! You can also checkout the blog (INSERT_BLOG) to
                  read about the changes that are coming.
                </p>
              </section>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </MDBMask>
    </MDBView>
  );
};

export default AboutPage;

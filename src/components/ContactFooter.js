import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function ContactFooter() {
  return (
    <Container className='py-3'>
      <Row className='justify-content-md-center mb-5'>
        <p className='text-center fs-1 text-primary'>
          Contact Me {''}&#9993;{''}{' '}
          <a href='mailto:tyler51184@yahoo.com'>tyler51184@yahoo.com</a>
        </p>
      </Row>
      <Row className='text-muted'>
        <Col>
          <p className='text-center'>
            {''}&#169; Copyright tylertmusic.com{''}
          </p>
        </Col>
        <Col>
          <p className='text-center'>
            design by:
            <a href='https://bclaw.design' target='_blank' rel='noreferrer'>
              Byron Cole Lawlis
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

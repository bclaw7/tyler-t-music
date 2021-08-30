import React, { Component } from 'react';
import { Container, Table } from 'react-bootstrap';
import beach from '../images/beach.jpg';
import Title from './Title';

export class Tour extends Component {
  render() {
    return (
      <div
        className='py-5'
        id='tour'
        style={{
          backgroundImage: `url(${beach})`,
          backgroundSize: 'cover',
        }}>
        <Title name='shows' title='!!!' />
        <br />
<<<<<<< HEAD
        <br />
        <br />
=======
>>>>>>> d17011351af8b59de59ff589c7ac9bc138952a54
        <Container>
          <Table className='text-info'>
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Venue</th>
                <th>City, State</th>
                <th>info.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>August 5, 2021</td>
                <td>4:00pm-6:00pm</td>
                <td>Ginger and Baker</td>
                <td>Fort Collins, CO</td>
                <td>All ages, No cover</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default Tour;

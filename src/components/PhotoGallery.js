import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import beach from '../images/beach.jpg';
import Title from './Title';

export default class Photos extends Component {
  render() {
    return (
      <>
        <div
          id='tour'
          className='pt-5'
          style={{
            backgroundImage: `url(${beach})`,
            backgroundSize: 'cover',
          }}>
          <Title name='photo' title='gallery' />
        </div>
        <Carousel>
          <div>
            <img src='img/tylert-collage.jpg' alt='collage' />
            <p className='legend'>Check out the new album: Wildflower</p>
          </div>

          <div>
            <img
              src='img/tylert-aggie.jpeg'
              alt='live at The Aggie, Fort Collins, Colorado'
            />
            <p className='legend'>
              Live at The Aggie - Fort Collins, CO - 2015
            </p>
          </div>
          <div>
            <img src='img/tylert-backyard.jpg' alt='live at backyard' />
            <p className='legend'>
              Live at Kinney Farm - Fort Collins, CO - 2021
            </p>
          </div>
          <div>
            <img src='img/tylert-radio.jpg' alt='on air' />
            <p className='legend'>Live On Air at KZMU - Moab, UT - 2010</p>
          </div>
          <div>
            <img
              src='img/tylert-sepia.jpg'
              alt='live at haunted Hotel Monte Vista'
            />
            <p className='legend'>
              Live at Hotel Monte Vista - Flagstaff, AZ - 2010
            </p>
          </div>
          <div>
            <img src='img/tyler-t-breedlove.jpg' alt='Live in Colorado.' />
            <p className='legend'>Tyler T. - Live in Colorado</p>
          </div>
          <div>
            <img src='img/tyler-t-hodis.jpg' alt='Live at Hodis Halfnote.' />
            <p className='legend'>
              Tyler T. - Live at Hodi's Halfnote - Fort Collins, CO
            </p>
          </div>
          <div>
            <img src='img/tyler-t-mountains.jpg' alt='Live in the mountains.' />
            <p className='legend'>Tyler T. - Live in the Rock Mountains</p>
          </div>
          <div>
            <img
              src='img/tyler-t-swing-station.jpg'
              alt='Live at the Swing Station.'
            />
            <p className='legend'>Tyler T. - Live at the Swing Station</p>
          </div>
          <div>
            <img
              src='img/tyler-t-mad-hatter.jpg'
              alt='Live as the mad hatter'
            />
            <p className='legend'>Tyler T. - Live in Colorado</p>
          </div>
          <div>
            <img src='img/tyler-t-lubbock.jpg' alt='Live in Lubbock, Tx' />
            <p className='legend'>Tyler T. - Live in Lubbock, Texas</p>
          </div>
        </Carousel>
      </>
    );
  }
}

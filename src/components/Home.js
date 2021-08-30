import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Zoom from 'react-reveal';
import tree from '../images/tree.jpg';
import Tour from './Tour';
import Videos from './Videos';
import PhotoGallery from './PhotoGallery';
import About from './About';
import Footer from './ContactFooter';

export default class Home extends Component {
  render() {
    return (
      <>
        <div
          style={{ backgroundImage: `url(${tree})`, backgroundSize: 'cover' }}>
          <Zoom right>
            <img src='../img/logo.png' alt='logo' className='my-5 img-fluid' />
          </Zoom>
          <div className='position-relative'>
            <div className='position-absolute bottom-0 end-0 pb-5 pe-5'>
              <Link to='/productlist'>
                <Button type='button' className='Info'>
                  <strong className='fs-5'>Check Out The Merch Store !</strong>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Tour />
        <Videos />
        <PhotoGallery />
        <About />
        <Footer />
      </>
    );
  }
}

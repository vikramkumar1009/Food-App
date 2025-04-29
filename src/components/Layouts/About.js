// src/components/About.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import imageabout from '../../assets/logo/imageabout.jpg'
import Header from './Header';

const About = () => {
  return (
    <>
  <Header/>
    <div className="py-5 bg-light" >
        
      <div className="container">
        <h2 className="text-center text-dark fw-bold mb-5">About Us</h2>
        <div className="row align-items-center g-5">
          <div className="col-lg-6 order-lg-2">
            <img
              className="img-fluid rounded-3 shadow-lg"
              src={imageabout}
              alt="Delicious Food"
            />
          </div>
          <div className="col-lg-6 order-lg-1">
            <p className="lead text-dark mb-4">
              Welcome to our Food App! We are dedicated to bringing you the best culinary experience right at your fingertips. Our mission is to provide a seamless and enjoyable way to discover and order delicious food from the best local restaurants.
            </p>
            <p className="lead text-dark mb-4">
              Whether you're craving a hearty meal, a healthy salad, or a decadent dessert, our app has got you covered. We work with top-rated chefs and eateries to ensure that every bite you take is a delight.
            </p>
            <p className="lead text-dark">
              Join us on this gastronomic journey and explore the world of food like never before. Bon appétit!
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-5">
      <div className="row align-items-center g-5">
          <div className="col-lg-6 order-lg-2">
            <img
              className="img-fluid rounded-3 shadow-lg"
              src={imageabout}
              alt="Delicious Food"
            />
          </div>
          <div className="col-lg-6 order-lg-1">
            <p className="lead text-dark mb-4">
              Welcome to our Food App! We are dedicated to bringing you the best culinary experience right at your fingertips. Our mission is to provide a seamless and enjoyable way to discover and order delicious food from the best local restaurants.
            </p>
            <p className="lead text-dark mb-4">
              Whether you're craving a hearty meal, a healthy salad, or a decadent dessert, our app has got you covered. We work with top-rated chefs and eateries to ensure that every bite you take is a delight.
            </p>
            <p className="lead text-dark">
              Join us on this gastronomic journey and explore the world of food like never before. Bon appétit!
            </p>
          </div>
          </div>
       </div>
    </div>
    </>
  );
};

export default About;

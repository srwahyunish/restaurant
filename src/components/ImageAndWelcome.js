import React from 'react';
import mainImage from '../assets/images/jmb.jpeg';

const ImageAndWelcome = () => (
    <div className="container-fluid">
        <div className="row" style={{marginBottom: 30}}>
          <img src={mainImage} width="100%" alt="aneka-makanan"></img>
        </div>
          <div className="row">
            <div className="col">
              <div className="card text-white bg-success mb-3 text-center">
                <div className="card-header">
                  <h1>Welcome to FoodParadise</h1>
                </div>
                <div className="card-body">
                  <h4>The Easiest Way to Find Restaurant and Food</h4>
                  <p>You can grab informations about restaurants, cafees, cuisines with just a few clicks.</p>
                  <p>Start by choosing the featured cities below, or search the city name.</p>
                </div>
              </div>
            </div>
          </div>
      </div>
);

export default ImageAndWelcome;
import React from 'react';
import homepageImage from '../img/homepage.jpg';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="card">
      <img src={homepageImage} alt="Homepage" />
      <div className="card-body">
        <h2>Welcome to my online garden!</h2>
        <p>Spring is upon us...which means it's time to order your spring flowers! 
          We offer a wide variety of annual flowers that can be shipped right to your
          door. We only deliver the best quality products! Feel free to browse our 
          products <Link to="/productdetail">here</Link>, and when you're ready to order, just visit our cart
          page <Link to="/cart">here!</Link>
        </p>
      </div>
    </div>
  );
};

export default HomePage;

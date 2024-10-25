import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
      <div className="not-found-container">
          <h1>404</h1>
          <h2>Oops! Page not found.</h2>
          <p>The page you're looking for doesn't exist or is currently in development.</p>
          <p>If this seems to be an error, please report it <Link to={"/contact"}>here</Link></p>
          <Link to="/" className="home-link">Go back to Home</Link>
      </div>
    );
};

export default PageNotFound;
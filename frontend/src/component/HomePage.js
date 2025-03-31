import React from "react";
import '../CSS Folder/HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage(){
    return(
    <div className="about-section">
      <div className="content">
        <h1>Welcome to BrandName</h1>
        <p>
          BrandName is dedicated to providing exceptional services and solutions tailored to your needs. Our website serves as a gateway to explore our offerings and discover more about us.
        </p>
      </div>
      
      <div className="video-container">
        <video autoPlay muted controls className="centered-video">
          <source src="..\..\Circuit design Smashing Waasa-Turing _ Tinkercad - Google Chrome 2022-05-08 20-17-52.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>


      <div className="features-section">
             <h2 className="feature-header">Top Rated Fiction Strories</h2>  
                <div className="row">
                    <div className="col-md-4 feature-item">
                        <img
                        src="..\..\Fiction1.jpeg"
                        alt="Feature 1"
                        className="img-fluid rounded"
                        />
                        <h3>Harry Potter</h3>
                        <p>Summary</p>
                        <a href="#" className="btn btn-primary">Read more</a>
                    </div>
                    <div className="col-md-4 feature-item">
                        <img
                        src="..\..\Fiction2.jpeg"
                        alt="Feature 2"
                        className="img-fluid rounded"
                        />
                        <h3>Calculating Stars</h3>
                        <p>Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae.</p>
                        <a href="#" className="btn btn-primary">Read more</a>
                    </div>
                </div>
            <h2>Top Rated Non-Fiction Stories</h2>
                <div className="row">
                    <div className="col-md-4 feature-item">
                        <img
                        src="..\..\nonfiction.jpeg"
                        alt="Feature 1"
                        className="img-fluid rounded"
                        />
                        <h3>Life After Power</h3>
                        <p>Summary</p>
                        <a href="#" className="btn btn-primary">Read more</a>
                    </div>
                    <div className="col-md-4 feature-item">
                        <img
                        src="..\..\horror1.jpg"
                        alt="Feature 2"
                        className="img-fluid rounded"
                        />
                        <h3>TOM COLEMAN</h3>
                        <p>Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae.</p>
                        <a href="#" className="btn btn-primary">Read more</a>
                    </div>
                </div>
                <div className="user-reviews">
        <h2 className="reviews-header">What Our Users Say</h2>
        <div className="scrollable-reviews">
          <div className="review-item">
            <strong>Jane Doe:</strong> BrandName exceeded my expectations! The services were exceptional and well-tailored to my needs.
          </div>
          <div className="review-item">
            <strong>John Smith:</strong> A fantastic experience from start to finish. Highly recommend to anyone looking for reliable solutions.
          </div>
          <div className="review-item">
            <strong>Emily Johnson:</strong> Great customer service and attention to detail. Will definitely return for more.
          </div>
          <div className="review-item">
            <strong>Michael Brown:</strong> Absolutely loved it. The services were top-notch!
          </div>
          <div className="review-item">
            <strong>Sophia Davis:</strong> Highly professional team and excellent services!
          </div>
        </div>
      </div>  
</div>
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                      <img src="your-logo-url-here" alt="Brand Logo" className="footer-logo" />
                      <p className="address">
                        Address:<br/>
                        123 Main Street, City<br/>
                        State Province, County
                      </p>
                      <div className="social-icons">
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                      </div>
                    </div>
                </div>
                <div className="footer-bottom">
                  <p>© 2024 Your Website. All rights reserved. <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
                </div>
            </div>
        </footer>
    </div>

    );
}

export default HomePage;
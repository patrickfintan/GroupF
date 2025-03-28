import React from "react";
import "../../src/CSS Folder/ReadStory.css";
import "../../src/CSS Folder/HomePage.css"

function ReadStory(){
    return(
        <><div className="print-container">
            <header className="print-header">
                <h1>Title of the story</h1>
                <h2>Type of Story</h2>
                <h3>Author of Story</h3>
            </header>

            <div className="image-container">
                <img src="../../horror1.jpg" alt="Story Illustration" className="header-image" />
            </div>
            <div className="print-contain">
                <main className="print-content">
                    <p> This is the area for the story which will be visible here, So do please read and Enjoy</p>
                    <p>I am checking if the length increase then what happens</p>
                    <p>I guess its working now</p>
                    <p>How much is the length</p>
                    <p>I how it works perfectly</p>
                </main>

                <div className="button-container">
                    <button className="download-button">Download PDF</button>
                </div>
            </div>
            
        </div>
        
        <div className="rate-story-container">
            <form className="rate-story-form">
                <h2>Rate the story</h2>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Please Enter your Email!"/>
                </div>
                <div className="form-group">
                    <label htmlFor = "review">Rebiew</label>
                    <textarea id = "review" name="review" placeholder="Write you review regarding the stroy read" />
                </div>
                <div className="form-group">
                    <label htmlFor="rating">Rating</label>
                    <select id="rating" name="rating">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <button type="submit" className="send-button">Send</button>
            </form>
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
        
        </>
    );
}

export default ReadStory;
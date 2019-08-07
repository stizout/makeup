import React, { Component } from 'react'
import Carousel from '../components/Carousel';
import img1 from '../sass/assets/img1.jpg';
import img2 from '../sass/assets/img2.jpg';
import img3 from '../sass/assets/img3.jpg';
import img4 from '../sass/assets/img4.jpg';
import img5 from '../sass/assets/img5.jpg';
import Features from '../components/Features';

export default class Home extends Component {
    render() {
        return (
            <div style={{position: 'relative'}}>
                <section className="home-container">
                    .
                    <div  className="carousel-section">
                        <div className="carousel-parent">
                            <Carousel images={[img1,img2,img3,img4,img5]}/>
                        </div>
                        <div className="home-intro">
                            <h1>Learn to</h1>
                            <h1>do makeup</h1>
                            <div className="intro-body-container">
                                <p className="body-text">Wanting to start a business? Want to throw the 
                                ultimate girls night out party? Book make up session with the best in the business
                                today!!</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="features-home-container">
                    <Features />
                </section>
            </div>
        )
    }
}

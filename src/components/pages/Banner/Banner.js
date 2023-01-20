import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import image1 from '../../assets/img1.jpg'
import image2 from '../../assets/img2.jpg'
import image3 from '../../assets/img3.jpg'
import image4 from '../../assets/img4.jpg'
import image5 from '../../assets/img5.jpg'
import image6 from '../../assets/img6.jpg'

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 style={{ color: '#FFA500' }} className='md:text-4xl text-xl'>Special Food Service</h3>
                    <p>Special Food Company is professionally engaged in a wide range
                        of services in the catering and restaurant business. Delivers
                        hot meals in individual containers or organizes mobile distributions
                        at employee food centers, in the form of a full-fledged complex lunch,
                        dinner or hearty breakfast.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 style={{ color: '#FFA500' }} className='md:text-4xl text-xl'>Special Food Service</h3>
                    <p>Special Food Company is professionally engaged in a wide range
                        of services in the catering and restaurant business. Delivers
                        hot meals in individual containers or organizes mobile distributions
                        at employee food centers, in the form of a full-fledged complex lunch,
                        dinner or hearty breakfast.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 style={{ color: '#FFA500' }} className='md:text-4xl text-xl'>Special Food Service</h3>
                    <p>Special Food Company is professionally engaged in a wide range
                        of services in the catering and restaurant business. Delivers
                        hot meals in individual containers or organizes mobile distributions
                        at employee food centers, in the form of a full-fledged complex lunch,
                        dinner or hearty breakfast.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image4}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 style={{ color: '#FFA500' }} className='md:text-4xl text-xl'>Special Food Service</h3>
                    <p>Special Food Company is professionally engaged in a wide range
                        of services in the catering and restaurant business. Delivers
                        hot meals in individual containers or organizes mobile distributions
                        at employee food centers, in the form of a full-fledged complex lunch,
                        dinner or hearty breakfast.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image5}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 style={{ color: 'whi' }} className='md:text-4xl text-xl'>Special Food Service</h3>
                    <p>Special Food Company is professionally engaged in a wide range
                        of services in the catering and restaurant business. Delivers
                        hot meals in individual containers or organizes mobile distributions
                        at employee food centers, in the form of a full-fledged complex lunch,
                        dinner or hearty breakfast.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image6}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 style={{ color: '#FFA500' }} className='md:text-4xl text-xl'>Special Food Service</h3>
                    <p>Special Food Company is professionally engaged in a wide range
                        of services in the catering and restaurant business. Delivers
                        hot meals in individual containers or organizes mobile distributions
                        at employee food centers, in the form of a full-fledged complex lunch,
                        dinner or hearty breakfast.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
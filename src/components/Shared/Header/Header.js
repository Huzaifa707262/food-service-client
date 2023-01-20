import React, { useContext } from 'react';
import './Header.css'
import image from '../../assets/foods-removebg-preview.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import { AuthContext } from '../../context/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }

    return (
        <Navbar className='font-[poppins] bg-[#FAEBD7]' expand="lg">
            <Container>
                <img className='rounded' style={{ width: '8%' }} src={image} alt="" />
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto gap-4   text-xl ">
                        <Link to="/" className='decoration md:ml-12'>Home</Link>
                        <Link to="/service" className='decoration'>All-Services</Link>
                        <Link className='decoration'>My-Reviews</Link>
                        {user?.email ?
                            <>
                                <button onClick={handleLogOut} className='btn-ghost md:w-24 w-24'>Sign Out</button>
                            </>
                            :
                            <>
                                <Link className='decoration' to='/login'>SignIn</Link>
                                <Link className='decoration' to='/signup'>SignUp</Link>
                            </>

                        }
                        <Link className='decoration text-4xl md:ml-10'><MdOutlineLocalGroceryStore></MdOutlineLocalGroceryStore></Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
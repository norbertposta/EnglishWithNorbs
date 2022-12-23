import React from 'react'
import './Header.scss';
import { Outlet, Link  } from "react-router-dom";
import Logo from './img/engwithnorbs.png';
import { Navbar, Nav} from 'react-bootstrap';


function hideNavMenu (this: any) {
   this.element.classList.toggle('ewn-navbar-menu');
}


const Header = () =>{
    return (
      <>    
        <nav className="navbar navbar-light bg-light navbar-expand-lg ewn-navbar-desktop">
            <div className="container-fluid "> 
            <div className="navbar-brand">
            <Link to="/">  <img className="logo--img" src={Logo} alt=""></img> </Link> </div>
            <div className=" navbar-nav ">
             <div className=" nav-link" >
                <Link to="/" className="navbar-link">Home</Link>
             </div>
             <div className=" nav-link">
                <Link to="/about"  className="navbar-link">About</Link>
             </div>
             <div className=" nav-link">
                <Link to="/vocabulary" className="navbar-link">Vocabulary</Link>
             </div>
     
               <div className="nav-link">
                  <Link to="/tips" className="navbar-link">Tips</Link>
                  </div>
               <div className="nav-link">
                  <Link to="/questions" className="navbar-link">Questions</Link>
                  </div>

            </div>
            </div>


        </nav>


<div className="ewn-navbar-mobile">
      <Navbar bg="light" expand="lg" className="ewn-navbar-menu">
         <Navbar.Brand href="#"> <Link to="/">   <img className="logo--img" src={Logo}  alt=""/> </Link></Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end">
               {/* Hide navbar if Link if clicked */}
               
            <Link to="/" onClick={hideNavMenu} >Home</Link>
            <Link to="/about" onClick={hideNavMenu} >About</Link>
            <Link to="/vocabulary" onClick={hideNavMenu} >Vocabulary</Link>
            <Link to="/tips" onClick={hideNavMenu} >Tips</Link>
            <Link to="/questions" onClick={hideNavMenu} >Questions</Link>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   </div>

        
      
        <Outlet />
        </>
    )
};



export default Header; 

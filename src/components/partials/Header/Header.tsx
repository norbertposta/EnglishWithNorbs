import React from 'react'
import './Header.scss';
import { Outlet, Link  } from "react-router-dom";
import Logo from './img/engwithnorbs.png';
import { Navbar, Nav} from 'react-bootstrap';


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

        






{/* var ewnHide = document.querySelector('.ewn-hide');
ewnHide.onclick = function() {
    var NavbarMobile = document.querySelector('.ewn-navbar-mobile');
    NavbarMobile.style.display = "none"; */}

{/* UseState to toggle ewn-navbar-mobile if I click on ewn-hide */}

<div className="ewn-navbar-mobile">
      <Navbar bg="light" expand="lg" className="ewn-navbar-menu">
         <Navbar.Brand href="#"> <Link to="/">   <img className="logo--img" src={Logo}  alt=""/> </Link></Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end">
               {/* Hide navbar if Link if clicked */}
               
            <Link to="/" onClick={HideNavMenu} >Home</Link>
            <Link to="/about" onClick={HideNavMenu} >About</Link>
            <Link to="/vocabulary" onClick={HideNavMenu} >Vocabulary</Link>
            <Link to="/tips" onClick={HideNavMenu} >Tips</Link>
            <Link to="/questions" onClick={HideNavMenu} >Questions</Link>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   </div>























 
        {/* <nav className="navbar bg-light fixed-top ewn-navbar-mobile">
  <div className="container-fluid">
  
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
      <div className=" nav-link" >
                <Link to="/">Home</Link>
             </div>
             <div className=" nav-link">
                <Link to="/about">About</Link>
             </div>
             <div className=" nav-link">
                <Link to="/vocabulary">Vocabulary</Link>
             </div>
   
               <div className="nav-link">
                  <Link to="/tips">Tips</Link>
                  </div>
               <div className="nav-link">
                  <Link to="/questions">Questions</Link>
                  </div>

      </div>
    </div>
  </div>
</nav> */}
        
      
        <Outlet />
        </>
    )
};

function HideNavMenu (this: any) {
      this.element.classList.toggle('ewn-navbar-menu');
}

// var ewnHide = document.querySelector('.ewn-hidenavbar');
// ewnHide.onclick = function() {
//     var MobileMenu = document.querySelector('.ewn-navbar-menu');
//    //  MobileMenu.style.display = "none";
// };

export default Header; 

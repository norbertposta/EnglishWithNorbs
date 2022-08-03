import React from 'react'
import { Outlet, Link  } from "react-router-dom";
import './Footer.scss';



const Footer = () =>{
    return (
      <>
      <footer>
<div class="_row primary">
  <div class="column about">

  <h3>Foolish Developer</h3>

   <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
      voluptatem corporis error non,
  </p>

  <div class="social">
    <i class="fa-brands fa-facebook-square"></i>
    <i class="fa-brands fa-instagram-square"></i>
    <i class="fa-brands fa-twitter-square"></i>
    <i class="fa-brands fa-youtube-square"></i>
    <i class="fa-brands fa-whatsapp-square"></i>
  </div>
</div>

<div class="column links">
<h3>Some Links</h3>

 <ul>

  <li>
   <a href="#faq">F.A.Q</a>
  </li>
  <li>
   <a href="#cookies-policy">Cookies Policy</a>
  </li>
  <li>
   <a href="#terms-of-services">Terms Of Service</a>
  </li>
  <li>
   <a href="#support">Support</a>
  </li>
 </ul>

</div>


<div class="column links">
  <h3>Some Links</h3>
   <ul>
    <li>
     <a href="#faq">F.A.Q</a>
    </li>
    <li>
     <a href="#cookies-policy">Cookies Policy</a>
    </li>
    <li>
    <a href="#terms-of-services">Terms Of Service</a>
    </li>
    <li>
    <a href="#support">Support</a>
    </li>
  </ul>
</div>

<div class="column subscribe">
 <h3>Newsletter</h3>
  <div>
   <input type="email" placeholder="Your email id here" />
   <button>Subscribe</button>
  </div>

</div>

</div>

<div class="_row copyright">
  <div class="footer-menu">

  <a ><Link to="/">Home</Link></a>
  <a ><Link to="/about">About</Link></a>
  <a ><Link to="/shop">Shop</Link></a>

  </div>
   <p>Made with React 2022</p>
</div>
</footer>
  
     
        </>
    )
};

export default Footer; 
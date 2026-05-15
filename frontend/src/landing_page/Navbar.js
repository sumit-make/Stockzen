import React from 'react'
import { Link } from 'react-router-dom';

function Navbr() {
    return ( 
      
        <nav class="navbar navbar-expand-lg border-bottom " style={{backgroundColor:"#FFF"}}>
  <div class="container-fluid">
    <img src='media/images/stzlogo.png' alt='logo' style={{width:"10%"}}></img>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
   
     
    </div>
  <form role="search">
  <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-5">
    <li class="nav-item">
      <Link class="nav-link active" to={"/"}>Signup</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link active" to={"/about"}>About</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link active" to={"/product"}>Product</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link active" to={"/pricing"}>Pricing</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link active" to={"/support"}>Support</Link>
    </li>
  </ul>
</form>
  </div>
</nav>
     
     );
}

export default Navbr;
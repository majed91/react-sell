import React, {Component} from 'react';
import './Nav2.css';
class Nav2 extends React.Component{
    render(){
        return(
           <div>
      <nav id="nav-red" class="navbar bg-light navbar-light sticky-top">
          <div class="container">
               <div class="navbar-logo"><a href="#"><img id="img-light" src="sell2.png" alt="sell" />React for Sell </a><svg id="bath" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-broadcast-pin" viewBox="0 0 16 16">
               <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM6 8a2 2 0 1 1 2.5 1.937V15.5a.5.5 0 0 1-1 0V9.937A2 2 0 0 1 6 8z"/>
       </svg></div>
             <ul class="nav">
                 
                  <li class="nav-item">
                   <a class="nav-link" href="#">home</a>
                 </li>
                  <li class="nav-item">
                     <a class="nav-link" href="#">previcy</a>
                     </li>
                <li class="nav-item">
                  <a class="nav-link ">contact us</a>
                 </li>
                 <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="#">about</a>
                 </li>
                 <li class="nav-item dropdown">
                    <a class="nav-link " href="#" data-toggle="dropdown">products</a>
                    <div class="dropdown-menu">
                     <a href="#" class="dropdown-item">bags</a>
                     <a href="#" class="dropdown-item">lazer</a>
                     <a href="#" class="dropdown-item">shoes</a>
                     <a href="#" class="dropdown-item">caps</a>
                     <div class="dropdown-divider"></div>
                     <a href="#" class="dropdown-item">shirt</a>
                     <a href="#" class="dropdown-item">pants</a>
                     <a href="#" class="dropdown-item">t-shirt</a>
                     <a href="#" class="dropdown-item">short</a>
                     <a href="#" class="dropdown-item">roze</a>
                     </div>
                 </li>
             </ul>
        </div>
      </nav>
</div>
           )
      }
  }
  export default Nav2
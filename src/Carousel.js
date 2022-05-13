import React, {Component} from 'react';
import './Carousel.css';

class Carousel extends React.Component{
    render(){
        return(
            <div>
               <div class="carousel slide" id="car" data-ride="Carousel">
                   <ul class="carousel-indicators">
                         <li class="active" data-slide-to="0" data-target="#car"></li>
                         <li data-slide-to="1" data-target="#car"></li>
                       </ul>
                       <div class="carousel-inner">
                               <div class="carousel-item active" ><img class="imgc" src="bag.webp" alt="sell"/>
                                   <div class="carousel-caption">
                                       <h4 id="lear">learn more about our bags</h4>
                                       <button class="btn btn-dark">learn more</button>
                                       </div>
                                   </div>
                               <div class="carousel-item " ><img class="imgc"  src="bag1.jpg" alt="sell"/>
                                   <div class="carousel-caption">
                                       <h4 id="lear">learn more about our bags</h4>
                                       <button class="btn btn-dark">learn more</button>
                                       </div>
                                   </div>
                           </div>
                           <button class="carousel-control-prev" data-slide="prev" data-target="#car"><span class="carousel-control-prev-icon"></span></button>
                           <button class="carousel-control-next" data-slide="next" data-target="#car"><span class="carousel-control-next-icon"></span></button>
                   </div>
               </div>
        )
    }
}
export default Carousel
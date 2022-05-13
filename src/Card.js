import React, {Component} from 'react';
import './Card.css';

class Card extends React.Component{
    render(){
        return(
            <div>
               <div class="container">
                   <div class="row">
                       <div class="col-4">
                           <div class="card">
                               <img src="sell.jpg" class="card-img-top"/>
                               <div class="card-body">
                                   <h3>card title</h3>
                                   <p>price 100$</p>
                                   <input type="number"/>
                                   <button class="btn btn-primary btn-sm float-right">add to craft</button>
                                   </div>
                               </div>
                           </div>
                           <div class="col-4">
                           <div class="card">
                               <img src="sell.jpg" class="card-img-top"/>
                               <div class="card-body">
                                   <h3>card title</h3>
                                   <p>price 100$</p>
                                   <input type="number"/>
                                   <button class="btn btn-primary btn-sm float-right">add to craft</button>
                                   </div>
                               </div>
                           </div>
                           <div class="col-4">
                           <div class="card">
                               <img src="sell.jpg" class="card-img-top"/>
                               <div class="card-body">
                                   <h3>card title</h3>
                                   <p>price 100$</p>
                                   <input type="number"/>
                                   <button class="btn btn-primary btn-sm float-right">add to craft</button>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div class="row">
                       <div class="col-4">
                           <div class="card">
                               <img src="sell2.png" class="card-img-top"/>
                               <div class="card-body">
                                   <h3>card title</h3>
                                   <p>price 100$</p>
                                   <input type="number"/>
                                   <button class="btn btn-primary btn-sm float-right">add to craft</button>
                                   </div>
                               </div>
                           </div>
                           <div class="col-4">
                           <div class="card">
                               <img src="sell2.png" class="card-img-top"/>
                               <div class="card-body">
                                   <h3>card title</h3>
                                   <p>price 100$</p>
                                   <input type="number"/>
                                   <button class="btn btn-primary btn-sm float-right">add to craft</button>
                                   </div>
                               </div>
                           </div>
                           <div class="col-4">
                           <div class="card">
                               <img src="sell2.png" class="card-img-top"/>
                               <div class="card-body">
                                   <h3>card title</h3>
                                   <p>price 100$</p>
                                   <input type="number"/>
                                   <button class="btn btn-primary btn-sm float-right">add to craft</button>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>       
           </div>
        )
    }
}
export default  Card
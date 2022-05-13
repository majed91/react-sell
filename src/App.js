import React, {Component} from 'react';

import Nav from './Nav';
import Nav2 from './Nav2';
import Carousel from './Carousel';
import Store from './Store';
import Card from './Card';
import Footer from './Footer';
class App extends React.Component{
    render(){
        return(
            <div>
                <Nav />
                <Nav2 />
                <Carousel />
                <Store />
                <Card />
                <Footer />
            </div>
        )
    }
}
export default App
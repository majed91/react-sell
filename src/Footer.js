import React, {Component} from 'react';
import './Footer.css';

class Footer extends React.Component{
    render(){
        return(
           <footer class="foot">
             <div class="info">مديرية البيع و التنشيط الإنتاجي<br />
شركة الإخوة أنيس اسطنبول<br />
طريق الفاتح التجاري، ص ب 325، اسطنبول ، تركيا<br />
هاتف/فاكس : 78 12 81 31 </div><br /><br />
                    <div class="plat">
                     platform & project <br />
                     perwerd by<br />
                     <b class="rea"> React</b>
                     </div>
             </footer>
           )
      }
  } 
  export default Footer
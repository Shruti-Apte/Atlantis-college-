import React from "react";
import { Navbar,Image,Button } from "react-bootstrap";
import banner from '../assets/Images/banner1.jpg';

const Navbarcomp =()=>{
    return(
    
        <Navbar scrolling dark expand="md" fixed="top" className="Navbarcontainer">
           <div className="Navitems">
                <a>Products</a>
               <a>Art</a>
               <a>School</a>
               <a>Contact</a>
           </div>
        </Navbar>

      
    );
}

export default Navbarcomp;
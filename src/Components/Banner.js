import React from "react";
import { Navbar,Image,Button } from "react-bootstrap";
import banner from '../assets/Images/banner3.jpg';
import { Parallax, Background } from 'react-parallax';
import BubbleEffect from './BubbleEffect';

const Banner =()=>{
    return(
<div className="banimg">
<Parallax bgImage={banner} style={{height:'100vh'}}   strength={300} >
        <BubbleEffect/>
        <div className="banImage" style={{boxShadow:'box-shadow: 0 0 8px 8px #fff inset'}}>
             <h1 style={{fontSize:'170px',fontWeight:'bold',letterSpacing:'5px'}}>Atlantis</h1>
             <p>Let's find world of Aquascaping</p>
         </div>
    </Parallax>
</div>
        
        
    // <div>
    //     <Image src={banner} width="100%" height="100%"/>
    //     <div className="banImage">
    //         <h1 style={{fontSize:'170px',fontWeight:'bold',letterSpacing:'5px'}}>Atlantis</h1>
    //     </div>
    // </div>
        
    );
}

export default Banner;
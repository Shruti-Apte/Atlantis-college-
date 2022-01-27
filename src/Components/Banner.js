import React from "react";
import { Navbar,Image,Button } from "react-bootstrap";
import banner from '../assets/Images/banner3.jpg';
import { Parallax, Background } from 'react-parallax';
import BubbleEffect from './BubbleEffect';

const Banner =()=>{
    return(
<div className="banimg">
<Parallax bgImage={banner} style={{height:'100vh'}}  strength={300} >
        <BubbleEffect/>
        <div className="banImage" style={{boxShadow:'box-shadow: 0 0 8px 8px #fff inset'}}>
             <h1 style={{fontSize:'150px',fontWeight:'bold',letterSpacing:'5px'}}>Atlantis</h1>
             <p style={{fontSize:'20px',fontWeight:'bold',wordSpacing:'3px',letterSpacing:'2px',marginBottom:'40px'}}>Let's find world of Aquascaping</p>
             <Button  style={{backgroundColor:'white',color:'#245586',width:'30%',borderRadius:'15px',fontSize:'15px',fontWeight:'bold'}}>Discover More</Button>
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
import React from 'react';
import { Button } from "react-bootstrap";
import BubbleEffect from './BubbleEffect';

const MiddleSection =()=>{

    return(
        <>
        <div style={{padding:'5%'}} className='div1'>
        <h1>Let's explore Products we sell</h1>
        <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores harum veritatis
                nemo magni odio reprehenderit atque, esse animi porro suscipit vero nobis modi quis.
                Exercitationem quasi beatae, assumenda officia illum sunt. Cum voluptas maiores
                vitae eius hic inventore deleniti placeat perferendis quam ut nostrum maxime optio
                voluptatibus ab laboriosam, quia consectetur atque minus? Adipisci amet aut sint
                voluptates delectus aperiam? Veniam ab illum enim in libero nihil culpa explicabo
                perspiciatis veritatis non repellendus architecto excepturi nostrum porro voluptatem
                aperiam animi asperiores, a voluptatibus temporibus minima voluptas ipsa! Recusandae
                nostrum, aut, voluptates est error iusto, eaque excepturi soluta quas maiores amet.
               </p>

        </div>
       <section className='Middle'>
           <div className='innerMiddle'>
               <h1 style={{marginBottom:'2%',fontSize:'70px'}}>Buy our Products</h1>
               <h1>Take a Deep Dive </h1>
               <br/>
               <p style={{fontSize:'18px'}}>Your imagination is the limit, build the unexpected aquascapes using varity of products!! <br/>Atlantis is here to provide unique and beautiful products. </p>
                <Button style={{marginTop:'3%',backgroundColor:'#00030B',width:'20%',border:'0px'}}>Explore Products</Button>
           </div>
       </section>
       <div style={{padding:'15%'}}>
        <h1>Let's explore world of aquascaping</h1>
        <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores harum veritatis
                nemo magni odio reprehenderit atque, esse animi porro suscipit vero nobis modi quis.
                Exercitationem quasi beatae, assumenda officia illum sunt. Cum voluptas maiores
                vitae eius hic inventore deleniti placeat perferendis quam ut nostrum maxime optio
                voluptatibus ab laboriosam, quia consectetur atque minus? Adipisci amet aut sint
                voluptates delectus aperiam? Veniam ab illum enim in libero nihil culpa explicabo
                perspiciatis veritatis non repellendus architecto excepturi nostrum porro voluptatem
                aperiam animi asperiores, a voluptatibus temporibus minima voluptas ipsa! Recusandae
                nostrum, aut, voluptates est error iusto, eaque excepturi soluta quas maiores amet.
               </p>
        </div>
        <section className='Middle'>
           <div className='innerMiddle'>
               <h1 style={{marginBottom:'3%',fontSize:'70px'}}>Build the Unexpected Arts</h1>
               <h1>Unlock your Imaginations</h1>
               <br/>
               <p style={{fontSize:'18px'}}>Your imagination is the limit, build the unexpected aquascapes using varity of combination of arts!! <br/>Atlantis is here to provide unique and beautiful style of Arts. </p>
                <Button style={{marginTop:'3%',backgroundColor:'#00030B',width:'20%',border:'0px'}}>Explore Arts</Button>
           </div>
       </section>
       <div style={{padding:'15%'}}>
        <h1>Let's explore world of aquascaping</h1>
        <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores harum veritatis
                nemo magni odio reprehenderit atque, esse animi porro suscipit vero nobis modi quis.
                Exercitationem quasi beatae, assumenda officia illum sunt. Cum voluptas maiores
                vitae eius hic inventore deleniti placeat perferendis quam ut nostrum maxime optio
                voluptatibus ab laboriosam, quia consectetur atque minus? Adipisci amet aut sint
                voluptates delectus aperiam? Veniam ab illum enim in libero nihil culpa explicabo
                perspiciatis veritatis non repellendus architecto excepturi nostrum porro voluptatem
                aperiam animi asperiores, a voluptatibus temporibus minima voluptas ipsa! Recusandae
                nostrum, aut, voluptates est error iusto, eaque excepturi soluta quas maiores amet.
               </p>
        </div>
        <section className='Middle'>
           <div className='innerMiddle'>
               <h1 style={{marginBottom:'3%',fontSize:'70px'}}>Join our School</h1>
               <h1>Learn to create The Breath Taking Arts</h1>
               <br/>
               <p style={{fontSize:'18px'}}>Your imagination is the limit, build the unexpected aquascapes!! <br/>Atlantis is here to provide knowledge. </p>
                <Button style={{marginTop:'3%',backgroundColor:'#00030B',width:'20%',border:'0px'}}>Explore Courses</Button>
           </div>
       </section>
       </>
    );
}


export default MiddleSection;
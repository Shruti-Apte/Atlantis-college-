import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';

const Sample = ()=>{
    return(
        <div className='Outerdiv'>
           <Navbar
        collapseOnSelect
        expand="md"
        bg="white"
        className="innerdiv1"
        variant="light"
      >
        <Container style={{height:'auto',position:'relative'}}>
          <Navbar.Brand href="#home" className="">
            <img
              alt=""
             
              className="d-inline-block align-top img-fluid"
              style={{ width: "150px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" style={{backgroundColor:'white',zIndex:'1',height:'auto',position:'relative'}}>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

            <div className='innerdiv2'>
            <h1 style={{backgroundColor:'green'}} >Div2</h1>
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
            <div className='innerdiv3'>
            <h1>Div3</h1>
            </div>
        </div>
    );
}

export default Sample;
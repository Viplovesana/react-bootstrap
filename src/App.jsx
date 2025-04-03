import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./images/logo.png"


import Carousel from 'react-bootstrap/Carousel';
import myimg1 from "./images/slide1.jpg"
import myimg2 from "./images/slide2.jpg"
import myimg3 from "./images/slide3.jpg"

const App=()=>{
  return(
    <>
     <Navbar bg="dark" data-bs-theme="dark" className='cont'>
        <Container>
          <img src={logo} width={120} />
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <container1 >
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#pages">Pages</Nav.Link>
            <Nav.Link href="#news">News</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          </container1>
        </Container>
      </Navbar>

        

      <Carousel>
      <Carousel.Item>
        <img src={myimg1} width={1600} height={660} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={myimg2} width={1600} height={660}  />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       
      <img src={myimg3} width={1550} height={660} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


    

 

   </>
  );
};
export default App;

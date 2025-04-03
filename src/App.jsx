import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./images/logo.png"


import Carousel from 'react-bootstrap/Carousel';
import myimg1 from "./images/slide1.jpg"
import myimg2 from "./images/slide2.jpg"
import myimg3 from "./images/slide3.jpg"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import myimg4 from "./images/tub.jpg"
import myimg5 from "./images/img1.jpg"
import myimg6 from "./images/slide5.jpg"
import myimg7 from "./images/slide6.jpg"

const App=()=>{
  return(
    <>
     <Navbar  className='nav'>
        <Container>
        <Navbar.Brand href="#home"><h2>The WineMaker</h2></Navbar.Brand>
          <img src={logo} width={120} className='logo' />
          {/* <Navbar.Brand href="#home">The WineMaker</Navbar.Brand> */}
        <div>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#pages">Pages</Nav.Link>
            <Nav.Link href="#news">News</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          </div>
        </Container>
        
      </Navbar>

      <hr size="6" color="red"/>

        

      <Carousel>
      <Carousel.Item>
        <img src={myimg1} width={1600} height={660} />
        <Carousel.Caption>
          <h3>The WineMaker</h3>
          <p>NFlavor notes: bold, earthy, fruity, spicy</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={myimg2} width={1600} height={660}  />
        <Carousel.Caption>
          <h3>The WineMaker</h3>
          <p>Fermentation – Yeast converts sugar to alcohol..</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       
      <img src={myimg3} width={1550} height={660} />
        <Carousel.Caption>
          <h3>The WineMaker</h3>
          <p>
          Bottling – Wine is filtered and sealed in bottles.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br /><br />


    <section className='row'>


    <Card style={{ width: '34rem' }}>
      <img src={myimg4}/>
      <Card.Body>
        <Card.Title>The Wine process</Card.Title>
        <Card.Text style={{color:"brown"}}>
        PRESENT YOUR HISTORY, WINE MAKING PROCESS & PRODUCTS
        "From Barrel to Legacy: How Old Wine Becomes Immortal"

        </Card.Text>
        {/* <Button variant="primary" style={{backgroundColor:'brown'}}>Go somewhere</Button> */}
      </Card.Body>
    </Card>

    <Card style={{ width: '34rem' }}>
   
      <Card.Body>
        <Card.Title style={{color:"brown"}}>"Bottled Time: Exploring the History and Mystique of Vintage Wines"</Card.Title>
        <Card.Text>
        Old wine typically refers to wine that has been aged for a significant period—usually 10 years or more, sometimes even decades or centuries. Not all wines are made to age, but the ones that are can transform dramatically over time in flavor, aroma, texture, and color.The story of wine begins in ancient Mesopotamia and the Caucasus region (modern-day Georgia), where early civilizations discovered that fermenting grapes created a pleasant and intoxicating drink. The Egyptians revered it, the Greeks philosophized over it, and the Romans spread vineyards across Europe.

Wine became entwined with religion, trade, and daily life. In Christianity, wine symbolizes the blood of Christ. In ancient Rome, it was a staple at every banquet. Over centuries, winemaking techniques evolved, turning a rustic drink into a refined craft.Whether you're savoring a vintage red from Bordeaux or a refreshing white from New Zealand, each glass of wine tells a story—of land, time, hands, and heart. It’s not just what where early civilizations discovered that fermenting grapes created a pleasant and intoxicating drink,
        </Card.Text>
        <Card.Text>
        Old wine typically refers to wine that has been aged for a significant period—usually 10 years or more, 
        </Card.Text>
        <Button variant="primary" style={{backgroundColor:'brown'}} >view collection-- </Button>
      </Card.Body>
    </Card>



    </section>

    <br /><br />

    <section className='container'>

      <h3 style={{color:"brown"}}>"Old Wine, New Glass: The Evolving Appreciation of Aged Vintages"</h3>
      <br /><br /><br /><br />
    <div className='cards'>
    <Card style={{ width: '25rem' }}>
      <img src={myimg5}/>
      <Card.Body>
        <Card.Title>The Wine process</Card.Title>
        <Card.Text style={{color:"brown"}}>
        "Chemical Alchemy: The Science Behind Wine Aging"

        </Card.Text>
        <Button variant="primary" style={{backgroundColor:'brown'}}>Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '25rem' }}>
      <img src={myimg6}/>
      <Card.Body>
        <Card.Title>The Wine process</Card.Title>
        <Card.Text style={{color:"brown"}}>
        "The Silent Cellar: Stories Behind the Oldest Wines in the World"

        </Card.Text>
        <Button variant="primary" style={{backgroundColor:'brown'}}>Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '25rem' }} >
      <img src={myimg7}/>
      <Card.Body>
        <Card.Title>The Wine process</Card.Title>
        <Card.Text style={{color:"brown"}}>
        "Bottled Time: Exploring the History and Mystique of Vintage Wines"

        </Card.Text>
        <Button variant="primary" style={{backgroundColor:'brown'}}>Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  

    </section>


    <div class="block">
        <h1>JOIN THE WineMaker AND GET 10% OFF</h1>
        <button>SIGN UP FOR FREE--</button> 
        
        </div>   

        


    

 

   </>
  );
};
export default App;

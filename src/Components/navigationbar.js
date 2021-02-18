import Navbar from 'react-bootstrap/Navbar';
import {Nav,FormControl,Button,Form} from 'react-bootstrap';


export default function Navigationbar() {



  
  

  return (
    <div>  <Navbar style={{backgroundColor:"#40429b", textDecorationColor:"white"}} >
    <Navbar.Brand style={{color:"black"}}href="https://razor.network">Razor Network</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="https://razor.network"></Nav.Link>
      
    </Nav>
   
  </Navbar>
  </div>
  );
}
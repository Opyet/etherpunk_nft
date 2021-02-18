import Navbar from 'react-bootstrap/Navbar';
import {Nav,FormControl,Button,Form} from 'react-bootstrap';


export default function Navigationbar() {



  
  

  return (
    <div>  <Navbar style={{backgroundColor:"#7719AA", textDecorationColor:"white"}} >
    <Navbar.Brand style={{color:"white"}}href="#">NFT Marketplace</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href=""></Nav.Link>
      
    </Nav>
    <button text="connect to wallet" style={{height:"50px",width:"200px", color:"black" ,backgroundColor:"#E7D0FB", borderRadius:"20px"}}>Connect to Wallet</button>
   
  </Navbar>
  </div>
  );
}
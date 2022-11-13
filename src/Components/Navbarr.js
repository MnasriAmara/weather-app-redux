import './Navbarr.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useDispatch } from 'react-redux';
import { search } from '../redux/actions/actions';
import { Link } from 'react-router-dom';

function Navbarr() {
  const dispatch=useDispatch()
  return (
    <Navbar  expand="lg">
      <Container fluid >
        
        
        <Navbar.Collapse id="navbarScroll" className='navig'>
          <Nav 
            style={{ maxHeight: '100px' }} navbarScroll >
            <Link to="/">
              <Button variant="outline-success" className='weather'>Current Weather</Button>
              </Link>
              <Link to="/forecast">
               <Button variant="outline-success" className='weather'>Forecast Weather</Button>
            </Link>
          </Nav>
          <div className="search-container">
        <input type="text" name="search" placeholder="Search..."
          className="search-input" onChange={(e) => dispatch(search((e.target.value)))}
          
        />
        
      </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
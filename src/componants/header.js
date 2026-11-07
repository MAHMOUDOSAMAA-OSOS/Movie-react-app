import {Row, Col} from 'react-bootstrap';
import './header.css';

const Header = ({ handleSearch }) => {

  
  const onSearchChange = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <div className="header" style={{ marginBottom: '20px' }}>
<Row>
    <Col sm={12} >
    <div className=" d-flex justify-content-center align-items-center gap-4 ">
    <input type="search" placeholder="Search for a movie..." onChange={onSearchChange} />
    <img style={{ width: '50px', height: '50px' }} src="logo-icon.png" alt="logo" />
    </div>
    </Col>
</Row>
</div>
  )
}



export default Header;
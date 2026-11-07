import { Card ,ListGroup , Col,Row, Container, Button } from "react-bootstrap";
import {Link , useParams} from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";
  const Display = () => {
const para = useParams();
const [datadetails, setDatadetails] = useState([]);

  const getdetails = async()=>{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${para.id}?api_key=ad5f6abb16eae784220f51a3541bfa8d&language=ar`);
setDatadetails(response.data);
  }

  useEffect(()=> {
    getdetails();
  })

    return (
        <>
   <Container>
        <Row>
            <Col style={{marginTop:'20px'}}>
                <Card style={{ width: '100%' , direction: 'rtl' ,display: 'flex',flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',gap:'40px' }}>
      <Card.Img src={`https://image.tmdb.org/t/p/w500${datadetails.poster_path}`} alt="Card image " style={{ width: '300px' , height:'400px' }}/>
      <ListGroup className="list-group-flush " style={{ marginLeft: '80px' }}>
        <ListGroup.Item>اسم الفيلم: {datadetails.original_title} </ListGroup.Item>
        <ListGroup.Item>سنة الإنتاج: {datadetails.release_date} </ListGroup.Item>
        <ListGroup.Item>التقييم: {datadetails.vote_average} </ListGroup.Item>
         <ListGroup.Item>الوصف: {datadetails.overview} </ListGroup.Item>
      </ListGroup>
    </Card>
    </Col>
        </Row>
        </Container>

        <Container style={{marginTop:'20px'}}>
            <Row>
                <Col>
    <Card style={{direction:'rtl'}}>
      <Card.Header style={{border:'none'}}><div style={{fontWeight:'700' ,width:'max-content',borderBottom:'2px solid gray' , fontSize:'25px'}}>القصة:</div></Card.Header>
      <Card.Body>
        <Card.Text>
         {datadetails.overview}
        </Card.Text>
      </Card.Body>
    </Card>
                </Col>
            </Row>
        </Container>
        <Container>
          <Row>
            <Col style={{display:'flex', justifyContent:'center',gap:'15px',margin:'10px'}}>
          <Link to={'/'}><Button className="btn-danger">العودة للرئيسية</Button></Link>
           <a
    key={para.id}
    href={`https://www.themoviedb.org/movie/${para.id}`}
    target="_blank"
    rel="noopener noreferrer"
  >
          <Button className="btn-danger">الانتقال للمشاهدة</Button>
          </a>
          </Col>
          </Row>
        </Container>
      </>
    )
}
export default Display;
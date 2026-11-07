import './main.css';
import { Row, Col, Card, Container } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import Pagination from './pagination';
import {Link} from 'react-router-dom';

const Main = ({ data , handlePagination, pageCount }) => {
  return (
    <div className="main">
      <Container>
        <Row>
          {data.length > 0 ? (
            data.map((item) => {
              return (
                
                <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="mb-5">
                  <Fade direction="up" triggerOnce duration={800}>
                    <Link to={`/display/${item.id}`}>
                    <Card className="hover-card text-white" style={{ width: 'fit-content' }}>
                      <Card.Img
                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                        alt="Card image"
                      />
                      <Card.ImgOverlay className="hover-overlay">
                        <Card.Title>
                          <div style={{ direction: 'rtl', marginBottom: '3rem' }}>
                            اسم الفيلم : {item.original_title}
                          </div>
                        </Card.Title>
                        <Card.Text className="d-flex flex-column justify-content-center align-items-center gap-5">
                          <div>تاريخ الاصدار : {item.release_date}</div>
                          <div>تقييم الفيلم : {item.vote_average}</div>
                          <div>عدد الاصوات : {item.vote_count}</div>
                        </Card.Text>
                      </Card.ImgOverlay>
                    </Card>
                    </Link>
                  </Fade>
                </Col>

              );
            })
          ) : (
            <Fade>
              <h1 className="text-center text-danger">Not Found</h1>
            </Fade>
          )}
        </Row>
      </Container>
      <Pagination handlePagination={handlePagination} pageCount={pageCount} />
    </div>
  );
};

export default Main;
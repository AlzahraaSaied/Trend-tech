import styles from "./styles.module.css";
const { cursorPointer } = styles;
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>         
      <hr className="mt-5 mb-0" />

      <div className={`${styles.footer} bg-body-tertiary mt-4 fs-5`}>
        <Container className="py-4 me-5">
          <Row className="gy-4 ">
 
            <Col xs={12} sm={6} md={3}>
              <h5 className="fw-bold pt-2 pb-3 fs-5">Categories</h5>
              <p>Men Fashion</p>
              <p>Women Fashion</p>
              <p>Electronics</p>
              <p>Furnitures</p>
              <p>Shoes</p>
            </Col>

            
            <Col xs={12} sm={6} md={3}>
              <h5 className="fw-bold pb-3 pt-2">Get to Know Us</h5>
              <p>Company</p>
              <p>About Us</p>
              <p>Blog</p>
              <p>Help Center</p>
              <p>Our Values</p>
            </Col>

    
            <Col xs={12} sm={6} md={3}>
              <h5 className="fw-bold pt-2 pb-3">For Consumers</h5>
              <p>Payments</p>
              <p>Shipping</p>
              <p>Product Returns</p>
              <p>FAQ</p>
              <p>Shop Checkout</p>
            </Col>


            <Col xs={12} sm={6} md={3}>
              <h5 className="fw-bold pt-2 pb-3">Become a Shopper</h5>
              <p>Opportunities</p>
              <p>Join as Shopper</p>
              <p>Earnings</p>
              <p>Ideas & Guides</p>
              <p>New Retails</p>
            </Col>
          </Row>
        </Container>

      
        <hr className="my-4" />

    
        <Container>
          <h5 className="fw-bold">Get the App</h5>
          <p>Download our app to shop faster and easier.</p>
          <InputGroup className="mb-3">
            <Form.Control
              className="rounded"
              type="email"
              placeholder="Enter your email"
              required
            />
            <Button variant="secondary" className="mx-3 rounded fs-6 fw-medium">
              Share Link
            </Button>
          </InputGroup>
        </Container>

        <hr className="my-4" />

        <Container className="d-flex justify-content-between py-3">
          <p>2024 Our eCom, All rights reserved</p>
          <div className="d-flex gap-3 text-secondary">
            <span>Follow us</span>
            <FontAwesomeIcon
              icon={faFacebook}
              size="lg"
              className={cursorPointer}
            />
            <FontAwesomeIcon
              icon={faInstagram}
              size="lg"
              className={cursorPointer}
            />
            <FontAwesomeIcon
              icon={faTwitter}
              size="lg"
              className={cursorPointer}
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;

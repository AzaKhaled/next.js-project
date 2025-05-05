import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#343a40', color: '#fff', padding: '40px 0' }}>
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5>About Us</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Company Info</a></li>
              <li><a href="#" className="text-white text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-white text-decoration-none">Blog</a></li>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>Email: hello@example.com</li>
              <li>Phone: +123 456 789</li>
              <li>Location: Cairo, Egypt</li>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h5>Follow Us</h5>
            <div className="d-flex gap-3 fs-4">
              <a href="#" className="text-white">🌐</a>
              <a href="#" className="text-white">📘</a>
              <a href="#" className="text-white">📸</a>
            </div>
          </Col>
        </Row>

        <hr style={{ backgroundColor: '#666' }} />
        <p className="text-center text-muted mt-3 mb-0">
          © {new Date().getFullYear()} farha. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
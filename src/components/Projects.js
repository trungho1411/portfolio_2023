import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';

export const Projects = () => {
  return (
    <section className='project' id='project'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Put projects here</p>
            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
              <Nav variant='pills' defaultActiveKey='/home'>
                <Nav.Item>
                  <Nav.Link eventKey='first'>Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third'>Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane></Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

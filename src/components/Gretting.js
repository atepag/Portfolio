import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Style.css";

export class Greeting extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <div style={{ height: "5vmin" }}></div>
            </Col> 
          </Row>
          <Row className="yoRow">
            <Col >
              <h1 className="yo">
                <strong>
                  HELLO
                  
                  <br />
                  I AM
                  <span role="img" aria-label="hi">
                    &#x1F44B;
                  </span>
                  <br />
                  ARTURO TEPALE AGUILAR
                </strong>
              </h1>
            </Col>
          </Row>
          <Row>
          <div style={{ height: "5vmin" }}></div>
          </Row>
        </Container>
      </div>
    );
  }
}

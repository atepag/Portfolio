import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Style.css";

export class Greeting extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <div style={{ height: "5vmax" }}></div>
          </Row>
          <Row>
            <Col>
              <h1 className="yo">
                <strong>
                  HELLO
                  <span role="img" aria-label="hi">
                    &#x1F44B;
                  </span>
                  <br />
                  I'M
                  <br />
                  ARTURO TEPALE AGUILAR
                </strong>
              </h1>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </div>
    );
  }
}

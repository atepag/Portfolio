import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import "../Style.css";

export class ContactMe extends React.Component {
  render() {
    return (
      <div style={{ width: "100vmax" }}>
        <Container style={{ width: "100%" }}>
          <Row>
            <Col></Col>
            <Col>
              <div className="head">
                <a id="contactme"></a>

                <h1>
                  <i>CONTACT ME</i>
                </h1>
              </div>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col xs={3} md={2}></Col>
            <Col xs={12} md={8}>
              <div className="Email">
                <form
                  name="gform"
                  id="gform"
                  encType="text/plain"
                  action="https://docs.google.com/forms/d/e/1FAIpQLSeKre67SyWyE77E14HS9PY7Pp2C2GKdtJxSwT71YBFkD-LQnw/formResponse?"
                  onSubmit="submitted=true"
                  target="gform"
                  // viewform?usp=pp_url&entry.1580263407=simon&entry.951937055=simones&entry.320361436=simonete}
                >
                  Name:
                  <br />
                  <input
                    className="input"
                    name="entry.1580263407"
                    type="text"
                    id="entry.1580263407"
                    size="40"
                    placeholder="Your name"
                  />
                  <br />
                  Email:
                  <br />
                  <input
                    className="input"
                    type="email"
                    name="entry.951937055"
                    id="entry.951937055 "
                    size="40"
                    placeholder="Your email address"
                  />
                  <br />
                  Message:
                  <br />
                  <textarea
                    className="hint"
                    id="entry.320361436"
                    name="entry.320361436"
                    cols="55"
                    placeholder="Enter message here..."
                  ></textarea>
                  <input
                    type="submit"
                    value="send"
                    className="btn btn-dark"
                    style={{ marginRight: "5vmax" }}
                  />
                  <input type="Reset" value="Reset" className="btn btn-dark" />
                  <br />
                </form>
              </div>
            </Col>
            <Col xs={3} md={8}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

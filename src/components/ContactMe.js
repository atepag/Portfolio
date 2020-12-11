import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import "../Style.css";

export class ContactMe extends React.Component {
  render() {
    return (
      <div style={{ width: "100vmax" }}>
        <Container style={{ width: "100%" }}>
          <Row>
            <Col xs={1} md={3}></Col>
            <Col xs={16} md={6} className="moreDiv">
              <div className="head">
                <h1>
                  <i>CONTACT ME</i>
                </h1>
              </div>
            </Col>
            <Col xs={1} md={3}></Col>
          </Row>
          <Row>
            <Col xs={1} md={2}></Col>
            <Col xs={16} md={8}>
              <div >
                <a id="contactme"></a>
                <form
                  className="Email"
                  name="gform"
                  id="gform"
                  encType="text/plain"
                  action="https://docs.google.com/forms/d/e/1FAIpQLSeKre67SyWyE77E14HS9PY7Pp2C2GKdtJxSwT71YBFkD-LQnw/formResponse?"
                  onSubmit="submitted=true"
                  target="gform"
                  // viewform?usp=pp_url&entry.1580263407=simon&entry.951937055=simones&entry.320361436=simonete}
                >
                  <Container>
                    <Row>
                      <Col xs={2} md={3}>
                        <p>Name</p>
                      </Col>
                      <Col xs={16} md={9}>
                        <input
                          className="input"
                          name="entry.1580263407"
                          type="text"
                          id="entry.1580263407"
                          size="40"
                          placeholder="Your name"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={2} md={3}>
                        <p>Email</p>
                      </Col>
                      <Col xs={16} md={9}>
                        <input
                          className="input"
                          type="email"
                          name="entry.951937055"
                          id="entry.951937055 "
                          size="40"
                          placeholder="Your email address"
                        />
                        </Col>
                    </Row>
                    <Row>
                      <Col xs={2} md={3}>
                        <p>Message</p>
                      </Col>
                      <Col xs={16} md={9}>
                        <textarea
                          className="hint"
                          id="entry.320361436"
                          name="entry.320361436"
                          cols="55"
                          placeholder="Enter message here..."
                        ></textarea>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3} md={4}></Col>
                      <Col xs={3} md={2}>
                        <input
                          type="submit"
                          value="send"
                          className="btn btn-dark"
                          style={{ marginRight: "5vmax" }}
                        />
                      </Col>
                      <Col xs={3} md={2}>
                        <input
                          type="Reset"
                          value="Reset"
                          className="btn btn-dark"
                        />
                      </Col>
                      <Col xs={3} md={4}></Col>
                    </Row>
                  </Container>
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

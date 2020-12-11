import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Style.css";

export class Projects extends React.Component {
  render() {
    return (
      <div style={{ width: "100vmax" }}>
        <Container fluid style={{ width: "100%" }}>
          <Row>
            <Col xs={2} md={3}></Col>
            <Col xs={14} md={6} className="moreDiv">
              <div >
                <h1 className="head">
                  <i>PROJECTS</i>
                </h1>
              </div>
            </Col>
            <Col xs={2} md={3}></Col>
          </Row>
          <Row>
            <div className="projects_div">
              <Container fluid>
                <Row className="projectRow">
                  <Col xs={16} md={10}>
                    <dl>
                      <dt className="project">Projects Network</dt>
                      <dd className="projectDesc">
                        Networking website in which users can seek help from other users 
                        to create/implement a project idea and/or seek an idea/project to 
                        help others with. The goal of this is for anyone to be able to help 
                        others while gaining some experience that could later benefit them into 
                        the work field.
                      </dd>
                    </dl>
                  </Col>
                  <Col xs={2} md={2}>
                    <img
                      className="pj_img"
                      src={require("../pictures/pnlogo.png")}
                      alt="CONTRACTO"
                    />
                  </Col>
                </Row>
                <Row className="projectRow">
                  <Col xs={16} md={10}>
                    <dl>
                      <dt className="project">Takeotech’s Contracto</dt>
                      <dd className="projectDesc">
                        Contract Manager project – worked on database portion of the project
                         in which an ERD and UML was made to initialize the project. Also 
                         helped with the design prototype.
                      </dd>
                    </dl>
                  </Col>
                  <Col xs={2} md={2}>
                    <img
                      className="pj_img"
                      src={require("../pictures/contracto.png")}
                      alt="CONTRACTO"
                    />
                  </Col>
                </Row>
                <Row className="projectRow">
                  <Col xs={16} md={10}>
                    <dl>
                      <dt className="project">Lookout</dt>
                      <dd className="projectDesc">
                        Website for most often received phishing emails created
                        with Angular and Firebase,2nd place winner in Troy
                        Hackathon
                      </dd>
                    </dl>
                  </Col>
                  <Col xs={2} md={2}>
                    {" "}
                    <img
                      className="pj_img"
                      src={require("../pictures/lookout.png")}
                      alt="LOOKOUT"
                    />
                  </Col>
                </Row>
                <Row className="projectRow">
                  <Col xs={16} md={10}>
                    <dl>
                      <dt className="project">COVID19 MAP</dt>
                      <dd className="projectDesc">
                        Used REACT and Google maps to make a world map of the
                        spread number of Covid19 cases, can be foun on{" "}
                        <a href="https://github.com/atepag/WebDev/tree/master/covid_map">
                          <i>GitHub</i>
                        </a>
                      </dd>
                    </dl>
                  </Col>
                  <Col xs={2} md={2}>
                    <img
                      className="pj_img"
                      src={require("../pictures/coronavirus.svg")}
                      alt="COVID19"
                    />
                  </Col>
                </Row>
                <Row className="projectRow">
                  <Col xs={16} md={10}>
                    <dl>
                      <dt className="project">Sliding Puzzle</dt>
                      <dd className="projectDesc">
                        Used JavaScript to learn and create a sliding image
                        puzzle , can be played
                        <a href="http://prism.troy.edu/atepaleaguilar/puzzle/puzzle.html">
                          <i> here</i>
                        </a>
                      </dd>
                    </dl>
                  </Col>
                  <Col xs={2} md={2}>
                    <img
                      className="pj_img"
                      src={require("../pictures/puzzle.png")}
                      alt="puzzle"
                    />
                  </Col>
                </Row>
                <Row className="projectRow">
                  <Col xs={16} md={10}>
                    <dl>
                      <dt className="project">android Studio Budget app</dt>
                      <dd className="projectDesc">
                        Own budgeting app, first version found in{" "}
                        <a href="https://github.com/atepag/Budget_App">
                          <i>GitHub</i>
                        </a>
                      </dd>
                    </dl>
                  </Col>
                  <Col xs={2} md={2}>
                    <img
                      className="pj_img"
                      src={require("../pictures/as.png")}
                      alt="ANDROID STUDIO"
                    />
                  </Col>
                </Row>
                <Row className="projectRow">
                  <Col xs={16} md={10}>
                    <dl>
                      <dt className="project">Unity Mobile Game</dt>
                      <dd className="projectDesc">
                        Own project to learn Game Design using Unity 3D
                      </dd>
                    </dl>
                  </Col>
                  <Col xs={2} md={2}>
                    <img
                      className="pj_img"
                      src={require("../pictures/uni.png")}
                      alt="UNITY"
                    />
                  </Col>
                </Row>

              </Container>
            </div>
          </Row>
          <Row>
            <Col xs={1} md={1}></Col>
            <Col xs={16} md={10}>
            <div className="moreDiv">
              <span className="emoji" role="img" aria-label="lol">
                &#x1F440;&#x1F447;
              </span>
              <br/>
              <p className="more">
                LOOKING FOR MORE? WELL GO RIGHT AHEAD, <br />
                ASSIGN ME SOMETHING TO DO
              </p>
            </div>
            </Col>
            <Col xs={1} md={1}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

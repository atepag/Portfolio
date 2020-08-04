import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Style.css";

export class Projects extends React.Component {
  render() {
    return (
      <div style={{ width: "100vmax" }}>
        <Container style={{ width: "100%" }}>
          <Row>
            <Col></Col>
            <Col>
              <div className="head">
                <h1>
                  <i>PROJECTS</i>
                </h1>
              </div>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <div className="projects_div">
              <Container>
                <Row>
                  <Col xs={14} md={10}>
                    <dl>
                      <dt className="project">Takeotech’s Contracto</dt>
                      <dd className="projectDesc">
                        Contract Manager project – working as a Database
                        Developer
                      </dd>
                    </dl>
                  </Col>
                  <Col xs={4} md={2}>
                    <img
                      className="pj_img"
                      src={require("../pictures/contracto.png")}
                      alt="CONTRACTO"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={14} md={10}>
                    <dl>
                      <dt className="project">Lookout</dt>
                      <dd className="projectDesc">
                        Website for most often received phishing emails created
                        with Angular and Firebase,2nd place winner in Troy
                        Hackathon
                      </dd>
                    </dl>
                  </Col>
                  <Col xs={4} md={2}>
                    {" "}
                    <img
                      className="pj_img"
                      src={require("../pictures/lookout.png")}
                      alt="LOOKOUT"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={14} md={10}>
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
                  <Col xs={4} md={2}>
                    <img
                      src={require("../pictures/coronavirus.svg")}
                      width="150"
                      height="70"
                      alt="COVID19"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={14} md={10}>
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
                  <Col xs={4} md={2}>
                    <img
                      src={require("../pictures/puzzle.png")}
                      width="70"
                      height="70"
                      alt="puzzle"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={14} md={10}>
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
                  <Col xs={4} md={2}>
                    <img
                      src={require("../pictures/as.png")}
                      width="100"
                      height="100"
                      alt="ANDROID STUDIO"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={14} md={10}>
                    <dl>
                      <dt className="project">Unity Mobile Game</dt>
                      <dd className="projectDesc">
                        Own project to learn Game Design using Unity 3D
                      </dd>
                    </dl>
                  </Col>
                  <Col xs={4} md={2}>
                    <img
                      src={require("../pictures/uni.png")}
                      width="150"
                      height="70"
                      alt="UNITY"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col></Col>
                  <Col></Col>
                </Row>
              </Container>
            </div>
          </Row>
          <Row>
            <div>
              <span className="emoji" role="img" aria-label="lol">
                &#x1F440;&#x1F447;
              </span>
              <p className="more">
                LOOKING FOR MORE? WELL GO RIGHT AHEAD, <br />
                ASSIGN ME SOMETHING TO DO
              </p>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

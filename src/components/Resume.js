import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Style.css";
import ScrollSnap from "scroll-snap";

function callback() {
  console.log("snapped");
}
export class Resume extends React.Component {
  container = React.createRef();

  bindScrollSnap() {
    const element = this.container.current;
    const snapElement = new ScrollSnap(element, {
      snapDestinationY: "90%",
    });

    snapElement.bind(callback);
  }

  componentDidMount() {
    this.bindScrollSnap();
  }
  render() {
    return (
      <div style={{ height: "100vh", width: "100vw" }}>
        <div id="container" ref={this.container}>
          <Container>
            <Row>
              <Col></Col>
              <Col>
                <div className="head" Style={{ height: "50vmax" }}>
                  <h1>
                    <i>ABOUT</i>
                  </h1>
                </div>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col>
                <div className="resumedivs">
                  <h5 style={{ textAlign: "center" }} className="resumetitle">
                    EDUCATION
                  </h5>
                  <dl style={{ marginLeft: "2.5vmax" }}>
                    <dt style={{ display: "list-item" }} className="resumedesc">
                      Computer Science Bachelors
                      <br />
                      Game Design & Development Minor
                      <br />
                      3.89 GPA
                    </dt>
                    <dd>
                      Troy University
                      <br />
                      Junior currently enrolled in a CS program <br />
                      2017 – Expected Graduation: May 2021
                    </dd>
                    <dt style={{ display: "list-item" }} className="resumedesc">
                      High School Diploma - 4.1 GPA
                    </dt>
                    <dd>
                      {" "}
                      2017 - Took three CS classes in which began learning
                      Python and Java
                    </dd>
                  </dl>
                </div>
              </Col>
              <Col>
                <div className="resumedivs">
                  <h5 style={{ textAlign: "center" }} className="resumetitle">
                    TECHNICALL SKILLS
                  </h5>
                  <ul className="resumedesc">
                    <li>Java</li>
                    <li>Python</li>
                    <li>REACT</li>
                    <li>SQL</li>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>C++</li>
                    <li>C#</li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="resumedivs">
                  <h5 style={{ textAlign: "center" }} className="resumetitle">
                    WORK EXPERIENCE
                  </h5>
                  <dl style={{ marginLeft: "2.5vmax" }}>
                    <dt style={{ display: "list-item" }} className="resumedesc">
                      Database Developer Intern
                      <br /> Dec 2019 – March 2020
                    </dt>
                    <dd>
                      Worked on Takeotech’s Contracto project helping to set up
                      requirements, ERD, UML, DB, prototype.
                    </dd>
                    <dt style={{ display: "list-item" }} className="resumedesc">
                      Food Service Worker
                      <br /> Nov 2017 – Nov 2018
                    </dt>
                    <dd>
                      Worked for Sodexo preparing and serving food to students
                      while maintain clean and safe food and environment.
                    </dd>
                  </dl>
                </div>
              </Col>
              <Col>
                <div className="resumedivs" style={{ height: "30vmax" }}>
                  <h5 style={{ textAlign: "center" }} className="resumetitle">
                    AWARDS
                  </h5>
                  <ul className="resumedesc">
                    <li>
                      Best Hack 2nd Place – 2020
                      <br />
                      -Troy Hackathon
                    </li>
                    <li>
                      Alpha Lambda Delta - 2018
                      <br />
                      -Higher Education Honor Society
                    </li>
                    <li>
                      Mu Alpha Theta - 2017
                      <br />
                      -HS Mathematics honor society
                    </li>
                    <li>
                      Delta Phi Alpha – 2015
                      <br />
                      -German National Honor Society
                    </li>
                    <li>
                      National Honor Society - 2015
                      <br />
                      -HS Honor Society
                    </li>
                    <li>MOS PowerPoint 2010 Certified</li>
                    <li>MOS Word 2010 Certified</li>
                    <li>MOS Excel 2010 Certified</li>
                    <li>MOS Excel Expert Certified</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

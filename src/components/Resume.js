import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Style.css";
import ScrollSnap from "scroll-snap";
import { isMobile } from "react-device-detect";

function callback() {
  console.log("snapped");
}
const pt1 = (
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
);

const pt2 = (
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
);

const pt3 = (
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
);

const pt4 = (
  <div className="resumedivs" >
    <h5 style={{ textAlign: "center" }} className="resumetitle">
      AWARDS
    </h5>
    <ul className="resumedesc">
      <li>
        Best Hack 2nd Place – 2020
        -Troy Hackathon
      </li>
      <li>
        Alpha Lambda Delta - 2018
        -Higher Education Honor Society
      </li>
      <li>
        Mu Alpha Theta - 2017
        -HS Mathematics honor society
      </li>
      <li>
        Delta Phi Alpha – 2015
        -German National Honor Society
      </li>
      <li>
        National Honor Society - 2015
        -HS Honor Society
      </li>
      <li>MOS PowerPoint 2010 Certified</li>
      <li>MOS Word 2010 Certified</li>
      <li>MOS Excel 2010 Certified</li>
      <li>MOS Excel Expert Certified</li>
    </ul>
  </div>
);
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
    if(isMobile){
      return (
        <div style={{ height: "100vh", width: "100vw" }}>
          <div id="container" ref={this.container}>
            <Container>
              <Row>
              <Col xs={2} md={3}></Col>
              <Col xs={14} md={6} className="moreDiv">
                  <div className="head">
                    <h1>
                      <i>ABOUT</i>
                    </h1>
                  </div>
                </Col>
                <Col xs={2} md={3}></Col>
              </Row>
              <Row>
                {pt1} 
              </Row>
              <Row>
                {pt3}
              </Row>
              <Row>
                {pt2}
              </Row>
              <Row>
                {pt4}
              </Row>
            </Container>
          </div>
        </div>
      );
    }else{
        return (
        <div style={{ height: "100vh", width: "100vw" }}>
          <div id="container" ref={this.container}>
            <Container>
              <Row>
              <Col xs={2} md={3}></Col>
              <Col xs={14} md={6} className="moreDiv">
                  <div className="head">
                    <h1>
                      <i>ABOUT</i>
                    </h1>
                  </div>
                </Col>
                <Col xs={2} md={3}></Col>
              </Row>
              <Row>
                <Col>
                  {pt1}
                </Col>
                <Col>
                  {pt3}
                </Col>
              </Row>
              <Row>
                <Col>
                  {pt2}
                </Col>
                <Col>
                  {pt4}
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      );
    }
    
  }
}

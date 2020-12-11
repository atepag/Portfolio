import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Greeting } from "./Gretting.js";
import "../Style.css";
import {
  isMobile
} from "react-device-detect";
class Me extends React.Component{
    render(){
      return(<div className="Contact">
      <img
        className="Me"
        src={require("../pictures/me.jpg")}
        
        alt="ME!"
        title="ME!"
      />
      <p className="bio">
        {" "}
        Originally From Mexico 🇲🇽 a student at Troy University
        enrolled in a Computer Science Bachelor's program. Currently a
        senior, exploring new ways to learn and improve while at the
        same time accomplishing something.
        <br />
        LEARN MORE ABOUT ME &#x1F449;
      </p>
      <Container style={{marginTop: "3vmin"}} >
        
        <Row>
          
            <Col>
              <a
                className="Links"
                href="https://www.facebook.com/art3506"
              >
                <img
                  src={require("../pictures/fblogo.png")}
                  width="40px"
                  height="40px"
                  alt="FB"
                  title="Facebook"
                />
              </a>
            </Col>
            <Col>
              <a className="Links" href="https://github.com/atepag">
                <img
                  src={require("../pictures/git.png")}
                  width="40px"
                  height="40px"
                  alt="GH"
                  title="GitHub"
                />
              </a>
            </Col>
            <Col>
              <a
                className="Links"
                href="https://www.linkedin.com/in/arturotepaleaguilar/"
              >
                <img
                  src={require("../pictures/linlogo.png")}
                  width="40px"
                  height="40px"
                  alt="LI"
                  title="Facebook"
                />
              </a>
            </Col>
            <Col>
              <a
                className="Links"
                href="https://www.instagram.com/a3506/"
              >
                <img
                  src={require("../pictures/insta.png")}
                  width="40px"
                  height="40px"
                  alt="INSTA"
                  title="Instagram"
                />
              </a>
            </Col>
            <Col>
              <a className="Links" href="#contactme">
                <img
                  src={require("../pictures/elogo.png")}
                  width="40px"
                  height="40px"
                  alt="EMAIL"
                  title="Facebook"
                />
              </a>
            </Col>
          
        </Row>
      </Container>
    </div>);
    }
}
export class About extends React.Component {
  
  render() {
    if(isMobile){
      return (
        <div style={{ width: "100vmin" }}>
          <Container style={{ width: "100vmin" }}>
            <Row ></Row>
            <Row>
              <Col>
                <Greeting />
              </Col>
            </Row>
            <Row>
              <Col md={12} xs={18}>
                <Me/>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }else{
      return (
        <div style={{ width: "100vw" }}>
          <Container fluid style={{ width: "100vmax" }}>
            <Row></Row>
            <Row>
              <Col xs={8} md={5}>
                <Greeting />
              </Col>
              <Col xs={10} md={7}>
                <Me/>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
    
  }
}

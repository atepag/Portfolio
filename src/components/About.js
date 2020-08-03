import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Greeting } from "./Gretting.js";
import "../Style.css";

export class About extends React.Component {
  render() {
    return (
      <div style={{ width: "100vmax" }}>
        <Container style={{ width: "100vmax" }}>
          <Row></Row>
          <Row>
            <Col>
              <Greeting />
            </Col>

            <Col>
              <div className="Contact">
                <img
                  className="Me"
                  src={require("../pictures/me.jpg")}
                  width={300}
                  height={300}
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
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <a
                          className="Links"
                          href="https://www.facebook.com/art3506"
                        >
                          <img
                            src={require("../pictures/fblogo.png")}
                            width="40"
                            height="40"
                            alt="FB"
                            title="Facebook"
                          />
                        </a>
                      </td>
                      <td>
                        <a className="Links" href="https://github.com/atepag">
                          <img
                            src={require("../pictures/git.png")}
                            width="40"
                            height="40"
                            alt="GH"
                            title="GitHub"
                          />
                        </a>
                      </td>
                      <td>
                        <a
                          className="Links"
                          href="https://www.linkedin.com/in/arturotepaleaguilar/"
                        >
                          <img
                            src={require("../pictures/linlogo.png")}
                            width="40"
                            height="40"
                            alt="LI"
                            title="Facebook"
                          />
                        </a>
                      </td>
                      <td>
                        <a
                          className="Links"
                          href="https://www.instagram.com/a3506/"
                        >
                          <img
                            src={require("../pictures/insta.png")}
                            width="40"
                            height="40"
                            alt="INSTA"
                            title="Instagram"
                          />
                        </a>
                      </td>
                      <td>
                        <a className="Links" href="#contactme">
                          <img
                            src={require("../pictures/elogo.png")}
                            width="40"
                            height="40"
                            alt="EMAIL"
                            title="Facebook"
                          />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

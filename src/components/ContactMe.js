import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import "../Style.css";
import axios from "axios";

export class ContactMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }
  handleSubmit(e) {
    e.preventDefault();

    const email = { data: this.state };
    axios
      .post(
        "https://raw.githubusercontent.com/atepag/Portfolio/master/src/index.php",
        { email }
      )
      .then((response) => {
        if (response.data.status === "success") {
          alert("Message Sent.");
          this.resetForm();
        } else if (response.data.status === "fail") {
          alert("Message failed to send.");
        }
      });
  }
  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

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
                  onSubmit={this.handleSubmit.bind(this)}
                  method="POST"
                  className="form"
                >
                  Name:
                  <br />
                  <input
                    className="input"
                    type="text"
                    id="name"
                    size="40"
                    placeholder="Your name"
                    value={this.state.name}
                    onChange={this.onNameChange.bind(this)}
                  />
                  <br />
                  Email:
                  <br />
                  <input
                    className="input"
                    type="email"
                    id="email "
                    size="40"
                    placeholder="Your email address"
                    value={this.state.email}
                    onChange={this.onEmailChange.bind(this)}
                  />
                  <br />
                  Message:
                  <br />
                  <textarea
                    className="hint"
                    id="message"
                    cols="55"
                    placeholder="Enter message here..."
                    value={this.state.message}
                    onChange={this.onMessageChange.bind(this)}
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
  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}

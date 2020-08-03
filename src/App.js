import React from "react";
import {} from "react-bootstrap";
import { About } from "./components/About.js";

import { Projects } from "./components/Projects.js";
import "./Style.css";
import ScrollSnap from "scroll-snap";
import { Resume } from "./components/Resume.js";
import { ContactMe } from "./components/ContactMe.js";

const Content = {
  display: "flex",
  flexDirection: "row",
  overflowX: "scroll",
  overflowY: "hidden",
  margin: "0",
  scrollSnapType: "x mandatory",
  section: {
    width: "100%",
    scrollSnapAlign: "start",
  },
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
function callback() {
  scrollToTop();
  console.log("snapped");
}

export default class App extends React.Component {
  container = React.createRef();

  bindScrollSnap() {
    const element = this.container.current;
    const snapElement = new ScrollSnap(element, {
      snapDestinationX: "10%",
      snapDestinationY: "100%",
    });

    snapElement.bind(callback);
  }

  componentDidMount() {
    this.bindScrollSnap();
  }

  render() {
    return (
      <div
        style={Content}
        className="scroll"
        id="container"
        ref={this.container}
      >
        <section>
          <About />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Resume />
        </section>
        <section>
          <ContactMe />
        </section>
      </div>
    );
  }
}

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import "./Home.css";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I'm an undergraduate student specializing in
              <b className="purple"> Artificial Intelligence & Data Science</b>,
              with a strong interest in creating clean, responsive, and
              user-friendly web interfaces as a
              <b className="purple"> Web Designer and Full Stack Developer</b>.
              <br />
              <br />
              I primarily work with
              <i>
                <b className="purple">
                  {" "}
                  HTML, CSS, and JavaScript
                </b>
              </i>
              , focusing on building visually appealing and accessible frontend
              experiences.
              <br />
              <br />
              Alongside frontend development, I also work with
              <i>
                <b className="purple">
                  {" "}
                  React.js, Python, C, C++, and Java
                </b>
              </i>
              , allowing me to understand both design and logic behind complete
              applications.
              <br />
              <br />
              My areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Responsive Web Applications, Interactive UI Designs
                </b>
              </i>
              , and integrating intelligent features into web platforms.
              <br />
              <br />
              Whenever possible, I enjoy turning ideas into polished products
              using
              <b className="purple"> HTML & CSS </b>
              , and enhancing them further with
              <i>
                <b className="purple"> React.js </b> and backend frameworks like{" "}
                <b className="purple">Flask</b>.
              </i>
              <br />
              <br />
              I am also developing strong skills in
              <i>
                <b className="purple">
                  {" "}
                  Data Analytics, Excel, Power BI, Data Visualization, and Dashboard Design
                </b>
              </i>
              , where I enjoy transforming raw data into meaningful insights.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
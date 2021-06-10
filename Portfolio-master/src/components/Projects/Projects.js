import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import p2 from "../../Assets/Projects/p2.jpg";
import p5 from "../../Assets/Projects/p5.png";
import p3 from "../../Assets/Projects/p3.jpg";
import p1 from "../../Assets/Projects/p1.jpeg";
import p4 from "../../Assets/Projects/p4.png";
import p6 from "../../Assets/Projects/swiggy.jpg";
import p7 from "../../Assets/Projects/netflix.png";


import oracle from "../../Assets/Projects/oracle.jpg";
import datascience from "../../Assets/Projects/data.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p1}
              isBlog={false}
              title="Text Recognition using CNN"
              description="AI project named Extraction of handwritten text
              from image which uses Convolution Neural Network: A
              deep learning algorithm to detect and segment
              handwritten text from an image."
             
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p6}
              isBlog={false}
              title="Swiggy Chat-Bot"
              description="Created Swiggy chat-bot using Natural Language Processing and Neural Netwoks. It is very helpful in conducting an on-line chat conversation via text instead of providing direct contact with a live human agent. Designed to convincingly simulate the way a human would behave as a conversational partner."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p2}
              isBlog={false}
              title="Facial Recognition System"
              description="Capable of matching a human face from a digital image or a
              video frame against a database of faces, works by
              pinpointing and measuring facial features from a given
              image.
              The system we constructed involves few steps: Input ->
              Feature Extraction -> Classification -> Output."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p3}
              isBlog={false}
              title="COVID19 Data Analysis Using Python"
              description="Here I have taken COVID19 dataset into consideration, which consists of the data related to the cumulative number of confirmed cases, per day, in each Country."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p7}
              isBlog={false}
              title="Netflix Recommendation System"
              description="I have created The Netflix Recommendation System using NLP including Vectorization, Tokenization and Lemmatization. The algorithm developed is content based system and takes few seconds to identify customer interest."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p5}
              isBlog={false}
              title="A Restaurant Website using React "
              description="An online fantasy restaurant built using ReactJS which provides wide range of menu, customer reviews and feedbacks.It also includes Responsive chat-bot which is created to fetch customer details to Admin."
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={oracle}
              link="https://www.geeksforgeeks.org/oracle-exadata-cloud-service/"
              title="Oracle Exadata Service"
              site="GeeksforGeeks"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={datascience}
              link="https://www.instagram.com/p/CIUlSoFlr1L/?utm_source=ig_web_copy_link"
              title="Data Science"
              site="Instagram"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

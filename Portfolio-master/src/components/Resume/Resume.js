import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
       
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Technical Intern - Tata Consultancy Services"
              date="June 2020 - August 2020"
              content={[
                "I worked on AI project named Extraction of handwritten text from image which uses Convolution Neural Network:A deep learning algorithm to detect and segment handwritten text from an image.",
                " Generated an algorithm to detect and segment handwritten text from an image & Detailed presentation with proof of detecting exact text embedded in the image.",
              ]}
            />
            <Resumecontent
              title="Data Analyst Intern and Mentorship - The Sparks Foundation Company"
              date="July 2020 - October 2020"
              content={[
                "To inspire everyone, help them innovate and let them integrate to build the next generation humankind and dealing with real life problems and making it easier with the core concepts of machine learning and data science.",
                " Solving technical issues, organizing meeting with colleagues to tackle the difficult problems on a daily basis throughout the tenure.",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>

            <Resumecontent
              title="Campus Ambassador at Abhyuday IIT Bombay "
              content={[
                "Active and major role in tech, social events conducted by IIT Bombay and part of wide distribution knowledge campaign with the aim of reaching large number of people possible to create an impact for the betterment of the society.",
              ]}
            />

            <Resumecontent
              title="DevHack 2020 hackathon"
              content={[
                "Got 1st place in dev hack conducted by DSC KIIT ( Kalinga Institute of Industrial Technology )",
              ]}
            />
             <Resumecontent
              title="Remote Intern - KPMG International Limited "
              content={[
                "Part of Data Analytics Consulting Virtual Internship Programme by KPMG.",
              ]}
            />

    
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="N.M.A.M Institute of Technology "
              date="2018 - Present"
              content={[
                "Bachelor of Engineering in Information Science and Engineering with CGPA: 9.09" 
              ]}
            />
            <Resumecontent
              title="12TH [ Paramount Academy ]"
              date="2016 - 2018"
              content={[" C.B.S.E BOARD  "]}
            />
            <Resumecontent
              title="10TH [ Kendriya Vidyalaya ] "
              date="2015 - 2016"
              content={[" C.B.S.E BOARD  "]}
            />
            <h3 className="resume-title">ACHIEVEMENTS and CERTIFICATIONS</h3>
            <Resumecontent
              title=""
              content={[
                "Winner of The CODE studio event by securing 1st position - INCRIDEA ( NMAM Institute of Technology ).",
                "Oracle Cloud Infrastructure Foundations 2020 Certified Associate.",
                "Microsoft Certified: Azure Administrator Associate.",
                "Oracle Autonomous Database Cloud 2019 Certified Specialist.",
                "CERTIFICATE OF EXCELLENCE for participating in PYTHON quiz with passing score of 95%.",
                
              ]}
            />
          </Col>
        </Row>
       
      </Container>
    </Container>
  );
}

export default Resume;

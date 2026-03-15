import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "./Projects.css";

// IMPORT LOCAL IMAGES FROM ASSETS
import usvoteImg from "../../Assets/usvote.png"; // Import the image from assets

/* ---------- AI / DEV PROJECT IMAGES ---------- */
const plantAIImg =
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80";
const summarizerImg =
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80";
const translationImg =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80";
const trafficImg =
  "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80";
const noteManagerImg =
  "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=600&q=80";
const gameImg =
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80";

/* ---------- DASHBOARD IMAGES ---------- */
const spotifyImg =
  "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?auto=format&fit=crop&w=600&q=80";
const amazonImg =
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>
        <p style={{ 
          color: "#c0c0c0", 
          textAlign: "center", 
          marginBottom: "50px",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
          fontSize: "1.2rem",
          lineHeight: "1.8"
        }}>
          AI, Web Development & Data Analytics Projects
        </p>

        <Row style={{ 
          justifyContent: "center", 
          paddingBottom: "10px",
          marginLeft: "-20px",
          marginRight: "-20px"
        }}>

          {/* 🌿 PLANT AI */}
          <Col md={4} className="project-card" style={{ padding: "20px" }}>
            <ProjectCard
              imgPath={plantAIImg}
              title="Plantai"
              description="AI-powered plant disease detection system using deep learning and leaf image classification."
              ghLink="https://github.com/ojaswimakode07/Plantai"
              demoLink="https://plantai-info.vercel.app"
            />
          </Col>

          {/* Advanced Summarizer */}
          <Col md={4} className="project-card" style={{ padding: "20px" }}>
            <ProjectCard
              imgPath={summarizerImg}
              title="Advanced Summarizer"
              description="AI text summarization tool using Google Gemini AI."
              ghLink="https://github.com/ojaswimakode07/Advanced-Summarizer"
            />
          </Col>

          {/* Vox Translation */}
          <Col md={4} className="project-card" style={{ padding: "20px" }}>
            <ProjectCard
              imgPath={translationImg}
              title="Vox Translation Pro"
              description="Multi-language AI translation app with text-to-speech."
              ghLink="https://github.com/ojaswimakode07/Vox-Translation-Pro"
            />
          </Col>

          {/* TrafiQ */}
          <Col md={4} className="project-card" style={{ padding: "20px" }}>
            <ProjectCard
              imgPath={trafficImg}
              title="TrafiQ"
              description="Modern traffic management web app with real-time visualization."
              ghLink="https://github.com/ojaswimakode07/TrafiQ"
            />
          </Col>

          {/* Note Manager */}
          <Col md={4} className="project-card" style={{ padding: "20px" }}>
            <ProjectCard
              imgPath={noteManagerImg}
              title="Note Manager"
              description="Note management app with CRUD, categories & search."
              ghLink="https://github.com/ojaswimakode07/note-manager"
            />
          </Col>

          {/* Game */}
          <Col md={4} className="project-card" style={{ padding: "20px" }}>
            <ProjectCard
              imgPath={gameImg}
              title="Game Project"
              description="Python-based interactive game demonstrating game logic."
              ghLink="https://github.com/ojaswimakode07/Game"
            />
          </Col>

          {/* Spotify Dashboard */}
          <Col md={4} className="project-card" style={{ padding: "20px" }}>
            <ProjectCard
              imgPath={spotifyImg}
              title="Spotify Analytics Dashboard"
              description="Excel dashboard analyzing Spotify music trends and KPIs."
              ghLink="https://github.com/Ojaswimakode07/Spotify_Dashboard"
            />
          </Col>

          {/* Amazon Prime Dashboard */}
          <Col md={4} className="project-card" style={{ padding: "20px" }}>
            <ProjectCard
              imgPath={amazonImg}
              title="Amazon Prime Video Dashboard"
              description="Dashboard visualizing Amazon Prime movies & series data."
              ghLink="https://github.com/Ojaswimakode07/Amazon_Prime_video"
            />
          </Col>

          {/* US Voter Dashboard - USING LOCAL IMAGE */}
          <Col md={4} className="project-card" style={{ padding: "20px" }}>
            <ProjectCard
              imgPath={usvoteImg}  // Using the imported image from assets
              title="US Voter 2012 Dashboard"
              description="Excel dashboard analyzing US voter demographics and patterns."
              ghLink="https://github.com/Ojaswimakode07/US_Voter_dashboard/tree/main"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
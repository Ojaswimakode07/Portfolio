import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineMail } from "react-icons/ai";
import "./Resume.css"; // You may need to create this file

function ResumeNew() {
  const gmailLink =
    "https://mail.google.com/mail/?view=cm&fs=1" +
    "&to=ojaswimakode7@gmail.com" +
    "&su=Request%20for%20Resume%20Access" +
    "&body=Hello%20Ojaswi,%0D%0A%0D%0A" +
    "I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20request%20access%20to%20your%20resume.%0D%0A%0D%0A" +
    "Name:%0D%0A" +
    "Organization%20/%20College:%0D%0A" +
    "Purpose%20(Internship%20/%20Placement%20/%20Collaboration):%0D%0A%0D%0A" +
    "Thank%20you.";

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Container fluid className="resume-section" style={{ flex: 1, position: "relative" }}>
        <Particle />
        
        {/* Make particles non-interactive */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none"
        }}>
          <Particle />
        </div>

        <Row
          className="d-flex flex-column align-items-center text-center"
          style={{ 
            marginTop: "120px",
            position: "relative",
            zIndex: 2
          }}
        >
          <h2 style={{ 
            marginBottom: "20px", 
            color: "#ffffff",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
            fontWeight: "500",
            fontSize: "2.5rem",
            letterSpacing: "-0.02em"
          }}>
            Resume Access
          </h2>

          {/* Shortened message with white text */}
          <p style={{ 
            maxWidth: "500px", 
            marginBottom: "30px",
            color: "#c0c0c0",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
            fontSize: "1.2rem",
            lineHeight: "1.8",
            fontWeight: "400"
          }}>
            My resume is shared on request.
            Click below to send a request email.
          </p>

          <Button
            variant="primary"
            style={{ 
              maxWidth: "300px",
              padding: "12px 30px",
              fontSize: "1.1rem",
              fontWeight: "600",
              background: "transparent",
              color: "#ffffff",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "4px",
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              transition: "all 0.2s ease",
              cursor: "pointer"
            }}
            onClick={() => window.open(gmailLink, "_blank")}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "#9d4edd";
              e.target.style.background = "rgba(157, 78, 221, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
              e.target.style.background = "transparent";
            }}
          >
            <AiOutlineMail style={{ color: "#9d4edd" }} /> &nbsp;Request Resume Access
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import "./ProjectCards.css";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img 
        variant="top" 
        src={props.imgPath} 
        alt="card-img" 
        style={{ 
          height: "200px", 
          objectFit: "cover",
          padding: "15px",
          borderRadius: "15px"
        }}
      />
      <Card.Body style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
        <Card.Title style={{ 
          color: "#ffffff",
          marginBottom: "15px", 
          fontSize: "1.4rem",
          fontWeight: "500",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
          letterSpacing: "-0.02em"
        }}>
          {props.title}
        </Card.Title>
        <Card.Text style={{ 
          textAlign: "justify", 
          color: "#c0c0c0",
          flex: "1",
          marginBottom: "20px",
          fontSize: "1rem",
          lineHeight: "1.7",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
          fontWeight: "400"
        }}>
          {props.description}
        </Card.Text>
        <div style={{ 
          marginTop: "auto", 
          display: "flex", 
          flexWrap: "wrap", 
          gap: "15px",  // Increased gap between buttons
          justifyContent: "flex-start"
        }}>
          <Button 
            variant="primary" 
            href={props.ghLink} 
            target="_blank"
            style={{ 
              background: "transparent",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "4px",
              color: "#ffffff",
              fontWeight: "500",
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
              transition: "all 0.2s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "0.6rem 1.2rem",
              minWidth: "110px",
              justifyContent: "center"
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "#9d4edd";
              e.target.style.background = "rgba(157, 78, 221, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
              e.target.style.background = "transparent";
            }}
          >
            <BsGithub style={{ color: "#9d4edd" }} /> GitHub
          </Button>
          
          {!props.isBlog && props.demoLink && props.demoLink !== "#" && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ 
                background: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "4px",
                color: "#ffffff",
                fontWeight: "500",
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
                transition: "all 0.2s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "0.6rem 1.2rem",
                minWidth: "110px",
                justifyContent: "center"
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = "#9d4edd";
                e.target.style.background = "rgba(157, 78, 221, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
                e.target.style.background = "transparent";
              }}
            >
              <CgWebsite style={{ color: "#9d4edd" }} /> Live Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
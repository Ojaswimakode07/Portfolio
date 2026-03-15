import React from "react";
import { Container } from "react-bootstrap";
import Particle from "./Particle";
import { ImBlog } from "react-icons/im";

function Blog() {
  return (
    <>
      <Particle />
      <Container fluid style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
        padding: "20px"
      }}>
        <div style={{
          textAlign: "center",
          maxWidth: "600px",
          padding: "50px 30px",
          background: "rgba(157, 78, 221, 0.05)",
          border: "1px solid rgba(157, 78, 221, 0.1)",
          borderRadius: "20px",
          backdropFilter: "blur(10px)"
        }}>
          <ImBlog style={{
            fontSize: "4rem",
            color: "#9d4edd",
            marginBottom: "20px"
          }} />
          
          <h1 style={{
            fontSize: "2.8rem",
            fontWeight: "500",
            color: "#ffffff",
            marginBottom: "15px",
            letterSpacing: "-0.02em"
          }}>
            Blogs <span style={{ color: "#9d4edd" }}>Coming Soon</span>
          </h1>
          
          <p style={{
            fontSize: "1.2rem",
            color: "#c0c0c0",
            lineHeight: "1.8",
            marginBottom: "25px"
          }}>
            I'm working on writing meaningful blogs about my learning journey.
          </p>
          
          <div style={{
            width: "100px",
            height: "2px",
            background: "#9d4edd",
            margin: "20px auto",
            opacity: 0.5
          }}></div>
          
          <p style={{
            fontSize: "1rem",
            color: "#888"
          }}>
            Expected: April 2026
          </p>
        </div>
      </Container>
    </>
  );
}

export default Blog;
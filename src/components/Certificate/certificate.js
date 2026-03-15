
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { FaCertificate } from "react-icons/fa";
import "./certificate.css";

// Import certificate images from Assets folder
import cert1 from "../../Assets/cert1.png";
import cert2 from "../../Assets/cert2.png";
import cert3 from "../../Assets/cert3.png";

function Certificate() {
  const [hoveredCert, setHoveredCert] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "NPTEL – Python Programming",
      issuer: "NPTEL",
      year: "2024",
      score: "71%"
    },
    {
      id: 2,
      title: "NCET 2025",
      issuer: "NCET",
      year: "2025",
      score: "Qualified"
    },
    {
      id: 3,
      title: "Artificial Intelligence & Data Analytics",
      issuer: "Simplilearn",
      year: "2024"
    },
    {
      id: 4,
      title: "AI & Cybersecurity",
      issuer: "HP LIFE",
      year: "2024"
    },
    {
      id: 5,
      title: "Technology & Solutions Architecture Virtual Experience",
      issuer: "Deloitte (Forage)",
      year: "2024"
    },
    {
      id: 6,
      title: "Static Website Development",
      issuer: "NextWave",
      year: "2024"
    }
  ];

  return (
    <>
      <Particle />
      
      <Container fluid className="certificate-section">
        <Container>
          {/* Header */}
          <h1 className="certificate-heading">
            My <span className="purple">Certifications</span>
          </h1>
          <p className="certificate-subheading">
            Professional certifications from recognized institutions
          </p>

          {/* All Certifications List - SHOW FIRST */}
          <Row className="certificates-list">
            {certificates.map((cert) => (
              <Col lg={6} key={cert.id} className="cert-item-col">
                <div className="cert-item">
                  <FaCertificate className="cert-item-icon" />
                  <div className="cert-item-content">
                    <h4 className="cert-item-title">{cert.title}</h4>
                    <p className="cert-item-meta">
                      {cert.issuer} • {cert.year}
                      {cert.score && <span className="cert-score"> • {cert.score}</span>}
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          {/* Certificate Previews - SHOW AFTER LIST */}
          <h3 className="preview-title">Certificate Previews</h3>
          <Row className="preview-row">
            <Col md={4} sm={4} className="preview-col">
              <div 
                className="preview-card"
                onMouseEnter={() => setHoveredCert(1)}
                onMouseLeave={() => setHoveredCert(null)}
              >
                <img 
                  src={cert1} 
                  alt="Certificate 1" 
                  className={`preview-image ${hoveredCert === 1 ? 'hovered' : ''}`} 
                />
                {hoveredCert === 1 ? (
                  <div className="full-certificate-overlay">
                    <img src={cert1} alt="Certificate 1 Full" className="full-certificate-image" />
                  </div>
                ) : (
                  <p className="preview-label">Python Programming</p>
                )}
              </div>
            </Col>
            <Col md={4} sm={4} className="preview-col">
              <div 
                className="preview-card"
                onMouseEnter={() => setHoveredCert(2)}
                onMouseLeave={() => setHoveredCert(null)}
              >
                <img 
                  src={cert2} 
                  alt="Certificate 2" 
                  className={`preview-image ${hoveredCert === 2 ? 'hovered' : ''}`} 
                />
                {hoveredCert === 2 ? (
                  <div className="full-certificate-overlay">
                    <img src={cert2} alt="Certificate 2 Full" className="full-certificate-image" />
                  </div>
                ) : (
                  <p className="preview-label">NCET 2025</p>
                )}
              </div>
            </Col>
            <Col md={4} sm={4} className="preview-col">
              <div 
                className="preview-card"
                onMouseEnter={() => setHoveredCert(3)}
                onMouseLeave={() => setHoveredCert(null)}
              >
                <img 
                  src={cert3} 
                  alt="Certificate 3" 
                  className={`preview-image ${hoveredCert === 3 ? 'hovered' : ''}`} 
                />
                {hoveredCert === 3 ? (
                  <div className="full-certificate-overlay">
                    <img src={cert3} alt="Certificate 3 Full" className="full-certificate-image" />
                  </div>
                ) : (
                  <p className="preview-label">AI & Data Analytics</p>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Certificate;

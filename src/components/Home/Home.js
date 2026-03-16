import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Particle from "../Particle";
import ScrollAnimation from "./ScrollAnimation";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { 
  FaLinkedinIn, 
  FaArrowRight, 
  FaPlus,
  FaCertificate,
  FaLeaf,
  FaCar,
  FaStickyNote,
  FaCode,
  FaExternalLinkAlt,
  FaHtml5,
  FaReact,
  FaPython,
  FaJs,
  FaCss3Alt
} from "react-icons/fa";
import { 
  SiFlask, 
  SiMysql, 
  SiCplusplus, 
  SiC,
  SiSqlite,
  SiGithub
} from "react-icons/si";
import { MdEmail} from "react-icons/md";

import profileImg from "../../Assets/profile.png";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);
 // const [activeSection, setActiveSection] = useState('home');

  // Education data
  const education = [
    {
      degree: "B.Tech in Artificial Intelligence & Data Science",
      institution: "P.R. Pote College of Engineering and Management, Amravati",
      duration: "2023 – Present",
      cgpa: "CGPA: 9.22/10"
    },
    {
      degree: "Higher Secondary (XII)",
      institution: "Saint Paul Junior College, Akot",
      duration: "Completed: 2023",
      cgpa: "Percentage: 70.33%"
    },
    {
      degree: "Secondary (X)",
      institution: "Saint Paul English Medium School, Akot",
      duration: "Completed: 2021",
      cgpa: "Percentage: 92.20%"
    }
  ];

  // Skills data
  const skills = [
    { name: "Python", icon: <FaPython />, level: "Advanced" },
    { name: "C", icon: <SiC />, level: "Intermediate" },
    { name: "C++", icon: <SiCplusplus />, level: "Intermediate" },
    { name: "HTML", icon: <FaHtml5 />, level: "Advanced" },
    { name: "CSS", icon: <FaCss3Alt />, level: "Advanced" },
    { name: "JavaScript", icon: <FaJs />, level: "Intermediate" },
    { name: "React.js", icon: <FaReact />, level: "Learning" },
    { name: "Flask", icon: <SiFlask />, level: "Intermediate" },
    { name: "SQLite", icon: <SiSqlite />, level: "Intermediate" },
    { name: "MySQL", icon: <SiMysql />, level: "Intermediate" },
    { name: "GitHub", icon: <SiGithub />, level: "Intermediate" },
  ];

  // Stats data
  const stats = [
    { number: "4+", label: "Projects Completed" },
    { number: "6+", label: "Certifications" },
    { number: "3rd", label: "Year of Studying" },
    { number: "9.22", label: "Current CGPA" }
  ];

  // Experience data
  const experience = [
    {
      title: "Web Development Intern",
      company: "CodSoft",
      period: "Jan 2026 – Feb 2026",
      description: "Worked on responsive web applications focusing on UI design, interactivity, and real-world project implementation."
    },
    {
      title: "Android Developer Intern",
      company: "AICTE EduSkills (Google-supported)",
      period: "Jul 2024 – Sep 2024",
      description: "Developed Android applications using Kotlin and Android Studio with emphasis on UI design, performance, and API integration."
    },
    {
      title: "Technology Job Simulation Participant",
      company: "Deloitte (Forage)",
      period: "2024",
      description: "Worked on real-world tasks related to coding and development, gaining insight into Deloitte's technology teams."
    }
  ];

  // Featured Projects
  const featuredProjects = [
    {
      title: "RideShare – Smart Ride Sharing Platform (Ongoing)",
      description: "Developing a full-stack ride-sharing platform with secure authentication, efficient ride matching, and scalable backend architecture.",
      tech: ["MERN Stack", "Authentication"],
      icon: <FaCar />
    },
    {
      title: "PlantAI – Plant Disease Detection System",
      description: "AI-powered web application for plant disease detection using image analysis and Flask backend.",
      tech: ["Python", "Flask", "AI/ML", "Image Analysis"],
      icon: <FaLeaf />,
      link: "https://plantai-1-opuo.onrender.com/"
    },
    {
      title: "AI Text Summarizer",
      description: "Developed a Google API-based Text Summarization System using Flask to generate concise and meaningful summaries from large text inputs.",
      tech: ["Python", "Flask", "Google API", "NLP"],
      icon: <FaStickyNote />
    }
  ];

  // All Certifications
  const allCertifications = [
    { 
      name: "NPTEL – Python Programming", 
      issuer: "NPTEL", 
      year: "2024",
      score: "71%"
    },
    { 
      name: "NCET 2025", 
      issuer: "NCET", 
      year: "2025",
      score: "Qualified"
    },
    { 
      name: "Artificial Intelligence & Data Analytics", 
      issuer: "Simplilearn", 
      year: "2024"
    },
    { 
      name: "AI & Cybersecurity", 
      issuer: "HP LIFE", 
      year: "2024"
    },
    { 
      name: "Technology & Solutions Architecture Virtual Experience", 
      issuer: "Deloitte (Forage)", 
      year: "2024"
    },
    { 
      name: "Static Website Development", 
      issuer: "NextWave", 
      year: "2024"
    }
  ];

  const featuredCertifications = allCertifications.slice(0, 4);

  // Process Steps
  const processSteps = [
    {
      step: "Step 01",
      title: "Let's Connect",
      description: "Start by reaching out to discuss ideas, projects, or opportunities. I'm always excited to hear about new challenges."
    },
    {
      step: "Step 02",
      title: "Understand the Problem",
      description: "We define the problem, explore requirements, and identify the best technical approach."
    },
    {
      step: "Step 03",
      title: "Build & Iterate",
      description: "Rapid prototyping and continuous improvement based on feedback and testing."
    },
    {
      step: "Step 04",
      title: "Deliver & Support",
      description: "Deploy the solution and provide ongoing support and maintenance."
    }
  ];

  // Why Me
  const whyMe = [
    {
      title: "Strong Academic Foundation",
      description: "Current CGPA of 9.22 in AI & Data Science B.Tech program.",
      type: "good"
    },
    {
      title: "Problem-Solving Mindset",
      description: "Strong grasp of Data Structures, Algorithms, and OOP concepts.",
      type: "good"
    },
    {
      title: "Certified & Verified",
      description: "Multiple certifications from NPTEL, Simplilearn, HP LIFE, and Deloitte.",
      type: "good"
    },
    {
      title: "Continuous Learner",
      description: "Always updating skills with latest technologies and industry practices.",
      type: "good"
    }
  ];

  // FAQs
  const faqs = [
    {
      id: 1,
      question: "What areas are you interested in?",
      answer: "I'm interested in Artificial Intelligence, Data Science, and Web Development. I enjoy building practical solutions for real-world problems using modern technologies."
    },
    {
      id: 2,
      question: "Are you open to internships or collaborations?",
      answer: "Yes! I'm actively looking for internships and collaboration opportunities in AI, Data Science, and Web Development. I'm eager to learn from industry professionals and contribute to meaningful projects."
    },
    {
      id: 3,
      question: "What programming languages do you work with?",
      answer: "I work with Python, Java, C, C++, JavaScript, and have experience with frameworks like React.js and Flask. I also work with SQLite and MySQL databases."
    },
    {
      id: 4,
      question: "What certifications do you hold?",
      answer: "I hold certifications from NPTEL (Python Programming), Simplilearn (AI & Data Analytics), HP LIFE (AI & Cybersecurity), Deloitte (Technology Virtual Experience), and NextWave (Static Website Development)."
    },
    {
      id: 5,
      question: "What are some of your recent projects?",
      answer: "I've recently worked on PlantAI (plant disease detection), AI Text Summarizer, a Personal Portfolio Website, and am currently developing RideShare - a smart ride-sharing platform."
    },
    {
      id: 6,
      question: "What are your career goals?",
      answer: "I aim to become a proficient AI/Data Science professional, working on cutting-edge technologies while continuously learning and growing. I'm particularly interested in roles that combine AI with web development."
    }
  ];

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll(
      '.fade-in, .slide-in-left, .slide-in-right, .scale-in'
    );
    
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Handle smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.hash && target.hash.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // FAQ toggle function
  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  // Navigation handlers
  const handleViewAllProjects = () => {
    navigate('/project');
  };

  const handleViewResume = () => {
    navigate('/resume');
  };

  const handleViewAllCertifications = () => {
    navigate('/certificate');
  };

  // Contact info copy function
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <section className="home">
      <Particle />
      
      {/* Hero Section with Scroll Animation */}
      <ScrollAnimation animation="fade-in">
        <div className="hero-section">
          <Container>
            <Row className="align-items-center">
              <Col lg={7}>
                <div className="hero-content">
                  <h1 className="hero-name">Ojaswi Makode</h1>
                  <div className="hero-role">B.Tech | Artificial Intelligence & Data Science</div>
                  <p className="hero-description">
                    I'm an aspiring <span className="highlight">AI & Data Science</span> undergraduate from <span className="highlight">Amravati, Maharashtra</span>. 
                    I love building <span className="highlight">innovative solutions</span> and constantly exploring new technologies to grow as a developer.
                    Current CGPA: <span className="highlight">9.22/10</span>
                  </p>
                  <div className="hero-buttons">
                    <button className="btn-primary" onClick={handleViewAllProjects}>
                      See All Projects <FaArrowRight />
                    </button>
                    <button className="btn-contact" onClick={handleViewResume}>
                      View Resume
                    </button>
                  </div>
                </div>
              </Col>
              <Col lg={5}>
                <div className="profile-wrapper">
                  <div className="profile-rectangle">
                    <img src={profileImg} alt="Ojaswi Makode" />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </ScrollAnimation>

      {/* Stats Section with Scroll Animation */}
      <ScrollAnimation animation="scale-in">
        <div className="stats-section">
          <Container>
            <Row>
              {stats.map((stat, index) => (
                <Col lg={3} md={6} key={index}>
                  <div className="stat-card">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </ScrollAnimation>

      {/* Diagram & About Section */}
      <div className="diagram-about-section">
        <Container>
          <Row className="align-items-center">
            {/* Left Side - Diagram */}
            <Col md={6} className="diagram-col">
              <ScrollAnimation animation="slide-in-left">
                <div className="animated-diagram">
                  <div className="diagram-item">
                    <FaHtml5 className="diagram-icon floating" />
                    <span>Basics</span>
                  </div>

                  <div className="diagram-line moving-line"></div>

                  <div className="diagram-item">
                    <FaReact className="diagram-icon floating delay-1" />
                    <span>Build</span>
                  </div>

                  <div className="diagram-line moving-line delay-2"></div>

                  <div className="diagram-item">
                    <FaCode className="diagram-icon floating delay-2" />
                    <span>Improve</span>
                  </div>
                </div>
              </ScrollAnimation>
            </Col>

            {/* Right Side - About Me Text */}
            <Col md={6} className="about-col">
              <ScrollAnimation animation="slide-in-right">
                <div className="about-content">
                  <h2 className="about-heading">
                    About <span className="highlight">Me</span>
                  </h2>
                  <div className="about-text">
                    <p>
                      Passionate about building user-friendly apps with AI. Currently focused on full-stack development and machine learning.
                    </p>
                    <p>
                      Tech: Python, Java, C++, React.js, Flask. Certified by NPTEL, Simplilearn. Internships: Deloitte, AICTE EduSkills.
                    </p>
                    <p className="last-paragraph">
                      If you don't find me coding, you'll probably find me writing, sketching ideas, or playing games and relaxing my mind.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Education Section */}
      <ScrollAnimation animation="slide-in-left">
        <div className="education-section">
          <Container>
            <div className="section-header">
              <span className="section-subtitle">Education</span>
              <h2 className="section-title">Academic Background</h2>
            </div>
            {education.map((edu, index) => (
              <div className="education-item" key={index}>
                <h3>{edu.degree}</h3>
                <p>{edu.institution}</p>
                <span className="education-year">{edu.duration}</span>
                {edu.cgpa && <p className="mt-2"><strong>{edu.cgpa}</strong></p>}
              </div>
            ))}
          </Container>
        </div>
      </ScrollAnimation>

      {/* Technical Skills Section */}
      <div className="skills-section">
        <Container>
          <div className="section-header">
            <span className="section-subtitle">Technical Skills</span>
            <h2 className="section-title">What I Bring to the Table</h2>
            <p className="section-description">Hover over each skill card to see the technology</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <ScrollAnimation key={index} animation="scale-in" threshold={0.1}>
                <div className="skill-flip-card">
                  <div className="skill-flip-inner">
                    <div className="skill-flip-front">
                      {skill.icon}
                      <span>{skill.name}</span>
                    </div>
                    <div className="skill-flip-back">
                      {skill.icon}
                      <span>{skill.level}</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </Container>
      </div>

      {/* Experience Section */}
      <ScrollAnimation animation="slide-in-right">
        <div className="experience-section">
          <Container>
            <div className="section-header">
              <span className="section-subtitle">Experience</span>
              <h2 className="section-title">Work & Internships</h2>
            </div>
            {experience.map((exp, index) => (
              <div className="experience-card" key={index}>
                <h3>{exp.title}</h3>
                <div className="experience-company">{exp.company}</div>
                <div className="experience-date">{exp.period}</div>
                <p className="experience-description">{exp.description}</p>
              </div>
            ))}
          </Container>
        </div>
      </ScrollAnimation>

      {/* Featured Projects */}
      <ScrollAnimation animation="fade-in">
        <div className="projects-showcase">
          <Container>
            <div className="section-header">
              <span className="section-subtitle">Portfolio</span>
              <h2 className="section-title">My Projects</h2>
              <p className="section-description">
                Real-world applications built with modern technologies
              </p>
            </div>
            <Row>
              {featuredProjects.map((project, index) => (
                <Col lg={4} md={6} key={index}>
                  <div className="project-card">
                    <div className="project-title">
                      {project.icon}
                      {project.title}
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="project-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                    <p>{project.description}</p>
                    <div className="project-tech">
                      {project.tech.map((t, i) => (
                        <span key={i} className="tech-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            <div className="text-center mt-5">
              <button className="btn-view-all" onClick={handleViewAllProjects}>
                View All Projects <FaArrowRight />
              </button>
            </div>
          </Container>
        </div>
      </ScrollAnimation>

      {/* Featured Certifications */}
      <ScrollAnimation animation="slide-in-left">
        <div className="certifications-section">
          <Container>
            <div className="section-header">
              <span className="section-subtitle">Credentials</span>
              <h2 className="section-title">Professional Certifications</h2>
              <p className="section-description">
                Verified certifications from recognized institutions
              </p>
            </div>
            <Row>
              {featuredCertifications.map((cert, index) => (
                <Col lg={6} key={index}>
                  <div className="cert-card">
                    <FaCertificate className="cert-icon" />
                    <div className="cert-info">
                      <h4>{cert.name}</h4>
                      <p>{cert.issuer} • {cert.year} {cert.score && `• ${cert.score}`}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            <div className="text-center mt-4">
              <button className="btn-view-all" onClick={handleViewAllCertifications}>
                View All Certifications <FaArrowRight />
              </button>
            </div>
          </Container>
        </div>
      </ScrollAnimation>

      {/* Process Section */}
      <ScrollAnimation animation="scale-in">
        <div className="process-section">
          <Container>
            <div className="section-header">
              <span className="section-subtitle">How I Work</span>
              <h2 className="section-title">Process Is Everything</h2>
              <p className="section-description">
                Simple, streamlined process focused on delivering quality solutions
              </p>
            </div>
            <Row className="process-grid">
              {processSteps.map((step, index) => (
                <Col lg={3} md={6} key={index}>
                  <div className="process-card">
                    <div className="process-step">{step.step}</div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </ScrollAnimation>

      {/* Why Choose Me Section */}
      <ScrollAnimation animation="slide-in-right">
        <div className="why-section">
          <Container>
            <div className="section-header">
              <span className="section-subtitle">Why choose me</span>
              <h2 className="section-title">What Sets Me Apart</h2>
            </div>
            <Row className="why-grid">
              {whyMe.map((item, index) => (
                <Col lg={3} md={6} key={index}>
                  <div className="why-card good">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </ScrollAnimation>

      {/* FAQ Section */}
      <ScrollAnimation animation="fade-in">
        <div className="faq-section">
          <Container>
            <div className="faq-header">
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <div 
                  key={faq.id} 
                  className={`faq-item ${openFaq === faq.id ? 'active' : ''}`}
                >
                  <div 
                    className="faq-question"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <span>{faq.question}</span>
                    <FaPlus className={`faq-icon ${openFaq === faq.id ? 'rotate' : ''}`} />
                  </div>
                  {openFaq === faq.id && (
                    <div className="faq-answer">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </div>
      </ScrollAnimation>

      {/* Connect Section - SINGLE FOOTER ONLY */}
      <ScrollAnimation animation="fade-in">
        <div className="connect-section">
          <Container>
            <div className="connect-content">
              <h2>Let's Connect</h2>
              <p>Open to internships, collaborations, and AI/Data Science opportunities</p>
              <div className="contact-info">
                <p onClick={() => copyToClipboard('ojawsimakode7@gmail.com')} style={{ cursor: 'pointer' }}>
                  <MdEmail /> ojawsimakode7@gmail.com
                </p>
               
              </div>
              <div className="social-links">
                <a href="https://github.com/Ojawsimakode07" target="_blank" rel="noopener noreferrer">
                  <AiFillGithub />
                </a>
                <a href="https://www.linkedin.com/in/ojawsi-makode-517055291/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>
                <a href="https://x.com/OjaswiMakode07" target="_blank" rel="noopener noreferrer">
                  <AiOutlineTwitter />
                </a>
                <a href="https://www.instagram.com/th.oji/" target="_blank" rel="noopener noreferrer">
                  <AiFillInstagram />
                </a>
              </div>
              <hr className="footer-divider" />
              <p className="copyright">
                © 2026 Ojaswi Makode. All rights reserved.
              </p>
            </div>
          </Container>
        </div>
      </ScrollAnimation>
    </section>
  );
}

export default Home;
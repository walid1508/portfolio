import { motion } from "framer-motion";
import gsap from "gsap";
import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  // Variants for text and image animations
  const textVariants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const imageVariants = {
    offscreen: {
      scale: 0.8,
      opacity: 0,
    },
    onscreen: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    const getPoints = () => {
      const point1 = document.querySelector(".hero-section::before");
      const point2 = document.querySelector(".hero-section::after");
      if (point1 && point2) {
        tl.to(point1, { x: 20, y: -20, duration: 2, ease: "power1.inOut" })
          .to(point1, { x: 0, y: 0, duration: 2, ease: "power1.inOut" })
          .to(
            point2,
            { x: -20, y: 20, duration: 2, ease: "power1.inOut" },
            "-=2"
          )
          .to(point2, { x: 0, y: 0, duration: 2, ease: "power1.inOut" });
      }
    };

    getPoints();

    window.addEventListener("resize", getPoints);

    return () => {
      tl.kill();
      window.removeEventListener("resize", getPoints);
    };
  }, []);

  const imagePath = "/profile-pic.png";

  const { t } = useTranslation();

  return (
    <Container className="hero-section">
      <Row className="hero-flex-container">
        <Col md={8} xs={12} className="hero-text">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={textVariants}
          >
            <p className="intro-text">{t("intro")}</p>
            <h1 className="hero-name">{t("name")}</h1>
            <p className="hero-info">{t("profession")}</p>
            <p className="hero-info">{t("passion")}</p>
            <div className="mt-4 center-buttons d-flex flex-row">
              <Button
                href="https://github.com/walid1508"
                target="_blank"
                className="hero-button"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaGithub style={{ marginRight: "8px" }} />
                <span>GitHub</span>
              </Button>
              <Button
                href="https://www.linkedin.com/in/walid-djato-kpane-6a0448229/"
                target="_blank"
                className="hero-button"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaLinkedin style={{ marginRight: "8px" }} />
                <span>LinkedIn</span>
              </Button>
              <Button
                href="#contact"
                className="hero-button"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaEnvelope style={{ marginRight: "8px" }} />
                <span>Contact</span>
              </Button>
            </div>
          </motion.div>
        </Col>
        <Col md={4} xs={12} className="text-center">
          <motion.img
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={imageVariants}
            src={imagePath}
            alt="Walid Djato-kpane"
            className="hero-image"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;

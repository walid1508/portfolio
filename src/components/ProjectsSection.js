import { motion } from "framer-motion";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiTauri,
  SiTypescript,
} from "react-icons/si";

const cardVariants = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};
const ProjectsSection = () => {
  const { t } = useTranslation();
  return (
    <Container className="projects-section" id="projects">
      <h2 className="text-center mb-4">{t("projectSection")}</h2>
      <Row>
        <Col md={4} className="mb-4">
          <motion.div
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
          >
            <a
              href="https://github.com/walid1508/finance-tracker"
              target="_blank"
              rel="noreferrer"
            >
              <Card className="project-card">
                <Card.Img variant="top" src="finance-tracker.png" />
                <Card.Body>
                  <Card.Title>{t("financeTracker")}</Card.Title>
                  <Card.Text>{t("financeTrackerDesc")}</Card.Text>
                  <div className="tech-icons">
                    <SiTypescript />
                    <SiTailwindcss />
                    <SiReact />
                    <SiSqlite />
                    <SiTauri />
                  </div>
                </Card.Body>
              </Card>
            </a>
          </motion.div>
        </Col>
        <Col md={4} className="mb-4">
          <motion.div
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
          >
            <a
              href="https://langue-pass.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Card className="project-card">
                <Card.Img variant="top" src="langue-pass.png" />
                <Card.Body>
                  <Card.Title>{t("languePass")}</Card.Title>
                  <Card.Text>{t("languePassDesc")}</Card.Text>
                  <div className="tech-icons">
                    <SiTypescript />
                    <SiNextdotjs />
                    <SiTailwindcss />
                    <SiMongodb />
                  </div>
                </Card.Body>
              </Card>
            </a>
          </motion.div>
        </Col>
        <Col md={4} className="mb-4">
          <motion.div
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
          >
            <a
              href="https://citation-stoique.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Card className="project-card">
                <Card.Img variant="top" src="quote.png" />
                <Card.Body>
                  <Card.Title>{t("quoteGenerator")}</Card.Title>
                  <Card.Text>{t("quoteGeneratorDesc")}</Card.Text>
                  <div className="tech-icons">
                    <SiTypescript />
                    <SiNextdotjs />
                    <SiMongodb />
                  </div>
                </Card.Body>
              </Card>
            </a>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectsSection;

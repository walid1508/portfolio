import {
    SiReact,
    SiTailwindcss,
    SiElectron, SiXamarin, SiCsharp, SiDotnet, SiTypescript, SiNextdotjs, SiMongodb
} from 'react-icons/si';
import {Card, Col, Container, Row} from "react-bootstrap";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {PiFolderSimpleLock} from "react-icons/pi";



const cardVariants = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", bounce: 0.4, duration: 1 }
    }
};
const ProjectsSection = () => {
    const { t } = useTranslation();
    return (
        <Container className="projects-section" id="projects">
            <h2 className="text-center mb-4">{t('projectSection')}</h2>
            <Row>
                <Col md={4} className="mb-4">
                    <motion.div
                        variants={cardVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{once: true}}
                    >
                        <Card className="project-card">
                            <Card.Img variant="top" src="ec.png"/>
                            <Card.Body>
                                <Card.Title>{t('eagleCommercial')} <PiFolderSimpleLock style={{ color: 'red' }} /> </Card.Title>
                                <Card.Text>
                                    {t('eagleCommercialDesc')}
                                </Card.Text>
                                <div className="tech-icons">
                                    <SiTypescript />
                                    <SiReact/>
                                    <SiElectron />
                                    <SiTailwindcss/>
                                </div>
                            </Card.Body>
                        </Card>
                    </motion.div>
                </Col>
                <Col md={4} className="mb-4">
                    <motion.div
                        variants={cardVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{once: true}}
                    >
                        <a href="https://english-practice-walids-projects-cd6f9fc6.vercel.app/" target="_blank" rel="noreferrer">
                            <Card className="project-card">
                                <Card.Img variant="top" src="english-practice.png"/>
                                <Card.Body>
                                    <Card.Title>{t('englishPractice')}</Card.Title>
                                    <Card.Text>
                                        {t('englishPracticeDesc')}
                                    </Card.Text>
                                    <div className="tech-icons">
                                        <SiTypescript/>
                                        <SiNextdotjs/>
                                        <SiTailwindcss/>
                                        <SiMongodb/>
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
                        viewport={{once: true}}
                    >
                        <a href="https://github.com/walid1508/pizzaEnLigne" target="_blank"  rel="noreferrer">
                            <Card className="project-card">
                                <Card.Img variant="top" src="pizza.png"/>
                                <Card.Body>
                                    <Card.Title>{t('appPizza')}</Card.Title>
                                    <Card.Text>
                                        {t('appPizzaDesc')}
                                    </Card.Text>
                                    <div className="tech-icons">
                                        <SiCsharp />
                                        <SiXamarin />
                                        <SiDotnet />
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
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
    SiFigma,
    SiHtml5,
    SiBootstrap,
    SiReact,
    SiNodedotjs,
    SiMongodb,
    SiGit,
    SiTailwindcss, SiMysql, SiLaravel, SiElectron, SiTypescript
} from 'react-icons/si';
import { useTranslation } from 'react-i18next';


const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5
        }
    },
};

const SkillsSection = () => {
    const { t } = useTranslation();
    return (
        <Container className="skills-section" id="skills">
            <h2 className="text-center mb-5 skills-title">{t('skillsSection')}</h2>
            <Row>
                <Col lg={3} xs={12} className="skill-category">
                    <h3>Design</h3>
                    <ul>
                        <motion.li
                            key="figma"
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                        >
                            <SiFigma /> Figma
                        </motion.li>
                    </ul>
                </Col>


                <Col lg={3} xs={12} className="skill-category">
                    <h3>Front-end</h3>
                    <ul>
                        <motion.li
                            key="html-css"
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: false}}
                        >
                            <SiHtml5/> HTML & CSS
                        </motion.li>
                        <motion.li
                            key="javascript"
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: false}}
                        >
                            <SiTypescript /> JavaScript & TypeScript
                        </motion.li>
                        <motion.li
                            key="react"
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: false}}
                        >
                            <SiReact /> React
                        </motion.li>
                        <motion.li
                            key="bootstrap"
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: false}}
                        >
                            <SiBootstrap/> Bootstrap
                        </motion.li>
                        <motion.li
                            key="tailwindcss"
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: false}}
                        >
                            <SiTailwindcss/> Tailwindcss
                        </motion.li>

                    </ul>
                </Col>

                <Col lg={3} xs={12} className="skill-category">
                    <h3>Back-end</h3>
                    <ul>
                        <motion.li
                            key="nodejs"
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: false}}
                        >
                            <SiNodedotjs/> Express.js
                        </motion.li>
                        <motion.li
                            key="php"
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: false}}
                        >
                            <SiLaravel/> Laravel
                        </motion.li>
                        <motion.li
                            key="electron"
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: false}}
                        >
                            <SiElectron/> Electron
                        </motion.li>
                        <motion.li
                            key="mongodb"
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: false}}
                        >
                            <SiMongodb/> MongoDB & NeDB
                        </motion.li>
                        <motion.li
                            key="mysql"
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: false}}
                        >
                            <SiMysql/> MySQL & PostgreSQL
                        </motion.li>
                    </ul>
                </Col>

                <Col lg={3} xs={12} className="skill-category">
                    <h3>{t('other')}</h3>
                    <ul>
                        <motion.li
                            key="git"
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                        >
                            <SiGit /> Git & GitHub
                        </motion.li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default SkillsSection;

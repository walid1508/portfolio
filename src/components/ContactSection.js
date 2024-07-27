import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import {FaEnvelope, FaGithub, FaLinkedin} from 'react-icons/fa';
import emailjs from 'emailjs-com';
import config from "../config";
import { useTranslation } from 'react-i18next';


const ContactSection = () => {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm(
            config.EMAILJS_SERVICEID,
            config.EMAILJS_TEMPLATEID,
            e.target,
            config.EMAILJS_USERID
        )
            .then((result) => {
                console.log(result.text);
                setSubmitted(true);
                setIsSubmitting(false);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                setIsSubmitting(false);
            });
    };

    const { t } = useTranslation();

    return (
        <Container className="contact-section" id="contact">
            <h2 className="text-center mb-5 contact-title">{t('contactMe')}</h2>
            <Row>
                <Col md={6} className="contact-info">
                    <h3>{t('getInTouch')}</h3>
                    <p className="info-text">
                        {t('availability')}
                    </p>
                    <div className="contact-details">
                        <Button href="https://github.com/walid1508" target="_blank" className="hero-button" style={{ display: 'flex',  alignItems: 'center', justifyContent: 'center' }}>
                            <FaGithub style={{ marginRight: '8px' }} />
                            <span>GitHub</span>
                        </Button>
                        <Button href="https://www.linkedin.com/in/walid-djato-kpane-6a0448229/" target="_blank" className="hero-button" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <FaLinkedin style={{ marginRight: '8px' }} />
                            <span>LinkedIn</span>
                        </Button>
                        <Button href="#contact" className="hero-button" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <FaEnvelope style={{ marginRight: '8px' }} />
                            <span>Contact</span>
                        </Button>
                    </div>
                </Col>
                <Col md={6} className="form-bg">
                    <Form onSubmit={sendEmail}>
                        <Form.Group className="mb-3">
                            <Form.Label>{t('nameField')}</Form.Label>
                            <Form.Control type="text" placeholder={t('enterYourName')} name="from_name" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>{t('emailAddress')}</Form.Label>
                            <Form.Control type="email" placeholder={t('enterYourEmail')} name="reply_to" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>{t('subject')}</Form.Label>
                            <Form.Control type="text" placeholder={t('enterTheSubject')} name="subject" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>{t('message')}</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder={t('yourMessage')} name="message" required />
                        </Form.Group>
                        <Button variant="primary" type="submit" disabled={isSubmitting}>
                            {isSubmitting ? t('sending') : t('sendMessage')}
                        </Button>
                    </Form>
                    {submitted && <Alert variant="success" className="mt-3">{t('messageSent')}</Alert>}
                </Col>
            </Row>
        </Container>
    );
};

export default ContactSection;

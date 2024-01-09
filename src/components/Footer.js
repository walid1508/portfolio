import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="footer-section">
            <Container>
                <Row>
                    <Col className="text-center">
                        <p className="footer-bottom-text">
                            © {new Date().getFullYear()} Walid Djato-kpane. {t('allRightsReserved')}.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;

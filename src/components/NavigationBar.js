import React, { useState } from 'react';
import { Navbar, Nav, Offcanvas, Container } from 'react-bootstrap';
import { MdMenu } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

const NavigationBar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);

    const handleLanguageToggle = () => {
        const newLanguage = language === 'fr' ? 'en' : 'fr';
        i18n.changeLanguage(newLanguage);
        setLanguage(newLanguage);
    };

    const { t } = useTranslation();


    return (
        <>
            <Navbar expand="lg" className="custom-navbar">
                <Container>
                    <Navbar.Brand href="#home" className="navbar-brand">Walid.dev</Navbar.Brand>
                    <Navbar.Toggle onClick={handleShow} aria-controls="offcanvasNavbar">
                        <MdMenu style={{ color: '#d5e8f8', fontSize: '28px' }} />
                    </Navbar.Toggle>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                        show={show}
                        onHide={handleClose}
                        style={{ backgroundColor: '#04082f' }}
                    >
                        <Offcanvas.Header closeButton style={{ color: '#d5e8f8' }}>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="ms-auto">
                                <Nav.Link href="#skills">{t('skills')}</Nav.Link>
                                <Nav.Link href="#projects">{t('projects')}</Nav.Link>
                                <Nav.Link href="#contact">{t('contact')}</Nav.Link>
                                <Nav.Link onClick={handleLanguageToggle}>
                                    {language === 'fr' ? 'EN' : 'FR'}
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
};

export default NavigationBar;

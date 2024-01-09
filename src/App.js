import React from 'react';
import NavigationBar from "./components/NavigationBar";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import './i18n';


function App() {


    return (
        <div>
            <NavigationBar />
            <HeroSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </div>
    );
}

export default App;


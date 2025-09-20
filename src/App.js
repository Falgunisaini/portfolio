import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/Theme';
import { Container, MainBody } from './styles/Global.styled';

// Import components
import Showcase from './components/Showcase';
import MySkills from './components/MySkills';
import WorkExperience from './components/WorkExperience';
import MyProjects from './components/MyProjects';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Education from './components/Education';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainBody>
        <Container>
          <Navbar />
          <Showcase />
          <MySkills />
          <WorkExperience />
          <Education />
          <MyProjects />
          <Footer />
        </Container>
      </MainBody> 
    </ThemeProvider>
  );
}

export default App;
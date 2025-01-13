import React from 'react';
import { motion } from 'framer-motion';

import {
  PaddingContainer,
  FlexContainer,
  Heading,
  HighlightText,
  ParaText,
  IconContainer
} from '../styles/Global.styled';

import {
  ShowcaseImageCard,
  ShowcaseParticleContainer
} from '../styles/Showcase.styled';

// Importing react-icons
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';

// Importing assets
import ShowcaseImage from '../assets/images/showcase-img.jpg';
import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants';

const Showcase = () => {
  return (
    <PaddingContainer
      id="Home"
      left="3%"
      right="10%"
      top="18%"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
      responsiveTop="8rem"
    >
      <FlexContainer align="center" justify="space-between">
        {/* Left content */}
        <motion.div 
          variants={ fadeInLeftVariant }
          initial="hidden"
          whileInView="visible"
          style={{ flex: 1, paddingRight: '2rem' }}
        >
          <Heading
            as="h1"
            size="h1"
            bottom="1rem"
          >
            Hi, I am <HighlightText>Falguni Saini</HighlightText>
          </Heading>
          <Heading
            as="h3"
            size="h3"
          >
            I'm a <HighlightText>Full-Stack Developer</HighlightText>
          </Heading>

          <ParaText as="p" top="2rem" bottom="3rem">
            An aspiring full-stack developer passionate about coding and creating impactful projects. While I'm still building my experience, my enthusiasm drives me to learn, innovate, and turn ideas into reality.
          </ParaText>

          {/* Social icons */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>

            <FlexContainer gap="1rem" responsiveFlex>
              <a href="https://www.linkedin.com/in/falguni-saini-93835b20a/" target="_blank" rel="noopener noreferrer">
                <IconContainer size="1.5rem" color="highlight-color">
                  <BsLinkedin />
                </IconContainer>
              </a>

              <a href="https://github.com/Falgunisaini" target="_blank" rel="noopener noreferrer">
                <IconContainer size="1.5rem" color="highlight-color">
                  <BsGithub />
                </IconContainer>
              </a>

              <a href="https://www.instagram.com/falguni.saini" target="_blank" rel="noopener noreferrer">
                <IconContainer size="1.5rem" color="highlight-color">
                  <BsInstagram />
                </IconContainer>
              </a>
            </FlexContainer>
          </div>

        </motion.div>

        {/* Right content */}
        <ShowcaseParticleContainer 
          marginTop="3rem" 
          marginLeft="-1rem" 
          as={motion.div}
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
        >
          <ShowcaseImageCard>
            <img
              src={ShowcaseImage}
              alt="Showcase"
              style={{ width: '100%', maxHeight: '700px', objectFit: 'cover' }}
            />
          </ShowcaseImageCard>

          {/* <Particle src={BackgroundImg} alt="particle" top="-120px" left="20px" rotate="60deg" /> */}
        </ShowcaseParticleContainer>

      </FlexContainer>
    </PaddingContainer>
  );
}

export default Showcase;

import React from 'react';
import { motion } from 'framer-motion';

// Import global styles
import {
    PaddingContainer,
    Heading,
    HighlightText,
} from '../styles/Global.styled';

import { projectDetails } from '../utils/Data';
import Project from './layouts/Project';

import { fadeInTopVariant } from '../utils/Variants';

const MyProjects = () => {
  return (
    <div>
      <PaddingContainer
        id='Projects'
        top="5%"
        bottom="5%"
      >
        <Heading 
          as={motion.h4}
          variants={fadeInTopVariant} 
          initial="hidden"
          whileInView="visible"
          size="h4"
        >
            MY PROJECTS
        </Heading>

        <Heading 
          as={motion.h2}
          variants={fadeInTopVariant} 
          initial="hidden"
          whileInView="visible"
          size="h2"
        >
            What <HighlightText>I have built</HighlightText>

            {projectDetails.map((project) => ( 
                <PaddingContainer key={project.id}
                  id="Projects"
                  top="5rem"
                  bottom="5rem"
                  responsiveTop="5%"
                  responsiveLeft="1rem"
                  responsiveRight="1rem"
                >
                    <Project data={project}/>
                </PaddingContainer>
            ))}
        </Heading>
      </PaddingContainer>
    </div>
  )
}

export default MyProjects

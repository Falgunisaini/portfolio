import React from 'react';
import { motion } from 'framer-motion';

// Import global styles
import {
    PaddingContainer,
    Heading,
    HighlightText
} from '../styles/Global.styled';

import { workExperienceData } from '../utils/Data';
import MyWorkExperience from './layouts/MyWorkExperience';

import { fadeInTopVariant } from '../utils/Variants';

const WorkExperience = () => {
    return (
        <PaddingContainer
            id="WorkExperience"
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
                WORK EXPERIENCE
            </Heading>

            <Heading
                as={motion.h2}
                variants={fadeInTopVariant}
                initial="hidden"
                whileInView="visible"
                size="h2"
            >
                Building my<HighlightText> professional journey</HighlightText>
            </Heading>

            <div style={{ overflow: "hidden", height: "auto" }}>
                {workExperienceData.map((experience, index) => (
                    <PaddingContainer key={experience.id}
                        id="WorkExperience"
                        top="5rem"
                        bottom="5rem"
                        responsiveTop="5%"
                        responsiveLeft="1rem"
                        responsiveRight="1rem"
                    >
                        <MyWorkExperience data={[experience]} />
                    </PaddingContainer>
                ))}
            </div>
        </PaddingContainer>
    );
}

export default WorkExperience;
import React from 'react';
import { motion } from 'framer-motion';

// Import global styles
import {
    PaddingContainer,
    Heading,
    HighlightText
} from '../styles/Global.styled';

import { educationData } from '../utils/Data';
import MyEducation from './layouts/MyEducation';

import { fadeInTopVariant } from '../utils/Variants';

const Education = () => {
    return (
        <PaddingContainer
            id="Education"
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
                EDUCATIONAL BACKGROUND
            </Heading>

            <Heading
                as={motion.h2}
                variants={fadeInTopVariant}
                initial="hidden"
                whileInView="visible"
                size="h2"
            >
                The foundation<HighlightText> of my knowledge</HighlightText>
            </Heading>

            <div style={{ overflow: "hidden", height: "auto" }}>
                {educationData.map((education, index) => (
                    <PaddingContainer key={education.id}
                        id="Education"
                        top="5rem"
                        bottom="5rem"
                        responsiveTop="5%"
                        responsiveLeft="1rem"
                        responsiveRight="1rem"
                    >
                        <MyEducation data={[education]} />
                    </PaddingContainer>
                ))}
            </div>
        </PaddingContainer>
    );
}

export default Education;

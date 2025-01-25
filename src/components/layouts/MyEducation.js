import React from "react";
import { motion } from "framer-motion";

// Import global styles
import {
    Heading,
    HighlightText,
} from '../../styles/Global.styled';

import {
    LineDiv, 
    EducationContainer, 
    EducationItem, 
    ContentBox,
    Indicator
} from '../../styles/Education.styled';

import { fadeInVariant } from '../../utils/Variants';

const MyEducation = ({ data }) => {
    return (
        <EducationContainer>
            <LineDiv>
                {data.map((educationItem) => (
                    <Indicator
                        key={`indicator-${educationItem.id}`}
                        position={educationItem.id % 2 === 0 ? "left" : "right"}
                        style={{ top: `${(educationItem.id - 1) * 150}px` }}
                    />
                ))}
            </LineDiv>

            {data.map((educationItem) => (
                <EducationItem
                    key={educationItem.id}
                    position={educationItem.id % 2 === 0 ? "left" : "right"}
                >
                    <motion.div
                        whileHover={{
                            scale: 1.05, // Slightly enlarge on hover
                            transition: { duration: 0.3 }, // Smooth hover effect
                        }}
                        variants={fadeInVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <ContentBox position={educationItem.id % 2 === 0 ? "left" : "right"}>
                            <Heading as="h3" size="h3">
                                {educationItem.degree}
                            </Heading>
                            <HighlightText>
                                <span>{educationItem.institution}</span>
                                <br />
                                <span style={{ fontSize: '0.9rem', color: 'gray' }}>{educationItem.duration}</span>
                            </HighlightText>
                        </ContentBox>
                    </motion.div>
                </EducationItem>
            ))}
        </EducationContainer>
    );
};

export default MyEducation;

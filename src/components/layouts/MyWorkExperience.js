import React from "react";
import { motion } from "framer-motion";

// Import global styles
import {
    Heading,
    HighlightText,
    ParaText
} from '../../styles/Global.styled';

import {
    LineDiv, 
    ExperienceContainer, 
    ExperienceItem, 
    ContentBox,
    Indicator
} from '../../styles/WorkExperience.styled';

import { fadeInVariant } from '../../utils/Variants';

const MyWorkExperience = ({ data }) => {
    return (
        <ExperienceContainer>
            <LineDiv>
                {data.map((experienceItem) => (
                    <Indicator
                        key={`indicator-${experienceItem.id}`}
                        position={experienceItem.id % 2 === 0 ? "left" : "right"}
                        style={{ top: `${(experienceItem.id - 1) * 200}px` }}
                    />
                ))}
            </LineDiv>

            {data.map((experienceItem) => (
                <ExperienceItem
                    key={experienceItem.id}
                    position={experienceItem.id % 2 === 0 ? "left" : "right"}
                >
                    <motion.div
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.3 },
                        }}
                        variants={fadeInVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <ContentBox position={experienceItem.id % 2 === 0 ? "left" : "right"}>
                            <Heading as="h3" size="h3">
                                {experienceItem.position}
                            </Heading>
                            <HighlightText>
                                <span>{experienceItem.company}</span>
                                <br />
                                <span style={{ fontSize: '0.9rem', color: 'gray' }}>
                                    {experienceItem.location} | {experienceItem.duration}
                                </span>
                            </HighlightText>
                            
                            <div style={{ marginTop: '1rem' }}>
                                {experienceItem.description.map((desc, index) => {
                                    // Check if this is the skills line
                                    if (desc.startsWith('Skills:')) {
                                        return (
                                            <HighlightText key={index} style={{
                                                fontSize: '0.9rem',
                                                marginTop: '1rem',
                                                lineHeight: '1.4',
                                                fontWeight: 'bold'
                                            }}>
                                                {desc}
                                            </HighlightText>
                                        );
                                    }
                                    return (
                                        <ParaText key={index} style={{
                                            fontSize: '0.9rem',
                                            marginBottom: '0.5rem',
                                            lineHeight: '1.4'
                                        }}>
                                            • {desc}
                                        </ParaText>
                                    );
                                })}
                            </div>
                        </ContentBox>
                    </motion.div>
                </ExperienceItem>
            ))}
        </ExperienceContainer>
    );
};

export default MyWorkExperience;
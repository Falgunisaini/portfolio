import React from 'react';
import { motion } from 'framer-motion';

// Import global styles
import {
    PaddingContainer,
    Heading,
    FlexContainer,
    ParaText,
    Button
} from '../../styles/Global.styled';

// Import project styles
import {
    TechStackCard,
    ProjectImageContainer,
    ProjectImage
} from '../../styles/MyProjects.styled';

import { fadeInLeftVariant, fadeInRightVariant } from '../../utils/Variants';

export const Project = ({ data}) => {
    return (
        <FlexContainer 
            direction={data.reverse? 'row-reverse' : false}
            fullWidthChild>

            {/* Left section project content */}
            <motion.div
                variants={data.reverse ? fadeInRightVariant : fadeInLeftVariant} 
                initial="hidden"
                whileInView="visible"
            >
                <FlexContainer align="left" gap="1rem">
                    <Heading as="h3" size="h3" bottom="1rem">
                        {data.project_name}
                    </Heading>
                </FlexContainer>

                <PaddingContainer top="1rem" >
                    <FlexContainer gap="1.5rem" style={ {fontSize: '1rem'}}>
                        {data.tech.map((stack) => (
                            <TechStackCard key={stack.id}>
                                {stack}
                            </TechStackCard>
                        ))}
                    </FlexContainer>
                </PaddingContainer>

                <ParaText top="1.5rem" bottom="2rem" style={ {fontSize: '1rem'}}>
                    {data.project_description}
                </ParaText>

                <Button href={data.project_url} target="_blank" style={ {fontSize: '1.2rem', textDecoration: 'none'}}>Visit Website</Button>
            </motion.div>

            {/* Right section project image */}
            <ProjectImageContainer 
                as={motion.div}
                variants={data.reverse ? fadeInLeftVariant : fadeInRightVariant} 
                initial="hidden"
                whileInView="visible"
                justify={data.reverse? 'flex-start' : 'flex-end'}
                style={{alignItems: 'center'}}
            >
                <ProjectImage 
                src={data.project_img} 
                alt={data.project_name} />
            </ProjectImageContainer>
        </FlexContainer>

    )
}

export default Project

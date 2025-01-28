import React from 'react';
import { motion } from 'framer-motion';

// Import global styles
import {
    FlexContainer,
    PaddingContainer,
    Heading,
    IconContainer,
    ParaText,
    HighlightText,
} from '../styles/Global.styled';

// import My skills styles
import {
    SkillsCardContainer,
    SkillsCard
} from '../styles/MySkills.styled';

import { Skills } from '../utils/Data';

import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants';

const MySkills = () => {
  return (
    <div>
      <PaddingContainer
        id="Skills"
        top="5%"
        bottom="10%">

        <FlexContainer fullWidthChild responsiveFlex="flex" responsiveDirection="column-reverse">
            {/* Left section */}
            <SkillsCardContainer
                as={motion.div}
                variants={fadeInLeftVariant}
                initial="hidden"
                whileInView="visible"
            >
                {Skills.map((skill) => (
                    <SkillsCard marginTop="3rem"> 
                        <IconContainer size="4rem" color="highlight-color">
                            {skill.icon}
                        </IconContainer>

                        <Heading as="h4" size="h4" top="1rem">{skill.tech}</Heading>
                    </SkillsCard>
                ))}
            </SkillsCardContainer>

            {/* Right section */}
            <motion.div
                ariants={fadeInRightVariant}
                initial="hidden"
                whileInView="visible"
            >
                <Heading as="h4" size="h4">
                    MY SKILLS
                </Heading>

                <Heading as="h2" size="h2" top="0.5rem">
                    What <HighlightText>I can do</HighlightText>
                </Heading>

                <ParaText as="p" top="2rem" bottom="1.5rem">
                I have a strong command of HTML, CSS, JavaScript, React, Node along with foundational knowledge in C++, Java, and SQL, which complements my problem-solving abilities as a developer. My expertise lies in creating responsive and dynamic user interfaces using React, enabling me to build engaging and interactive web applications. I am dedicated to delivering visually appealing and efficient solutions that adhere to modern web development standards, ensuring an exceptional user experience.
                </ParaText>

                <ParaText as="p" top="1rem">
                I have hands-on experience with React, focusing on developing scalable and maintainable applications. This expertise enables me to craft efficient, adaptable code that evolves seamlessly with the dynamic requirements of a business.
                </ParaText>
            </motion.div>
        </FlexContainer>

      </PaddingContainer>
    </div>
  )
}

export default MySkills

import React from 'react';
import { motion } from 'framer-motion';

// Import global styles
import {
  PaddingContainer,
  Heading,
  HighlightText,
  FlexContainer,
  Button
} from '../styles/Global.styled';

// Import footer styles
import {
  ContactForm,
  FormLabel,
  FormInput
} from '../styles/Footer.styled';

import { fadeInBottomVariant } from '../utils/Variants';

const Footer = () => {
  return (
    <PaddingContainer
      id='Contact'
      top="5%"
      bottom="10%"
    >

      <Heading
        as={motion.h4}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h4"
        align="center"
      >
        MY CONTACT
      </Heading>

      <Heading 
        as={motion.h2}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h2" 
        align="center" 
        top="0.5rem"
      >
        Contact <HighlightText>Me here</HighlightText>
      </Heading>

      <PaddingContainer top="3rem">
        <FlexContainer justify="center">
          <ContactForm
            as={motion.form}
            variants={fadeInBottomVariant}
            initial="hidden"
            whileInView="visible"
          >

            <PaddingContainer bottom="2rem">
              <FormLabel>Name:</FormLabel>
              <FormInput type="text" name="name" placeholder="Enter your name" required />
            </PaddingContainer>

            <PaddingContainer bottom="2rem">
              <FormLabel>Email:</FormLabel>
              <FormInput type="email" name="email" placeholder="Enter your email" required />
            </PaddingContainer>

            <PaddingContainer bottom="2rem">
              <FormLabel>Message:</FormLabel>
              <FormInput as="textarea" name="message" placeholder="Enter your message" required />
            </PaddingContainer>

            <FlexContainer justify="center" responsiveFlex>
              <Button>Send Message</Button>
            </FlexContainer>
          </ContactForm>

        </FlexContainer>
      </PaddingContainer>
    </PaddingContainer>
  )
}

export default Footer

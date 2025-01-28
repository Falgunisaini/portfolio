import React, { useState } from "react";
import { motion }  from 'framer-motion';
import emailjs from "@emailjs/browser";
import {
  PaddingContainer,
  Heading,
  HighlightText,
  FlexContainer,
  Button,
} from "../styles/Global.styled";
import {
  ContactForm,
  FormLabel,
  FormInput,
  ModalContainer,
  ModalContent,
  ModalButton,
} from "../styles/Footer.styled";
import { fadeInBottomVariant } from "../utils/Variants";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          reply_to: formData.email,
        },
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(() => {
        setIsModalVisible(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
      });
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <PaddingContainer id="Contact" top="5%" bottom="10%">
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
            onSubmit={handleSubmit}
            variants={fadeInBottomVariant}
            initial="hidden"
            whileInView="visible"
          >
            <PaddingContainer bottom="2rem">
              <FormLabel>Name:</FormLabel>
              <FormInput
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </PaddingContainer>

            <PaddingContainer bottom="2rem">
              <FormLabel>Email:</FormLabel>
              <FormInput
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </PaddingContainer>

            <PaddingContainer bottom="2rem">
              <FormLabel>Message:</FormLabel>
              <FormInput
                as="textarea"
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </PaddingContainer>

            <FlexContainer justify="center" responsiveFlex>
              <Button onClick={handleSubmit}>Send Message</Button>
            </FlexContainer>
          </ContactForm>

          {status && <p>{status}</p>}
        </FlexContainer>
      </PaddingContainer>

      {isModalVisible && (
        <ModalContainer>
          <ModalContent>
            <h3>Message Sent!</h3>
            <p>Your message has been successfully sent. We'll get back to you shortly.</p>
            <ModalButton onClick={closeModal}>Close</ModalButton>
          </ModalContent>
        </ModalContainer>
      )}
    </PaddingContainer>
  );
};

export default Footer;

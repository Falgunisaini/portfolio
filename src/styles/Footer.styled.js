import styled from "styled-components";

export const ContactForm = styled.form`
  width: 40%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 90%;
    margin: auto;
  }
`;

export const FormLabel = styled.p`
  color: ${({ theme }) => theme.colors.para_text_color};
  padding-bottom: 10px;
`;

export const FormInput = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary_light};
  border: 1px solid ${({ theme }) => theme.colors.para_text_color};
  color: ${({ theme }) => theme.colors.para_text_color};
  border-radius: 5px;
  padding: 15px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.para_text_color};
  }
`;

// export const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 1000;
//   backdrop-filter: blur(5px); /* Apply blur effect to background */
// `;

// export const ModalContent = styled.div`
//   background: white;
//   padding: 2rem;
//   border-radius: 8px;
//   text-align: center;
//   max-width: 400px;
//   width: 100%;
// `;

// export const ModalButton = styled.button`
//   padding: 0.5rem 1rem;
//   background: #007bff;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background: #0056b3;
//   }
// `;

// Modal Styling
export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);  
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(10px);  
`;

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  max-width: 400px;
  width: 90%;
  font-size: 0.9rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);  
  color: ${({ theme }) => theme.colors.black}; 
  font-family: ${({ theme }) => theme.fonts.family}; 
`;

export const ModalButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 1rem;
  font-family: ${({ theme }) => theme.fonts.family};  
  font-weight: ${({ theme }) => theme.fonts.weight.medium}; 
  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
  }
`;

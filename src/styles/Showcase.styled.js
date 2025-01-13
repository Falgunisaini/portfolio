import styled from "styled-components";

export const ShowcaseParticleContainer = styled.div`
  position: relative;
  flex: 1; 

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      margin-top: ${({ marginTop }) => marginTop};
      margin-left: ${({ marginLeft }) => marginLeft};
  }
`;

export const ShowcaseImageCard = styled.div`
  border: 1px solid white;
  width: 90%;
  height: auto;
  border-radius: 2rem;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  margin-top: -2rem;
`;

export const Particle = styled.img`
  position: absolute;
  top: ${({ top }) => top}; 
  left: ${({ left }) => left};
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
  transform: rotate(${({ rotate }) => rotate});
`
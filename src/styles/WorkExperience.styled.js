import styled from 'styled-components';

export const ExperienceContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    width: 100%;
    padding: 3rem 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        padding: 2rem 1rem;
        gap: 2rem;
    }
`;


export const LineDiv = styled.div`
    width: 2px;
    background-color: ${({ theme }) => theme.colors.secondary};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        left: 10%;
    }
`;


export const ExperienceItem = styled.div`
    position: relative; 
    width: 100%;
    display: flex;
    justify-content: ${({ position }) => (position === "left" ? "flex-end" : "flex-start")};
    align-items: center;
    padding: 2rem 5%;
    opacity: 1;
    transition: opacity 1s ease-in-out;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        flex-direction: column;
        align-items: center;
        padding: 1rem 2%;
    }

    &.visible {
        opacity: 0;
    }
`;


export const ContentBox = styled.div`
    max-width: 500px;
    padding: 1.5rem;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
    text-align: ${({ position }) => (position === "left" ? "right" : "left")};
    z-index: 1;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        max-width: 90%;
        text-align: center;
        padding-left: 5rem;
    }
`;

export const Indicator = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.primary};
    border: 3px solid white;
    border-radius: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 15;

    &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
        cursor: pointer;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        left: 10%;
    }
`;
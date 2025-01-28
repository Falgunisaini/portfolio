import styled from 'styled-components';

export const SkillsCardContainer= styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 2rem;
    padding: 0 5%;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: ${({ responsiveFlex }) => responsiveFlex};
        flex-direction: ${({ responsiveDirection }) => responsiveDirection};
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.small}) {
        display: block;
    }
`

export const SkillsCard = styled.div`
    width: 150px;
    height: 170px;
    border: 1px solid #fff;
    padding: 1rem 0;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary};
    justify-content: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-top: ${({ marginTop }) => marginTop};
        width: 100%;
        margin-top: 2rem;
    }
    
`
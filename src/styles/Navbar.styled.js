import styled from "styled-components";

export const NavbarContainer = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 100;
    transition: all 0.3s ease-in;
    background-color: ${({ bgColor }) => bgColor};
    padding: 1rem 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`

export const Logo = styled.p`
    font-size: 1.7rem;
    font-weight: ${({ theme }) => theme.fonts.weight.medium};
    color: white;
`

export const MenuIcon = styled.a`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.6rem;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
`

export const NavMenuContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
`

export const MenuItem = styled.a`
    color: #fff;
    font-size: 2rem;
    margin-top: 3rem;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        color: ${({ theme }) => theme.colors.secondary};
    }
`
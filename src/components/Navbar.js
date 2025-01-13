import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import global styles
import {
    PaddingContainer,
    FlexContainer,
    Container,
    HighlightText
} from '../styles/Global.styled';

// Import Navbar styles
import {
    NavbarContainer,
    Logo,
    MenuIcon
} from '../styles/Navbar.styled';

import { GiHamburgerMenu } from 'react-icons/gi';
import { theme } from '../utils/Theme';
import NavMenu from './layouts/NavMenu';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        // onScroll function
        const onScroll = () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    },[])

    return (
        <NavbarContainer bgColor={sticky ? theme.colors.primary : 'transparent'}>
            <PaddingContainer top="1.2rem" bottom="1.2rem">
                <Container responsiveLeft="1rem" responsiveRight="1rem">
                    <FlexContainer justify="space-between" responsiveFlex>
                        {/* Left logo */}
                        <Logo>
                            F<HighlightText>S</HighlightText>
                        </Logo>

                        {/* Right menu icon */}
                        <MenuIcon 
                            as={motion.a}
                            whileHover={{ scale: 1.2  }}
                            onClick={() => { setOpenMenu(true) }}
                        >
                            <GiHamburgerMenu size={30} color={theme.colors.white} />
                        </MenuIcon>
                    </FlexContainer>
                </Container>

            <AnimatePresence>
                {openMenu && <NavMenu setOpenMenu={setOpenMenu} />}
            </AnimatePresence>
            
            </PaddingContainer>
        </NavbarContainer>
    )
}

export default Navbar

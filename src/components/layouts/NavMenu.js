import React from 'react';
import { motion } from 'framer-motion';

// Import global styles
import {
    PaddingContainer,
    FlexContainer
} from '../../styles/Global.styled';

import { AiOutlineClose } from 'react-icons/ai';
import { navLinks } from '../../utils/Data';

//Import Navbar styles
import {
    MenuIcon,
    NavMenuContainer,
    MenuItem
} from '../../styles/Navbar.styled';

import { slideInLeft } from '../../utils/Variants';

const NavMenu = ({ setOpenMenu }) => {
    return (
        <NavMenuContainer
            as={motion.div}
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
        >
            {/* Close button */}
            <PaddingContainer left="5%" right="7%" top="2rem">
                <FlexContainer justify="flex-end" responsiveFlex>
                    <MenuIcon
                        as={motion.a}
                        whileHover={{ scale: 1.2 }}
                        onClick={() => { setOpenMenu(false) }}
                    >
                        <AiOutlineClose size={30} color="white" />
                    </MenuIcon>
                </FlexContainer>
            </PaddingContainer>

            {/* menu items */}
            <PaddingContainer top="8%">
                <FlexContainer responsiveDirection="column" direction="column" align="center" responsiveFlex>

                    {navLinks.map((link) => (
                        <MenuItem
                            as={motion.a}
                            whileHover={{ scale: 1.2 }}
                            key={link.id}
                            href={`#${link.href}`}
                            onClick={() => setOpenMenu(false)}>
                            {link.name}
                        </MenuItem>
                    ))}

                </FlexContainer>
            </PaddingContainer>
        </NavMenuContainer>
    )
}

export default NavMenu

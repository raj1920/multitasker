import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalstyle';
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink
} from './NavbarElement';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const [click,
    setClick] = useState(false);
  const [button,
    setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 768) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <IconContext.Provider value={{ color: '#7FCE06' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
              <NavIcon />
              Multitasker
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click
                ? <FaTimes />
                : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='post'
                  smooth={true} duration={500} spy={true}
                  exact='true' offset={-80}
                  onClick={closeMobileMenu} >
                  Post a Task
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='catogeries'
                  smooth={true} duration={500} spy={true}
                  exact='true' offset={-80}
                  onClick={closeMobileMenu}>
                  Catogeries
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='task'
                  smooth={true} duration={500} spy={true}
                  exact='true' offset={-80}
                  onClick={closeMobileMenu} >
                  Browse Tasks
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='works'
                  smooth={true} duration={500} spy={true}
                  exact='true' offset={-80}
                  onClick={closeMobileMenu}>
                  How it Works
                </NavLinks>

              </NavItem>
              {/* <NavItem>
                        <NavLinks to='works' onClick={closeMobileMenu}>
                          
                        </NavLinks>

                    </NavItem> */}


              <NavItemBtn>
                {button
                  ? (
                    <NavBtnLink to='tasker'
                    smooth={true} duration={500} spy={true}
                    exact='true' offset={-80}
                    >
                      <Button primary>Become a tasker</Button>
                    </NavBtnLink>
                  )
                  : (
                    <NavBtnLink to='tasker'
                    smooth={true} duration={500} spy={true}
                    exact='true' offset={-80}
                    >
                      <Button onClick={closeMobileMenu} fontBig primary>
                        Become a tasker
                      </Button>
                    </NavBtnLink>
                  )}
                {/* <img
                            src="/images/homepage/google-play.svg"
                            alt="Google play"
                            loading="lazy"
                            height="32"
                            width="110"></img> */}
              </NavItemBtn>

            </NavMenu>

          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalstyle';
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

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

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

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
              <NavIcon />
              Multitasker
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='post'onClick={closeMobileMenu}>
                  Post a Task
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='catogeries'onClick={closeMobileMenu} >
                  Catogeries
                </NavLinks>
               </NavItem>
              <NavItem>
                <NavLinks to ='task'onClick={closeMobileMenu}>
                  Browse Tasks
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='works' onClick={closeMobileMenu}>
                  How it Works
                </NavLinks>
               
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/tasker'>
                    <Button primary>Become a tasker</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/tasker'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      Become a tasker
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

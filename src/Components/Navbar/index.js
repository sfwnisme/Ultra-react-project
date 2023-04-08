import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { NavbarSection, Logo, LogoText, UlList, ListItem, Anchor, NavbarLink } from './style'
import './style.js'



const Navbar = () => {
  return (
    <NavbarSection>
      <div className="container">
        <Logo>
          <LogoText>Ultra Profile</LogoText>
        </Logo>
        <UlList>
          <ListItem><NavbarLink to="/">Homme</NavbarLink></ListItem>
          <ListItem><Anchor>Work</Anchor></ListItem>
          <ListItem><Anchor>Portfolio</Anchor></ListItem>
          <ListItem><Anchor>Resume</Anchor></ListItem>
          <ListItem><Anchor>About</Anchor></ListItem>
          <ListItem><NavbarLink to="/contact">Contact</NavbarLink></ListItem>
        </UlList>
      </div>
    </NavbarSection>
  );
}

export default Navbar;

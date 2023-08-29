import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Nav from "./Nav"

import img1 from "../assets/logo.png"

const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
           <img src={img1} alt="my logo png" />
        </NavLink>

        <Nav />
        
    </MainHeader>
  )
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;

export default Header
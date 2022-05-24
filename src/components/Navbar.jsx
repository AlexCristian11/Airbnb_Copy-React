import React from 'react'
import styled from 'styled-components';
import logo from '../img-src/airbnb-logo.png';

function Navbar() {
  return (
    <NavbarStyle>
        <img src={logo} alt="logo" />
    </NavbarStyle>
  )
}

const NavbarStyle = styled.div`
    img {
        width: 100px;
        margin-left: 40px;
    }
    display: flex;
    align-items: center;
    height: 80px;
    box-shadow: 0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1);

`

export default Navbar
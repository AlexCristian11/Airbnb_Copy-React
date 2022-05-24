import React from 'react';
import styled from 'styled-components';
import hero from '../img-src/hero.webp';

function Hero() {
  return (
    <HeroStyle>
        <img src={hero} alt="hero" />
        <h1>Online Experiences</h1>
        <h3>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h3>
    </HeroStyle>
  )
}

const HeroStyle = styled.div`
    display: flex;
    flex-direction: column;
    img {
        width: 40%;
        margin: 0 auto;
        margin-top: 3rem;
    }

    h3 {
        max-width: 350px;
        margin: 0 0 1rem 2rem;
        color: #222222;
        font-weight: 400;
    }

    h1 {
        padding: 2rem;
        font-weight: 600;
        font-size: 2.5rem;
    }
`

export default Hero
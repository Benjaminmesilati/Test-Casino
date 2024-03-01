import React from 'react';
import styled from 'styled-components';
import Logo from 'path/to/Logo.png'; // Import the path to your Logo.png file

const Buttons = styled.div`
  /* ... (unchanged styles) */
`;

const Welcome = styled.div`
  /* ... (unchanged styles) */

  & img {
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    width: 100px;
    height: 100px;
    top: 0;
    right: 0;
    &:nth-child(1) {animation-delay: 0s;}
    &:nth-child(2) {animation-delay: 1s;}
  }

  & > div {
    padding: 0px;
  }
  @media (min-width: 800px) {
    /* ... (unchanged styles) */
  }
`;

export function WelcomeBanner() {
  return (
    <Welcome>
      <img src={Logo} alt="Logo" />
      <div>
        <h1>Welcome to Gamba v2 👋</h1>
        <p>
          A fair, simple and decentralized casino on Solana.
        </p>
      </div>
      <Buttons>
        <button onClick={() => window.open('https://v2.gamba.so/', '_blank')}>
          🚀 Add Liquidity
        </button>
        <button onClick={() => window.open('https://github.com/gamba-labs/gamba', '_blank')}>
          👨‍💻 Build your own
        </button>
        <button onClick={() => window.open('https://discord.gg/HSTtFFwR', '_blank')}>
          💬 Discord
        </button>
      </Buttons>
    </Welcome>
  );
}

import React from 'react';
import styled from 'styled-components';
import { EmailSignaturePage } from '../pages/emailSignature';
import { Header } from '../modules/header';
import { Footer } from '../modules/footer';

const StyledAppWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  /* react-grid-layout-overrides.css */
  & .react-grid-item.react-grid-placeholder {
    border-radius: 4px;
    border: 1px dashed grey; 
  }
`;

function App() {
  return (
    <StyledAppWrapper>
      <Header title="Broccoli &amp; Co" />
        <EmailSignaturePage />
      <Footer company="Broccoli" address="1 Queen St, Melbourne"/>
    </StyledAppWrapper>


  );
}

export default App;

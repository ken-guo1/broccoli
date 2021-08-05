import styled from 'styled-components';
import { Button } from '../../ui/button';
import { useModal } from '../../hooks/useModal';
import React, { FunctionComponent } from 'react';
import { Modal } from '../../modules/modal';
import { EmailInvitationModal } from '../../modules/emailInvitationModal';

const PageWrapper = styled.div`
display: flex;
display: flex;
flex: 1;
flex-direction: column;
`;
const BodyWrapper = styled.div`
  height: 100%;
  color: grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 4px solid #ddd;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  align-items: center;
  text-align: center;
  padding: 0 1rem;
`;
const HeadingWrapper = styled.span`
  width: 18rem;
  heght: 1.5rem;
  font-size: 1.8rem;
  font-weight: 4;
  padding-bottom: 1rem;
`;
const ContentWrapper = styled.span`
width: 18rem;
heght: 1.5rem;
font-size: 0.8rem;
padding-bottom: 1rem;
`;
const ButtonWrapper = styled.span`
width: 8rem;
heght: 1.5rem;
font-size: 0.8rem;
`;

export const EmailInvitationPage:FunctionComponent = () => {
  const { isShown, toggle } = useModal();
  
  return (
    <BodyWrapper>
      <HeadingWrapper>
        A better way to enjoy every day 
      </HeadingWrapper>
      <ContentWrapper>
        Be the first to know when we launch
      </ContentWrapper>
      <ButtonWrapper>
        <Button onClick={toggle} title = "Request an invite" alignment="center" isLoading />
      </ButtonWrapper>
      <Modal headerText="" isShown={isShown} hide={toggle} modalContent= {
          <EmailInvitationModal message="Send an invite" onSend={toggle} />
      } />
    </BodyWrapper>
    
  );
}
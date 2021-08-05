import React, { FunctionComponent, useEffect } from 'react';
import validator from 'validator';
import styled from 'styled-components';
import { Button } from '../../ui/button';
import  {useApiService, BodyData}  from '../../hooks/useApiService';

export const ContentInput = styled.input`
  display: flex;
  justify-content: center;
  width: 90%;
  border: 3px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem;
`;
export const ConfirmationButtons = styled.div`
  display: flex;
  justify-content: center;
  padding-top:2rem;
`;
export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 0.4rem;

`;
export const Message = styled.div`
  font-size: 1rem;
  color: grey;
  font-weight: 500;
  text-align: center;
`;
export const Dividend = styled.div`
background-color: grey;
color:grey;
height: 1px;
width: 13%;
margin: 1rem auto 0;
margin-bottom: 1rem;
border-bottom: solid;
justify-content: center;
`;
export const ErrorWrapper = styled.div`
color: red;
justify-content: center;
padding: 1rem;
flex: center;
`;

interface EmailInvitationModalProps {
  onSend: () => void;
  message: string;
}

export const EmailInvitationModal: FunctionComponent<EmailInvitationModalProps> = (props) => {
  const [isSucceed, setIsSucceed] = React.useState<boolean>(false);
  const [nameValue, setNameValue] = React.useState('');
  const [emailValue, setEmailValue] = React.useState('');
  const [repeatEmailValue, setRepeatEmailValue] = React.useState('');
  const [errorValue, setErrorValue] = React.useState('');
  const [sendInvite, response, error, isLoading] = useApiService();  
  const { onSend } = props;

  useEffect(() => {
    if(errorValue) return;
    if(error){
      setErrorValue(error);
    } else {
      setErrorValue("");
    }
    if(!isLoading && !error && !errorValue){
      setIsSucceed(true);
    }



  },[isLoading,error,errorValue])

  const sendEmailInvite = () =>{
    if(!nameValue || !emailValue || !repeatEmailValue){
      setErrorValue("All fields are required.");
      return;
    }
    if(!validator.isEmail(emailValue)){
      setErrorValue("Not a correct email format.");
      return;
    }
    if(emailValue !== repeatEmailValue){
      setErrorValue("Two emails are not matching");
      return;       
    }
    let inputBody:BodyData = {
      name:nameValue,
      email: emailValue
    };
    sendInvite(inputBody);
    // if(error){
    //   setErrorValue(error);
    //   return;
    // }
    // setErrorValue("");
    return;
  }


  const handleFullNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setNameValue(newValue);
  };  
  const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setEmailValue(newValue);
  };  
  const handleRepeatEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setRepeatEmailValue(newValue);
  };
  //const handleOnClick = () => toggle();
  const succeedContent = (
    <React.Fragment>
      <ContentWrapper>
        Please wait for our update. Thanks!
      </ContentWrapper>
      <ConfirmationButtons>
        <Button onClick={onSend} title="Ok" />
      </ConfirmationButtons>
    </React.Fragment>     
  );
  return (
    <React.Fragment>
      <Message>{!isSucceed? props.message: "All done"}</Message>
      <Dividend />
      {(!isSucceed) && (<ContentWrapper>
        <ContentInput onChange={handleFullNameChange} placeholder="Full Name"></ContentInput>
      </ContentWrapper>)}
      {(!isSucceed) && (<ContentWrapper>
        <ContentInput onChange={handleEmailChange} placeholder="Email"></ContentInput>
      </ContentWrapper>)}
      {(!isSucceed) && (<ContentWrapper>
        <ContentInput onChange={handleRepeatEmailChange} placeholder="Confirm email"></ContentInput>
      </ContentWrapper>)}
      {(!isSucceed) && (<ConfirmationButtons>
        <Button onClick={sendEmailInvite} title="Send" />
      </ConfirmationButtons>)}
      {!isSucceed || succeedContent}

      <ErrorWrapper>
        {errorValue}
      </ErrorWrapper>
    </React.Fragment>
  );
};
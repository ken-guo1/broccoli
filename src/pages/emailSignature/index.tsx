import styled from 'styled-components';
import { Button } from '../../ui/button';
import React, { FunctionComponent } from 'react';
import { GoogleLogin, GoogleLogout, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';


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
const ContentInput = styled.input`
  display: flex;
  justify-content: center;
  width: 90%;
  border: 3px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem;
`;
const ConfirmationButtons = styled.div`
  display: flex;
  justify-content: center;
  padding-top:2rem;
`;
const ErrorWrapper = styled.div`
color: red;
justify-content: center;
padding: 1rem;
flex: center;
`;
const UpdatedWrapper = styled.div`
color: green;
justify-content: center;
padding: 1rem;
flex: center;
`;

export const EmailSignaturePage:FunctionComponent = () => {
  const [isLogined, setIslogined] = React.useState<boolean>(false);
  const [signatureValue, setSignatureValue] = React.useState('');
  const [errorValue, setErrorValue] = React.useState('');
  const [updatedValue, setUpdatedValue] = React.useState('');
  const [accessTokenValue, setAccessTokenValueValue] = React.useState('');
  const scope: string = 'https://www.googleapis.com/auth/gmail.settings.basic';
  


  const updateEmailSignature = async () =>{
    setErrorValue("");
    try {
      const res:Response = await fetch("http://localhost:8000/api/auth/google", {
        method: "POST",
        body: JSON.stringify({
        access_token: accessTokenValue,
        signature:signatureValue
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const resBody = await res.json();
      console.log(`resBody ${resBody}`);
      setUpdatedValue(resBody);
    } catch (err) {
      setErrorValue("something wrong");
    }

  } 
  const handleFail = (err:any) => {
    setUpdatedValue("");
    setErrorValue("something wrong");
    console.log(err);
  }
  const handleAfterVerification = (response:GoogleLoginResponse | GoogleLoginResponseOffline) => {  
    const loginRes = response as GoogleLoginResponse;
    setAccessTokenValueValue(loginRes.accessToken);
    setIslogined(true);
    setErrorValue("");
  }
  const handleLogout = async() => {
    setUpdatedValue("");
    setIslogined(false);   
  }
  const handleSignatureChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setSignatureValue(newValue);
  };  
  return (
    <BodyWrapper>
      <HeadingWrapper>
        A better way to enjoy every day 
      </HeadingWrapper>
      <ContentWrapper>
        Be the first to know when we launch
      </ContentWrapper>
      <ButtonWrapper>

      </ButtonWrapper>
      {(!isLogined) && (<GoogleLogin
        clientId="331220964918-gbd984jp10kl785fn0qio0an23eaoaj7.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={handleAfterVerification}
        onFailure={handleFail}
        cookiePolicy={'single_host_origin'}
        scope={scope}
      />)}
      {(isLogined) && (<ContentWrapper>
        <ContentInput onChange={handleSignatureChange} placeholder="New Signature"></ContentInput>
        </ContentWrapper>)}
      {(isLogined) && (<ConfirmationButtons>
        <Button onClick={updateEmailSignature} title="Send" />
        </ConfirmationButtons>)}       
      {(isLogined) && (<GoogleLogout
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={handleLogout}
        />)}
      {(isLogined) && (<UpdatedWrapper>
        {updatedValue}
        </UpdatedWrapper>)}  
      <ErrorWrapper>
        {errorValue}
      </ErrorWrapper>
    </BodyWrapper>
    
  );
}
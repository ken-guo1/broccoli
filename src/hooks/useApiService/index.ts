import React, { useEffect } from 'react'
import axios from 'axios'

export interface BodyData {
  email: string,
  name: string
}

export const useApiService = ():  [(body:BodyData) => void, string | null, string | null, boolean] => {
  const baseUrl = 'https://us-central1-blinkapp-684c1.cloudfunctions.net/fakeAuth';
  const [response, setResponse] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [inputBody, setInputBody] = React.useState<BodyData | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  useEffect(() => {
    const postInvite = async (): Promise<void> => {
      try {
        const res = await axios.post(`${baseUrl}`,{
            name:inputBody?.name,
            email:inputBody?.email
        })
        setResponse(res.data)
        setError("");
        setIsLoading(false);
      } catch (error) {
        setError(error.response.data.errorMessage);
        setIsLoading(false);
      }
    }
    if(!inputBody) return;
    postInvite();
  } , [inputBody]);
  
  const sendInvite = (body:BodyData):void =>{
    setInputBody(body);
  } 
  return [sendInvite, response, error,isLoading ];
}
//import styled from 'styled-components';
import styled from 'styled-components';
const FooterWrapper = styled.div`
  height: 3.7rem;
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
const ContentWrapper = styled.span`
  width: 12rem;
  heght: 1.5rem;
`;

export interface FooterProps {
    children?: JSX.Element | string;
    company?: string;
    address?: string;
    isLoading?: boolean;
    isSubmit?: boolean;
    alignment?: 'flex-start' | 'center' | 'flex-end';
}

export const Footer = (props: FooterProps) => {
    const { company, address } = props;
    return (
        <FooterWrapper>
            <ContentWrapper>{company}</ContentWrapper>
            <ContentWrapper>{address}</ContentWrapper>
        </FooterWrapper>
    )
      
}
//import styled from 'styled-components';
import styled from 'styled-components';
const HeaderWrapper = styled.div`
  height: 3.7rem;
  color: grey;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 4px solid #ddd;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  align-items: center;

  padding: 0 1rem;
`;
export interface HeaderProps {
    children?: JSX.Element | string;
    title?: string;
    isLoading?: boolean;
    isSubmit?: boolean;
    alignment?: 'flex-start' | 'center' | 'flex-end';
  }

export const Header = (props:HeaderProps) => {
  const { title } = props;
  return (
    <HeaderWrapper>
      {title}
    </HeaderWrapper>
  )
}
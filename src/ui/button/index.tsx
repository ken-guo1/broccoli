import React, { Fragment } from 'react';
import styled  from 'styled-components';


export interface ButtonProps {
  children?: JSX.Element | string;
  innerClassName?: string;
  isDisabled?: boolean;
  title?: string;
  isLoading?: boolean;
  isFluid?: boolean;
  isSubmit?: boolean;
  alignment?: 'flex-start' | 'center' | 'flex-end';
  onClick?: (...args: any) => void;
}

const StyledButton = styled.button<ButtonProps>`
  padding: 0;
  height: 2.875rem;
  overflow: hidden;
  width: 6rem;
  border: 2px solid #ddd;
  border-radius: 5px;
  background-color:white;
  font-size: 0.8rem;
  font-weight: 1;
  color: #aaa;
  cursor: pointer;
  position: relative;
  transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease, opacity 2s ease;
  user-select: none;
  &:focus {
    outline: none;
  }
`;

const Hidden = styled.div`
  display: inline-block;
  visibility: hidden;
`;

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;



const CenterWrapper = styled.div<{alignment?: 'flex-start' | 'center' | 'flex-end'}>`
  display: flex;
  justify-content: ${props => props.alignment || 'center'};
  align-items: center;
  width: 100%;
  flex-shrink: 1;
`;

const ChildrenWrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const Button = (props: ButtonProps) => {
  const {
    children,
    innerClassName,
    isDisabled,
    isLoading,
    onClick,
    isSubmit,
    title,
    alignment,
    ...restProps
  } = props;

  const innerContent = (
    <ContentWrapper>
      <CenterWrapper alignment={alignment}>
        {children && (
          <ChildrenWrapper>
            <div className={innerClassName}>{children}</div>
          </ChildrenWrapper>
        )}
      </CenterWrapper>
    </ContentWrapper>
  );

  return (
    <StyledButton
      title={title}
      onClick={onClick}
      isDisabled={isDisabled}
      isLoading={isLoading}
      type={isSubmit ? 'submit' : undefined}
      {...restProps}
    >
      <Fragment>
        {title}
      </Fragment>
    </StyledButton>
  );
};

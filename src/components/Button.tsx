import * as React from 'react';
import styled from './theme';

const StyledButton = styled.button`
  cursor: pointer;
  background-color: #90ddff;
  color: #003366;
  display: inline-block;
  padding: 0 10px;
  vertical-align: middle;
  min-width: 30px;
  min-height: 30px;
  line-height: 30px;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
  border: none;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #9be8ff;
  }
  &:active {
    background-color: #a7f4ff;
  }
  &:disabled {
    background-color: #efefef;
    color: #b8b8b8;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

export interface Props {
  onClick?(): void;
  className?: string;
  disabled?: boolean;
}

const Button: React.StatelessComponent<Props> = (props) => {
  const { className, onClick } = props;
  return (
    <StyledButton
      className={className}
      onClick={onClick}
      disabled={props.disabled}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;

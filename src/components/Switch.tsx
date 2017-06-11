import * as React from 'react';
import styled from './theme';

const Input = styled.input`
`;

export interface Props {
  onChange?(value: boolean): void;
  className?: string;
  disabled?: boolean;
}

const Switch: React.StatelessComponent<Props> = (props) => {
  const { className } = props;
  return (
    <Input
      className={className}
      type="checkbox"
      disabled={props.disabled}
    />
  );
};

export default Switch;

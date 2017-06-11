import * as React from 'react';
import styled from './theme';

const StyledSpan = styled.span`
`;

export interface Props {
  className?: string;
}

const Icon: React.StatelessComponent<Props> = (props) => {
  const { className } = props;
  return (
    <StyledSpan className={className} />
  );
};

export default Icon;

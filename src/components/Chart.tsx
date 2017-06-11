import * as React from 'react';
import styled from './theme';

const Container = styled.div`
`;

export interface Props {
  className?: string;
}

const Chart: React.StatelessComponent<Props> = (props) => {
  const { className } = props;
  return (
    <Container className={className} />
  );
};

export default Chart;

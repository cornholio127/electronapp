import * as React from 'react';
import styled from './theme';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export interface Props<E> {
  className?: string;
  columns: number;
  items: E[];
  renderItem(item: E): JSX.Element;
}

const Grid: React.StatelessComponent<Props<{}>> = (props) => {
  const { className, columns, items, renderItem } = props;
  const style = { width: (100 / columns) + '%' };
  const rendered: JSX.Element[] = items.map((item) =>
    <div style={style}>{renderItem(item)}</div>);
  return (
    <Container className={className}>{rendered}</Container>
  );
};

export default Grid;

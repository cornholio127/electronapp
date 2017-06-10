import * as React from 'react';
import Section from './Section';
import { Grid } from '../components';
import styled from '../components/theme';

const Item = styled.div`
  margin: 5px;
  padding: 10px;
  background-color: #efefef;
`;

const items: string[] = [ 'item 1', 'item 2', 'item 3', 'item 4', 'item 5',
  'item 6', 'item 7', 'item 8' ];

function renderItem(item: string): JSX.Element {
  return <Item>{item}</Item>;
}

const GridGuide = () => (
  <Section title="Grid" description="A grid.">
    <Grid columns={3} items={items} renderItem={renderItem}/>
  </Section>
);

export default GridGuide;

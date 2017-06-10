import * as React from 'react';
import styled from '../components/theme';

const StyledSection = styled.section`

`;

const Title = styled.h2`

`;

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 0.6;
`;

const Description = styled.div`
  flex: 0.4;
`;

export interface Props {
  title: string;
  description: string;
}

const Section: React.StatelessComponent<Props> = (props) => (
  <StyledSection>
    <Title>{props.title}</Title>
    <Container>
      <Content>{props.children}</Content>
      <Description>{props.description}</Description>
    </Container>
  </StyledSection>
);

export default Section;

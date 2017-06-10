import * as React from 'react';
import Section from './Section';
import { Button } from '../components';

const ButtonGuide = () => (
  <Section title="Button" description="A button.">
    <table>
      <tbody>
        <tr>
          <td><Button>Button</Button></td>
          <td><Button disabled>Button</Button></td>
        </tr>
      </tbody>
    </table>
  </Section>
);

export default ButtonGuide;

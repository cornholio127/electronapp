import * as React from 'react';
import ButtonGuide from './ButtonGuide';
import ChartGuide from './ChartGuide';
import GridGuide from './GridGuide';
import IconGuide from './IconGuide';
import RadioMenuGuide from './RadioMenuGuide';
import SwitchGuide from './SwitchGuide';
import TreeGuide from './TreeGuide';
import Fonts from './Fonts';
import Colors from './Colors';
import Icons from './Icons';

const Guide = () => (
  <div>
    <h1>Style Guide</h1>
    <Fonts />
    <Colors />
    <Icons />
    <h1>Component Guide</h1>
    <ButtonGuide />
    <IconGuide />
    <SwitchGuide />
    <RadioMenuGuide />
    <GridGuide />
    <TreeGuide />
    <ChartGuide />
  </div>
);

export default Guide;

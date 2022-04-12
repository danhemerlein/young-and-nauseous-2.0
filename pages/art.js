import React, { useState } from 'react';

import { FlexContainer, P } from 'react-yan';
import styled from 'styled-components';
import { Tabs, Tab } from '@mui/material';

import musicData from '../data/music';

const Paragraph = styled(P)`
  color: ${({ theme }) => {
    return theme.light.dark;
  }};
`;

const Container = styled(FlexContainer)`
  max-width: 500px;
`;

const StyledTab = styled(Tab)`
  color: ${({ theme }) => {
    return theme.light.dark;
  }};
`;

const TabPanel = styled.div`
  color: ${({ theme }) => {
    return theme.light.dark;
  }};
`;

const Art = () => {
  const { data } = musicData;

  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <Paragraph>art</Paragraph>
    </div>
  );
};

export default Art;

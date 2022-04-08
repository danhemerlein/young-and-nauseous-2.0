import React, { useState } from 'react';
import Image from 'next/image';
import { FlexContainer, P } from 'react-yan';
import styled from 'styled-components';
import { Tabs, Tab } from '@mui/material';

import musicData from './data/music';

const Paragraph = styled(P)`
  color: ${({ theme }) => {
    return theme.light.light;
  }};
`;

const Container = styled(FlexContainer)`
  max-width: 500px;
`;

const StyledTab = styled(Tab)`
  color: ${({ theme }) => {
    return theme.light.light;
  }};
`;

const TabPanel = styled.div`
  color: ${({ theme }) => {
    return theme.light.light;
  }};
`;

const Music = () => {
  const { data } = musicData;

  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <Paragraph>music</Paragraph>
      {data.map((release) => {
        return (
          <Container direction="column">
            <FlexContainer justify="space-between">
              <Paragraph>{release.title}</Paragraph>
              <Paragraph>{release.releaseData}</Paragraph>
            </FlexContainer>

            <Image
              src={release.artwork}
              alt={release.artworkAlt}
              width={500}
              height={500}
            />

            <Tabs value={selectedTab} onChange={handleChange}>
              <StyledTab label="streaming" />
              <StyledTab label="purchase" />
            </Tabs>

            {selectedTab === 0 && (
              <TabPanel value={selectedTab} index={0}>
                {release.links.streaming.map((item) => {
                  return <Paragraph>{item.service}</Paragraph>;
                })}
              </TabPanel>
            )}

            {selectedTab === 1 && (
              <TabPanel value={selectedTab} index={1}>
                {release.links.purchase.map((item) => {
                  return <Paragraph>{item.service}</Paragraph>;
                })}
              </TabPanel>
            )}
          </Container>
        );
      })}
    </div>
  );
};

export default Music;

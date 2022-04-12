import { useState } from 'react';
import Footer from 'components/Footer/Footer';
import Image from 'next/image';
import { FlexContainer, P } from 'react-yan';
import styled from 'styled-components';
import { Tabs, Tab } from '@mui/material';
import { Paragraph } from 'styles/elements/typography';

import musicData from 'data/music';

const Container = styled(FlexContainer)`
  max-width: 500px;
`;

const StyledTab = styled(Tab)`
  p {
    text-transform: lowercase;
  }
`;

const TabPanel = styled.div`
  color: ${({ theme }) => {
    return theme.foreground;
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
              <StyledTab label={<Paragraph>streaming</Paragraph>} />
              <StyledTab label={<Paragraph>purchase</Paragraph>} />
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
      <Footer />
    </div>
  );
};

export default Music;

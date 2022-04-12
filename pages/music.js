import { useState } from 'react';
import Footer from 'components/Footer/Footer';
import Image from 'next/image';
import { FlexContainer } from 'react-yan';
import styled from 'styled-components';
import { Tabs, Tab } from '@mui/material';
import { Paragraph, HeadlineOne } from 'styles/elements/typography';
import { remHelper } from 'styles/mixins';

import musicData from 'data/music';

const Container = styled(FlexContainer)`
  margin-top: ${remHelper[16]};
  max-width: 500px;
`;

const TitleContainer = styled(FlexContainer)`
  margin-bottom: ${remHelper[8]};
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
    <main>
      <HeadlineOne>music</HeadlineOne>
      {data.map((release) => {
        return (
          <Container direction="column">
            <TitleContainer justify="space-between">
              <Paragraph>{release.title}</Paragraph>
              <Paragraph>{release.releaseData}</Paragraph>
            </TitleContainer>

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
    </main>
  );
};

export default Music;

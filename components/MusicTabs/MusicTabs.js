import { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import { A } from 'react-yan';
import styled from 'styled-components';

import { remHelper } from 'styles/mixins';
import { Paragraph } from 'styles/elements/typography';

const TabWrapper = styled.div`
  margin: 0 auto;
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

  margin-top: ${remHelper[8]};
`;

const MusicTabs = ({ streaming, purchase }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <TabWrapper>
      <Tabs value={selectedTab} onChange={handleChange}>
        <StyledTab label={<Paragraph>streaming</Paragraph>} />
        <StyledTab label={<Paragraph>purchase</Paragraph>} />
      </Tabs>

      {selectedTab === 0 && (
        <TabPanel value={selectedTab} index={0}>
          {streaming.map((item) => {
            return (
              <Paragraph>
                <A href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.service}
                </A>
              </Paragraph>
            );
          })}
        </TabPanel>
      )}

      {selectedTab === 1 && (
        <TabPanel value={selectedTab} index={1}>
          {purchase.map((item) => {
            return (
              <Paragraph>
                <A href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.service}
                </A>
              </Paragraph>
            );
          })}
        </TabPanel>
      )}
    </TabWrapper>
  );
};

export default MusicTabs;

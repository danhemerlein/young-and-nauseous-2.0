import { useState } from 'react';
import { Tabs, Tab } from '@mui/material';

import styled from 'styled-components';
import { FlexContainer, P, A } from 'react-yan';

import { PageHeadline, Paragraph } from 'styles/elements/typography';
import { remHelper } from 'styles/mixins';
import linkzData from 'data/linkz';

const Container = styled.div`
  background: #000;
`;

const H1 = styled(PageHeadline)`
  color: #fff;
`;

const StyledTab = styled(Tab)`
  p {
    color: #fff;
    text-transform: lowercase;
  }
`;

const TabPanel = styled.div`
  color: #fff;

  margin-top: ${remHelper[8]};
`;

const TabContainer = styled(FlexContainer)`
  width: 100%;
  button {
    width: 250px;
  }
`;

const Linkz = () => {
  const { socialsData } = linkzData;

  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Container>
      <H1 textAlign="center">linkz</H1>

      <Tabs value={selectedTab} onChange={handleChange}>
        {/* <TabContainer direction="column" justify="center" items="center"> */}
        <StyledTab label={<Paragraph>rasberry vines</Paragraph>} />
        <StyledTab label={<Paragraph>jillian / mood ring</Paragraph>} />
        <StyledTab label={<Paragraph>bulletproof limousine</Paragraph>} />
        {/* </TabContainer> */}
      </Tabs>

      {selectedTab === 0 && (
        <TabPanel value={selectedTab} index={0}>
          <P>vines stuff</P>
        </TabPanel>
      )}

      {selectedTab === 1 && (
        <TabPanel value={selectedTab} index={1}>
          <P>jillian stuff</P>
        </TabPanel>
      )}

      {selectedTab === 2 && (
        <TabPanel value={selectedTab} index={2}>
          <P>limo stuff</P>
        </TabPanel>
      )}

      <FlexContainer direction="" justify="center" items="center">
        {socialsData.map((item) => {
          return (
            <P color="#fff">
              <A href={item.url} target="_blank" rel="noopener noreferrer">
                {item.name}
              </A>
            </P>
          );
        })}
      </FlexContainer>
    </Container>
  );
};

export default Linkz;

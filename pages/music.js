import React from 'react';
import Image from 'next/image';
import { FlexContainer, P } from 'react-yan';
import styled from 'styled-components';
import Tab from '@mui/material/Tab';

import musicData from './data/music';

const Paragraph = styled(P)`
  color: ${({ theme }) => {
    return theme.light.light;
  }};
`;

const Container = styled(FlexContainer)`
  max-width: 500px;
`;

const Music = () => {
  const { data } = musicData;
  console.log(data);
  return (
    <div>
      <Paragraph>music</Paragraph>
      {data.map((release) => {
        console.log(release.links.streaming);
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
            <Tab label="streaming" />
            <div index={0}>
              {/* {release.links.streaming.map((item) => {
                return <p>{item.service}</p>;
              })} */}
            </div>

            <Tab>purchase</Tab>
          </Container>
        );
      })}
    </div>
  );
};

export default Music;

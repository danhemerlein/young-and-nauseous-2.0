import React from 'react';
import Image from 'next/image';
import { FlexContainer, P } from 'react-yan';
import styled from 'styled-components';

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
        return (
          <Container direction="column">
            <FlexContainer justify="space-between">
              <Paragraph>{release.title}</Paragraph>
              <Paragraph>{release.releaseData}</Paragraph>
            </FlexContainer>
            <Image
              src={release.artwork}
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </Container>
        );
      })}
    </div>
  );
};

export default Music;

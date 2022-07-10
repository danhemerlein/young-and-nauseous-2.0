import { FlexContainer } from 'react-yan';
import styled from 'styled-components';
import { PageHeadline, Paragraph } from 'styles/elements/typography';
import { remHelper } from 'styles/mixins';

import musicData from 'data/music';
import MusicTabs from 'components/MusicTabs/MusicTabs';

const Container = styled(FlexContainer)`
  margin: ${remHelper[24]} auto;
  max-width: 500px;
`;

const TitleContainer = styled(FlexContainer)`
  margin-bottom: ${remHelper[8]};
`;

const StyledImg = styled.img`
  width: 100%;
`;

const Music = () => {
  const { data } = musicData;

  return (
    <main>
      <PageHeadline>music</PageHeadline>

      {data.map((release) => {
        return (
          <Container direction="column">
            <TitleContainer justify="space-between">
              <Paragraph>{release.title}</Paragraph>
              <Paragraph>{release.releaseData}</Paragraph>
            </TitleContainer>
            <StyledImg src={release.artwork} alt={release.artworkAlt} />
            <MusicTabs
              streaming={release.links.streaming}
              purchase={release.links.purchase}
            />
          </Container>
        );
      })}
      <Footer />
    </main>
  );
};

export default Music;

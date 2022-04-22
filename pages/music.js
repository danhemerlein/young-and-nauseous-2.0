import { FlexContainer } from 'react-yan';
import styled from 'styled-components';
import { Paragraph, HeadlineOne } from 'styles/elements/typography';
import { remHelper } from 'styles/mixins';

import musicData from 'data/music';
import Footer from 'components/Footer/Footer';
import MusicTabs from 'components/MusicTabs/MusicTabs';

const Container = styled(FlexContainer)`
  margin-top: ${remHelper[16]};
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const TitleContainer = styled(FlexContainer)`
  margin-bottom: ${remHelper[8]};
`;

const Music = () => {
  const { data } = musicData;

  return (
    <main>
      <HeadlineOne>music</HeadlineOne>
      {data.map((release) => {
        console.log(release.links.streaming);
        return (
          <Container direction="column">
            <TitleContainer justify="space-between">
              <Paragraph>{release.title}</Paragraph>
              <Paragraph>{release.releaseData}</Paragraph>
            </TitleContainer>
            <img
              src={release.artwork}
              alt={release.artworkAlt}
              width={500}
              height={500}
            />
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

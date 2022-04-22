import styled from 'styled-components';

import { HeadlineOne } from 'styles/elements/typography';
import Footer from 'components/Footer/Footer';
import { FlexContainer } from 'react-yan';
import { remHelper } from 'styles/mixins';
import artData from 'data/art';

const Container = styled.div`
  img {
    max-width: 750px;
    margin: 0 auto;
    display: block;
    margin-bottom: ${remHelper[16]};
  }
`;

const Inner = styled(FlexContainer)`
  height: 100%;
`;

const H1 = styled(HeadlineOne)`
  margin-bottom: ${remHelper[16]};
`;

const Art = () => {
  const { data } = artData;
  return (
    <Container direction="column">
      <Inner direction="column" justify="space-between">
        <main>
          <H1>album artwork & photography</H1>

          {data.map((item) => {
            return (
              <img src={item.url} alt={item.art} width="100%" height="100%" />
            );
          })}
        </main>
      </Inner>
      <Footer />
    </Container>
  );
};

export default Art;

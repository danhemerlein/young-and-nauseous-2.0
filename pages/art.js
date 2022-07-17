import styled from 'styled-components';

import { PageHeadline } from 'styles/elements/typography';
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

const Inner = styled(FlexContainer)`2
  height: 100%;
`;

const Art = () => {
  const { data } = artData;
  return (
    <Container direction="column">
      <Inner direction="column" justify="space-between">
        <main>
          <PageHeadline>artwork</PageHeadline>

          {data.map((item) => {
            return (
              <img
                key={item.url}
                src={item.url}
                alt={item.alt}
                width="100%"
                height="100%"
              />
            );
          })}
        </main>
      </Inner>
    </Container>
  );
};

export default Art;

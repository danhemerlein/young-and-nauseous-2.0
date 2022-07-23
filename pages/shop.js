import React from 'react';
import styled from 'styled-components';
import { FlexContainer } from 'react-yan';

import AppHead from 'components/AppHead';
import { HeadlineOne } from 'styles/elements/typography';

const Container = styled(FlexContainer)`
  height: calc(100vh - 20px);
  overflow: scroll;
`;

const Inner = styled(FlexContainer)`
  height: 100%;
  width: 100%;
`;

const Shop = () => {
  return (
    <>
      <AppHead />

      <Container>
        <Inner direction="column" justify="center" items="center">
          <main>
            <HeadlineOne textAlign="center">under construction</HeadlineOne>
            <HeadlineOne textAlign="center">coming soon</HeadlineOne>
          </main>
        </Inner>
      </Container>
    </>
  );
};

export default Shop;

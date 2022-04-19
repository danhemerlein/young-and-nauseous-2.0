import styled from 'styled-components';

import { HeadlineOne } from 'styles/elements/typography';
import Heart from 'components/assets/svg/Heart';
import Footer from 'components/Footer/Footer';
import { FlexContainer } from 'react-yan';

const Container = styled(FlexContainer)`
  height: calc(100vh - 20px);
  overflow: scroll;
`;

const Inner = styled(FlexContainer)`
  height: 100%;
`;

const Art = () => {
  return (
    <Container direction="column">
      <Inner direction="column" justify="space-between">
        <main>
          <HeadlineOne>art</HeadlineOne>
          <Heart width="140" height="140" fill="#C23B22" />
        </main>
      </Inner>
      <Footer />
    </Container>
  );
};

export default Art;

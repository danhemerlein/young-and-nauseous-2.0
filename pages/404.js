import styled from 'styled-components';
import Link from 'next/link';

import { FlexContainer } from 'react-yan';
import Heart from 'components/assets/svg/Heart';
import Footer from 'components/Footer/Footer';
import { HeadlineOne, StyledLink } from 'styles/elements/typography';

const Container = styled(FlexContainer)`
  height: calc(100vh - 20px);
  overflow: scroll;
`;

const Inner = styled(FlexContainer)`
  height: 100%;
`;

const Custom404 = () => {
  return (
    <Container direction="column">
      <Inner direction="column" justify="space-between">
        <main>
          <Link href="/" passHref>
            <StyledLink>
              <HeadlineOne>return home</HeadlineOne>
              <Heart width="140" height="140" fill="#C23B22" />
            </StyledLink>
          </Link>
        </main>
        <Footer />
      </Inner>
    </Container>
  );
};

export default Custom404;

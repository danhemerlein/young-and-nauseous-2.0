import styled from 'styled-components';
import Link from 'next/link';
import { FlexContainer } from 'react-yan';

import AppHead from 'components/AppHead';
import Heart from 'components/assets/svg/Heart';
import Bicycle from 'components/assets/svg/Bicycle';

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
    <>
      <AppHead />
      <Container iner direction="column">
        <Inner direction="column" justify="center" items="center">
          <main>
            <HeadlineOne textAlign="center">404 error</HeadlineOne>
            <Link href="/" as="/" passHref>
              <StyledLink>
                <HeadlineOne textAlign="center">return home</HeadlineOne>
                <Heart width="140" height="140" fill="#C23B22" />
                <Bicycle width="140" height="140" fill="#C23B22" />
              </StyledLink>
            </Link>
          </main>
        </Inner>
      </Container>
    </>
  );
};

export default Custom404;

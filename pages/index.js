import Link from 'next/link';
import styled from 'styled-components';
import { FlexContainer } from 'react-yan';

import AppHead from 'components/AppHead';
import Heart from 'components/assets/svg/Heart';
import Bicycle from 'components/assets/svg/Bicycle';

const Container = styled(FlexContainer)`
  height: calc(100vh - 20px);
`;

const LinkSpan = styled.span`
  cursor: pointer;
`;

const Inner = styled(FlexContainer)`
  height: 100%;
  background-color: ${({ theme }) => {
    return theme.red;
  }};
`;

const LandingPage = () => {
  return (
    <>
      <AppHead />
      <Container direction="column">
        <Inner direction="column" justify="center" items="center">
          <main>
            <Link href="/home" passHref>
              <LinkSpan>
                <Heart width="140" height="140" fill="#000000" />
                <Bicycle width="140" height="140" fill="#000000" />
              </LinkSpan>
            </Link>
          </main>
        </Inner>
      </Container>
    </>
  );
};

export default LandingPage;

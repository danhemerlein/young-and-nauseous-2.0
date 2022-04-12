import Link from 'next/link';
import styled from 'styled-components';
import { H1, FullScreenHeight, P, FlexContainer, anchorColor } from 'react-yan';

const Paragraph = styled(P)`
  color: ${({ theme }) => {
    return theme.light.dark;
  }};
`;

const HeadlineOne = styled(H1)`
  color: ${({ theme }) => {
    return theme.light.dark;
  }};
`;

const Inner = styled(FlexContainer)`
  height: 100%;
`;

const StyledLink = styled.a`
  ${({ theme }) => {
    return anchorColor({ color: theme.light.dark });
  }};
`;

const Home = () => {
  return (
    <FullScreenHeight direction="column" offset={20} unsetBreakpoint="none">
      <Inner direction="column" justify="space-between">
        <main>
          <HeadlineOne>young and nauseous</HeadlineOne>

          <Paragraph>
            <Link href="/music" passHref>
              <StyledLink>music</StyledLink>
            </Link>
          </Paragraph>

          <Paragraph>
            <Link href="/software" passHref>
              <StyledLink>software</StyledLink>
            </Link>
          </Paragraph>

          <Paragraph>
            <Link href="/software" passHref>
              <StyledLink href="/art">art</StyledLink>
            </Link>
          </Paragraph>
        </main>

        <footer>
          <Paragraph>© Dan Hemerlein {new Date().getFullYear()}</Paragraph>
        </footer>
      </Inner>
    </FullScreenHeight>
  );
};

export default Home;

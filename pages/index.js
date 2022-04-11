import Link from 'next/link';
import styled from 'styled-components';
import { H1, FullScreenHeight, P, FlexContainer } from 'react-yan';

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

const Home = () => {
  return (
    <FullScreenHeight direction="column" offset={20} unsetBreakpoint="none">
      <Inner direction="column" justify="space-between">
        <main>
          <HeadlineOne>young and nauseous</HeadlineOne>

          <Paragraph>
            <Link href="/music">music</Link>
          </Paragraph>

          <Paragraph>
            <Link href="/software">software</Link>
          </Paragraph>

          <Paragraph>
            <Link href="/art">art</Link>
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

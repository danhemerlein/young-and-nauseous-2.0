import { H1, FullScreenHeight, P } from 'react-yan';
import styled from 'styled-components';

const Paragraph = styled(P)`
  color: ${({ theme }) => {
    return theme.light.light;
  }};
`;

const HeadlineOne = styled(H1)`
  color: ${({ theme }) => {
    return theme.light.light;
  }};
`;

const Home = () => {
  return (
    <FullScreenHeight direction="column" offset={20} unsetBreakpoint="none">
      <main>
        <HeadlineOne>young and nauseous</HeadlineOne>

        <div>
          <Paragraph>music</Paragraph>
          <Paragraph>software</Paragraph>
          <Paragraph>art</Paragraph>
        </div>
      </main>

      <footer>
        <Paragraph>© Dan Hemerlein {new Date().getFullYear()}</Paragraph>
      </footer>
    </FullScreenHeight>
  );
};

export default Home;

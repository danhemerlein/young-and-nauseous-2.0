import { FullScreenHeight } from 'react-yan';
import styled from 'styled-components';
import AppHead from '../components/AppHead';

const P = styled.p`
  color: ${({ theme }) => {
    return theme.light.red;
  }};
`;

const Home = () => {
  return (
    <FullScreenHeight direction="column" offset={0} unsetBreakpoint="none">
      <AppHead />

      <main>
        <P>main p</P>
      </main>

      <footer>footer</footer>
    </FullScreenHeight>
  );
};

export default Home;

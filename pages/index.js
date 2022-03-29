import { FullScreenHeight, P } from 'react-yan';
import styled from 'styled-components';

const StyledP = styled(P)`
  color: ${({ theme }) => {
    return theme.light.white;
  }};
`;

const Home = () => {
  return (
    <FullScreenHeight direction="column" offset={20} unsetBreakpoint="none">
      <main>
        <div>
          <StyledP>young and nauseous</StyledP>
        </div>

        <div>
          <StyledP>music</StyledP>
          <StyledP>software</StyledP>
          <StyledP>art</StyledP>
        </div>
      </main>

      <footer>
        <StyledP>© Dan Hemerlein {new Date().getFullYear()}</StyledP>
      </footer>
    </FullScreenHeight>
  );
};

export default Home;

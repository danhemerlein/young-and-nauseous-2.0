import styled from 'styled-components';
import AppHead from '../components/AppHead';

const P = styled.p`
  color: ${({ theme }) => {
    return theme.light.red;
  }};
`;

const Home = () => {
  return (
    <div>
      <AppHead />

      <main>
        <P>main p</P>
      </main>

      <footer>footer</footer>
    </div>
  );
};

export default Home;

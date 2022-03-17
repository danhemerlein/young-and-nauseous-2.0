import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import Head from 'next/head';
import { FullScreenHeight } from 'react-yan';

import styled from 'styled-components';

const P = styled.p`
  color: ${({ theme }) => {
    return theme.light.red;
  }};
`;

const Home = () => {
  return (
    <div>
      <Head>
        <title>Test Next App</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <P>main p</P>
      </main>

      <footer>footer</footer>
    </div>
  );
};

export default Home;

import AppHead from 'components/AppHead';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { ReactYanOverrideProvider } from 'react-yan';
import { ThemeProvider } from 'styled-components';
import { AppContainer } from 'styles/elements';
import GlobalReset from 'styles/global';
import theme from 'styles/theme';

const App = ({ Component, pageProps }) => {
  const [overrideAppContainerBackground, setOverrideAppContainerBackground] =
    useState(false);

  const router = useRouter();

  useEffect(() => {
    if (router.asPath === '/') {
      setOverrideAppContainerBackground(true);
    } else {
      setOverrideAppContainerBackground(false);
    }
  }, [router.asPath]);

  return (
    <>
      <GlobalReset />

      <ThemeProvider theme={theme.light}>
        <ReactYanOverrideProvider value={{ fontFamily: 'lack_regular' }}>
          <AppHead />

          <AppContainer backgroundOverride={overrideAppContainerBackground}>
            <Component {...pageProps} />
          </AppContainer>
        </ReactYanOverrideProvider>
      </ThemeProvider>
    </>
  );
};

export default App;

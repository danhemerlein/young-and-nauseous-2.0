// import AppHead from 'components/AppHead';
import { ReactYanOverrideProvider } from 'react-yan';
import { ThemeProvider } from 'styled-components';
import { AppContainer } from 'styles/elements';
import GlobalReset from 'styles/global';
import theme from 'styles/theme';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalReset />

      <ThemeProvider theme={theme.light}>
        <ReactYanOverrideProvider value={{ fontFamily: 'lack_regular' }}>
          {/* <AppHead /> */}

          <AppContainer>
            <Component {...pageProps} />
          </AppContainer>
        </ReactYanOverrideProvider>
      </ThemeProvider>
    </>
  );
};

export default App;

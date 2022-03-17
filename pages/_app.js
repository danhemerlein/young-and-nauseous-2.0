import GlobalReset from 'styles/global';
import { ReactYanOverrideProvider } from 'react-yan';
import theme from 'styles/theme';
import AppHead from 'components/AppHead';
import { ThemeProvider } from 'styled-components';
import { AppContainer } from 'styles/elements';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalReset />
      <ThemeProvider theme={theme}>
        <ReactYanOverrideProvider overrides={{ fontFamily: 'lack_regular' }}>
          <AppHead />
          <AppContainer>
            <Component {...pageProps} />
          </AppContainer>
        </ReactYanOverrideProvider>
      </ThemeProvider>
    </>
  );
};

export default App;

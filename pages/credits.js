import styled from 'styled-components';

import { HeadlineOne, Paragraph, StyledLink } from 'styles/elements/typography';
import Heart from 'components/assets/svg/Heart';
import { remHelper } from 'styles/mixins';
import Footer from 'components/Footer/Footer';
import { FlexContainer } from 'react-yan';

const Container = styled(FlexContainer)`
  height: calc(100vh - 20px);
  overflow: scroll;
`;

const Inner = styled(FlexContainer)`
  height: 100%;
`;

const P = styled(Paragraph)`
  margin-bottom: ${remHelper[8]};
`;

const Credits = () => {
  return (
    <Container direction="column">
      <Inner direction="column" justify="space-between">
        <main>
          <HeadlineOne>credits</HeadlineOne>
          <Heart width="140" height="140" fill="#C23B22" />

          <P>
            Lack Italic font by&nbsp;
            <StyledLink
              href="http://www.adrienmidzic.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Adrien Midzic
            </StyledLink>
          </P>

          <P>
            Heart illustration by&nbsp;
            <StyledLink
              href="http://www.adrienmidzic.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Adrien Midzic
            </StyledLink>
          </P>
        </main>
      </Inner>
      <Footer />
    </Container>
  );
};

export default Credits;

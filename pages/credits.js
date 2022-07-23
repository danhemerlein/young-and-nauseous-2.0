import styled from 'styled-components';
import { FlexContainer } from 'react-yan';

import {
  PageHeadline,
  Paragraph,
  StyledLink
} from 'styles/elements/typography';
import Heart from 'components/assets/svg/Heart';
import AppHead from 'components/AppHead';
import { remHelper } from 'styles/mixins';
import Bicycle from 'components/assets/svg/Bicycle';

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
    <>
      <AppHead />
      <Container direction="column">
        <Inner direction="column" justify="space-between">
          <main>
            <PageHeadline>credits</PageHeadline>
            <Heart width="140" height="140" fill="#C23B22" />
            <Bicycle width="140" height="140" fill="#C23B22" />

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
                href="https://thenounproject.com/bahtiarjhonatan81/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jhonatan
              </StyledLink>
            </P>

            <P>
              Bicycle illustration by&nbsp;
              <StyledLink
                href="http://victoriacodes.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Victoria Codes
              </StyledLink>
            </P>
          </main>
        </Inner>
      </Container>
    </>
  );
};

export default Credits;

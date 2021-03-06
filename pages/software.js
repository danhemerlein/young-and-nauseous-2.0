import {
  Paragraph,
  PageHeadline,
  HeadlineTwo,
  StyledLink
} from 'styles/elements/typography';
import styled from 'styled-components';
import { remHelper } from 'styles/mixins';
import { FlexContainer } from 'react-yan';

const H2 = styled(HeadlineTwo)`
  margin: ${remHelper[16]} 0;
`;

const P = styled(Paragraph)`
  margin-bottom: ${remHelper[8]};
`;

const Container = styled(FlexContainer)`
  height: calc(100vh - 20px);
`;

const Inner = styled(FlexContainer)`
  height: 100%;
`;

const Software = () => {
  return (
    <Container direction="column">
      <Inner direction="column" justify="space-between">
        <main>
          <PageHeadline>software</PageHeadline>

          <P>
            This project counts moving software and data closer to their end
            points of use among it's goals.
          </P>

          <P>Below are some examples of how this is achieved.</P>

          <ul>
            <li>
              <H2>this wesite</H2>
              <P>
                This site is maintained by hand with love. It leverages Next.js,
                Styled Components, Material UI and{' '}
                <StyledLink
                  href="https://www.npmjs.com/package/react-yan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  react-yan.
                </StyledLink>
              </P>
            </li>

            <li>
              <H2>
                <StyledLink
                  href="https://www.npmjs.com/package/react-yan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React Yan
                </StyledLink>
              </H2>

              <P>
                <StyledLink
                  href="https://www.npmjs.com/package/react-yan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  react-yan
                </StyledLink>{' '}
                is a semi opinitated React component library developed for
                reusibility across my projects. It is free and open source.
              </P>
            </li>
          </ul>
        </main>
      </Inner>
    </Container>
  );
};

export default Software;

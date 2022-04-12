import Link from 'next/link';
import styled from 'styled-components';
import { A, FlexContainer } from 'react-yan';
import { Paragraph, StyledLink } from 'styles/elements/typography';
import { remHelper } from 'styles/mixins';

const StyledFlexContainer = styled(FlexContainer)`
  p:not(:first-of-type) {
    margin-left: ${remHelper[8]};
  }
`;

const Footer = () => {
  return (
    <StyledFlexContainer justify="space-between">
      <FlexContainer>
        <Paragraph>
          <Link href="/credits" passHref>
            <StyledLink>credits</StyledLink>
          </Link>
        </Paragraph>
        <Paragraph>
          <A
            href="https://www.instagram.com/youngandnauseous/"
            target="_blank"
            rel="noopener noreferrer"
          >
            insta
          </A>
        </Paragraph>
        <Paragraph>
          <A
            href="https://twitter.com/youngndnauseous"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </A>
        </Paragraph>
      </FlexContainer>
      <Paragraph>© Dan Hemerlein {new Date().getFullYear()}</Paragraph>
    </StyledFlexContainer>
  );
};

export default Footer;

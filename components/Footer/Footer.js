import Link from 'next/link';
import styled from 'styled-components';
import { A, FlexContainer } from 'react-yan';
import { Paragraph, StyledLink } from 'styles/elements/typography';
import { remHelper } from 'styles/mixins';
import socialsData from 'data/socials';

const StyledFlexContainer = styled(FlexContainer)`
  p:not(:first-of-type) {
    margin-left: ${remHelper[8]};
  }
`;

const Footer = () => {
  const { data } = socialsData;
  return (
    <StyledFlexContainer justify="space-between">
      <FlexContainer>
        <Paragraph>
          <Link href="/credits" passHref>
            <StyledLink>credits</StyledLink>
          </Link>
        </Paragraph>
        {data.map((item) => {
          return (
            <Paragraph>
              <A href={item.url} target="_blank" rel="noopener noreferrer">
                {item.name}
              </A>
            </Paragraph>
          );
        })}
      </FlexContainer>
      <Paragraph>© Dan Hemerlein {new Date().getFullYear()}</Paragraph>
    </StyledFlexContainer>
  );
};

export default Footer;

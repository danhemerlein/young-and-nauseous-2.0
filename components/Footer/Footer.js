import Link from 'next/link';
import styled from 'styled-components';
import { A, FlexContainer } from 'react-yan';
import { Paragraph, StyledLink } from 'styles/elements/typography';
import { remHelper } from 'styles/mixins';
import socialsData from 'data/socials';

const StyledFlexContainer = styled(FlexContainer)`
  position: absolute;

  bottom: ${remHelper[10]};
  left: ${remHelper[10]};

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
          <Link href="/credits" as="/credits" passHref>
            <StyledLink>credits</StyledLink>
          </Link>
        </Paragraph>
        {data.map((item) => {
          return (
            <Paragraph key={`${item.url}-${item.name}`}>
              <A href={item.url} target="_blank" rel="noopener noreferrer">
                {item.name}
              </A>
            </Paragraph>
          );
        })}
      </FlexContainer>
    </StyledFlexContainer>
  );
};

export default Footer;

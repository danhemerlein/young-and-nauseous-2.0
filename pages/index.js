import Link from 'next/link';
import styled from 'styled-components';
import { FullScreenHeight, FlexContainer } from 'react-yan';
import { Paragraph, HeadlineOne, StyledLink } from 'styles/elements/typography';
import Footer from 'components/Footer/Footer';
import indexData from 'data/index';

const Inner = styled(FlexContainer)`
  height: 100%;
`;

const Home = () => {
  return (
    <FullScreenHeight direction="column" offset={20} unsetBreakpoint="none">
      <Inner direction="column" justify="space-between">
        <main>
          <HeadlineOne>young and nauseous</HeadlineOne>

          <ul>
            {indexData.map((datum) => {
              return (
                <li>
                  <Paragraph>
                    <Link href={datum.url} passHref>
                      <StyledLink>{datum.title}</StyledLink>
                    </Link>
                  </Paragraph>
                </li>
              );
            })}
          </ul>
        </main>
        <Footer />
      </Inner>
    </FullScreenHeight>
  );
};

export default Home;

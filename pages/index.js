import Link from 'next/link';
import styled from 'styled-components';
import Heart from 'components/assets/svg/Heart';
import theme from 'styles/theme';
import { FullScreenHeight, FlexContainer } from 'react-yan';
import { Paragraph, HeadlineOne, StyledLink } from 'styles/elements/typography';
import { remHelper } from 'styles/mixins';
import Footer from 'components/Footer/Footer';
import indexData from 'data/index';

const Inner = styled(FlexContainer)`
  height: 100%;
`;

const ListItem = styled.li`
  margin-top: ${remHelper[8]};
`;

const Home = () => {
  return (
    <FullScreenHeight direction="column" offset={20} unsetBreakpoint="none">
      <Inner direction="column" justify="space-between">
        <main>
          <HeadlineOne>young and nauseous</HeadlineOne>
          <Heart width="140" height="140" fill="#C23B22" />

          <ul>
            {indexData.map((datum) => {
              return (
                <ListItem>
                  <Paragraph>
                    <Link href={datum.url} passHref>
                      <StyledLink>{datum.title}</StyledLink>
                    </Link>
                  </Paragraph>
                </ListItem>
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

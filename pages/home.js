import Link from 'next/link';
import styled from 'styled-components';
import Badge from 'components/Badge/Badge';
import { FlexContainer } from 'react-yan';
import {
  PageHeadline,
  Paragraph,
  StyledLink,
} from 'styles/elements/typography';
import { remHelper } from 'styles/mixins';
import homePageData from 'data/home';

const Container = styled(FlexContainer)`
  height: calc(100vh - 20px);
`;

const Inner = styled(FlexContainer)`
  height: 100%;
`;

const ListItem = styled.li`
  margin-top: ${remHelper[8]};
`;

const Home = () => {
  return (
    <Container direction="column">
      <Inner direction="column" justify="center" items="center">
        <main>
          <Badge />
          <PageHeadline>young and nauseous</PageHeadline>

          <FlexContainer as="ul" justify="space-between">
            {homePageData.map((datum) => {
              return (
                <ListItem key={`${datum.url}-${datum.title}`}>
                  <Paragraph>
                    <Link href={datum.url} passHref>
                      <StyledLink>{datum.title}</StyledLink>
                    </Link>
                  </Paragraph>
                </ListItem>
              );
            })}
          </FlexContainer>
        </main>
      </Inner>
    </Container>
  );
};

export default Home;

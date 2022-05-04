import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import styled from 'styled-components';
import { FlexContainer, P, A } from 'react-yan';

import { PageHeadline } from 'styles/elements/typography';
import { above, remHelper } from 'styles/mixins';
import linkzData from 'data/linkz';

const Container = styled.div`
  background: #000;

  .MuiAccordion-root {
    background: #000;
    color: #fff;
    border-top: 1px solid #c23b22;
    border-bottom: 1px solid #c23b22;
    margin: 0;
  }

  .MuiAccordionSummary-content {
    p {
      width: 100%;
      text-align: center;
    }

    ${above.tablet`
      p {
        text-align: left;
      }
    `}
  }

  .MuiAccordionDetails-root {
    display: flex;
    p {
      margin: ${remHelper[12]} 0;
    }

    div {
      width: 50%;
    }
  }
`;

const H1 = styled(PageHeadline)`
  color: #fff;
  padding-top: ${remHelper[16]};
`;

const SocialsContainer = styled.div`
  p {
    text-align: center;
    margin: ${remHelper[12]} 0;

    ${above.tablet`
      text-align: left;
    `}
  }
`;

const LinkPara = styled(P)`
  border: 1px solid #fff;
  padding: ${remHelper[16]};
`;

const LinkItem = ({ item }) => {
  const { url, service, name } = item;
  return (
    <LinkPara color="#fff">
      <A href={url} target="_blank" rel="noopener noreferrer">
        {service || name}
      </A>
    </LinkPara>
  );
};

const Linkz = () => {
  const { socialsData, musicData } = linkzData;

  console.log(musicData);
  console.log(socialsData);

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => {
    return (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  };

  return (
    <Container>
      <H1 textAlign="center">linkz</H1>
      {musicData.map((item, key) => {
        return (
          <Accordion
            expanded={expanded === `panel-${key}`}
            onChange={handleChange(`panel-${key}`)}
          >
            <AccordionSummary>
              <P>{item.title}</P>
            </AccordionSummary>

            <AccordionDetails>
              <FlexContainer items="center" direction="column">
                {item.links.streaming.map((link) => {
                  return <LinkItem item={link} />;
                })}
              </FlexContainer>

              <FlexContainer items="center" direction="column">
                {item.links.purchase.map((link) => {
                  return <LinkItem item={link} />;
                })}
              </FlexContainer>
            </AccordionDetails>
          </Accordion>
        );
      })}

      <SocialsContainer>
        {socialsData.map((item) => {
          return <LinkItem item={item} />;
        })}
      </SocialsContainer>
    </Container>
  );
};

export default Linkz;

import { Container } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { FlexContainer } from 'react-yan';
import styled from 'styled-components';
import { Paragraph } from 'styles/elements/typography';

const BadgeBox = styled(FlexContainer)`
  @keyframes rotate {
    from {
      transform: rotate(-360deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  width: 15rem;
  height: 15rem;
  padding: 1rem;
  border-radius: 50%;
  animation-name: rotate;
  animation-duration: 50s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  position: absolute;
  top: 1rem;
  right: 1rem;

  color: ${({ theme }) => {
    return theme.background;
  }};

  background: ${({ theme }) => {
    return theme.red;
  }};
`;

const StyledParagraph = styled(Paragraph)`
  width: 100%;
`;

const getRandomEl = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const Badge = () => {
  const data = ['Y&N', 'SO YOUNG SO NAUSEOUS', 'YOU & US', 'SOY SON'];
  const [badgeText, setBadgeText] = useState(getRandomEl(data));
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setBadgeText(getRandomEl(data));
    }, 10000);
  }, []);

  return (
    <Container>
      <BadgeBox jusitfy="center" items="center">
        <StyledParagraph textAlign="center">{badgeText}</StyledParagraph>
      </BadgeBox>

      <button type="button">{playing ? 'play' : 'pause'}</button>
    </Container>
  );
};

export default Badge;

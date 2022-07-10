import { useState } from 'react';
import { FlexContainer } from 'react-yan';
import styled from 'styled-components';
import { remHelper } from 'styles/mixins';
import { Paragraph } from 'styles/elements/typography';

const Container = styled.div`
  position: absolute;
  top: ${remHelper[10]};
  right: ${remHelper[10]};
`;

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

  animation-play-state: ${({ playAnimation }) => {
    return playAnimation ? 'running' : 'paused';
  }};

  color: ${({ theme }) => {
    return theme.background;
  }};

  background: ${({ theme }) => {
    return theme.red;
  }};
`;

const StyledButton = styled.button`
  background: transparent;
  outline: 0;
  border: 1px solid;
  boder-color: ${({ theme }) => {
    return theme.background;
  }};
  padding: ${remHelper[4]};
`;

const StyledParagraph = styled(Paragraph)`
  width: 100%;
`;

const Badge = () => {
  const [playing, setPlaying] = useState(true);
  const [pauseButtonClicked, setPauseButtonClicked] = useState(false);

  return (
    <Container>
      <BadgeBox
        onMouseEnter={() => {
          if (!pauseButtonClicked) {
            return setPlaying(false);
          }
        }}
        onMouseLeave={() => {
          if (!pauseButtonClicked) {
            setPlaying(true);
          }
        }}
        playAnimation={playing}
        jusitfy="center"
        items="center"
      >
        <StyledParagraph textAlign="center">
          SO YOUNG
          <br /> SO NAUSEOUS
        </StyledParagraph>
      </BadgeBox>

      <StyledButton
        type="button"
        onClick={() => {
          setPlaying(!playing);
          setPauseButtonClicked(!pauseButtonClicked);
        }}
      >
        <Paragraph>
          {!playing && pauseButtonClicked ? 'play' : 'pause'}
        </Paragraph>
      </StyledButton>
    </Container>
  );
};

export default Badge;

import { css } from 'styled-components';
import theme from './theme';

let values = theme.spacing;

const toRem = (value) => {
  return value / 10;
};

values = Object.values(values).reduce((acc, curr) => {
  return (acc[curr] = curr), acc;
}, values);

values.override = (value) => {
  return `${toRem(value)}rem`;
};

/*
Usage:
const StyledComponent = styled.div`
  margin-top: ${spacing[24]};
`;
OR
const StyledComponent = styled.div`
  margin-top: ${spacing.override(23)};
`;
*/

export const remHelper = new Proxy(values, {
  get: function Get(target, name) {
    const value = target[name];
    if (typeof value === 'function') {
      return value;
    }
    if (!value) {
      console.warn(`Using non-standard value (${name})`);
      return `${toRem(name)}rem`;
    }

    return `${toRem(value)}rem`;
  },
});

// media queries in styled components
const sizes = {
  mobile: 320,
  tablet: 720,
  desktop: 1024,
  'desktop-max': 1440,
};

export const above = Object.keys(sizes).reduce((accumulater, label) => {
  accumulater[label] = (...args) => {
    return css`
      @media (min-width: ${sizes[label]}px) {
        ${css(...args)}
      }
    `;
  };
  return accumulater;
}, {});

export const BREAKPOINT = {
  mobile: '320px',
  tablet: '720px',
  desktop: '1024px',
  desktopMax: '1440px',
};

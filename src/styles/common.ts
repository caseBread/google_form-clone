import { css } from 'styled-components';

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const transformCenter = css`
  display: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const transformCenterX = css`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const transformCenterY = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

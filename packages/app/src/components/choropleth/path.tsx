import css from '@styled-system/css';
import { forwardRef } from 'react';
import styled from 'styled-components';

interface PathProps {
  d: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  id?: string;
  hoverable?: boolean;
}

export const Path = forwardRef<SVGPathElement, PathProps>(
  ({ id, d, fill, stroke, strokeWidth, hoverable }, ref) => {
    return (
      <StyledPath
        ref={ref}
        d={d}
        shapeRendering="optimizeQuality"
        data-id={id}
        hoverable={hoverable}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    );
  }
);

const StyledPath = styled.path<{ hoverable?: boolean }>(
  (x) =>
    css({
      fill: x.fill || 'transparent',
      stroke: x.stroke,
      strokeWidth: x.strokeWidth || 0.5,
      pointerEvents: 'none',

      transitionProperty: 'fill, stroke, stroke-width',
      transitionDuration: '120ms, 90ms',
      transitionTimingFunction: 'ease-out',
    }),
  (x) =>
    x.hoverable &&
    css({
      cursor: 'pointer',
      fill: 'transparent',
      stroke: x.stroke ?? 'transparent',
      strokeWidth: x.strokeWidth ?? 0,
      pointerEvents: 'all',
      '&:hover': {
        transitionDuration: '0ms',
        fill: x.fill ?? 'none',
        stroke: x.stroke ?? '#222',
        strokeWidth: x.strokeWidth ?? 2,
      },
    })
);

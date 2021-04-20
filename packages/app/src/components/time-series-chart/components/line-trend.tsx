import { LinePath } from '@visx/shape';
import { useMemo } from 'react';
import { isPresent } from 'ts-is-present';
import { SeriesItem, SeriesSingleValue, curves } from '../logic';

export type LineStyle = 'solid' | 'dashed';

const DEFAULT_STYLE = 'solid';
const DEFAULT_STROKE_WIDTH = 2;

type LineTrendProps = {
  series: SeriesSingleValue[];
  color: string;
  style?: 'solid' | 'dashed';
  strokeWidth?: number;
  getX: (v: SeriesItem) => number;
  getY: (v: SeriesSingleValue) => number;
  curve?: 'linear' | 'step';
};

export function LineTrend({
  series,
  style = DEFAULT_STYLE,
  strokeWidth = DEFAULT_STROKE_WIDTH,
  color,
  getX,
  getY,
  curve = 'linear',
}: LineTrendProps) {
  const nonNullSeries = useMemo(
    () => series.filter((x) => isPresent(x.__value)),
    [series]
  );

  return (
    <LinePath
      data={nonNullSeries}
      x={getX}
      y={getY}
      stroke={color}
      strokeWidth={strokeWidth}
      curve={curves[curve]}
      strokeDasharray={style === 'dashed' ? 4 : undefined}
      strokeLinecap="butt"
      strokeLinejoin="round"
    />
  );
}

interface LineTrendIconProps {
  color: string;
  style?: 'solid' | 'dashed';
  strokeWidth?: number;
  width?: number;
  height?: number;
}

export function LineTrendIcon({
  color,
  strokeWidth = DEFAULT_STROKE_WIDTH,
  style = DEFAULT_STYLE,
  width = 15,
  height = 15,
}: LineTrendIconProps) {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <line
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={style === 'dashed' ? 4 : undefined}
        strokeLinecap="round"
        strokeLinejoin="round"
        x1={2}
        y1={height / 2}
        x2={width - 2}
        y2={height / 2}
      />
    </svg>
  );
}
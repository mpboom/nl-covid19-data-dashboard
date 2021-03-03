import { useState, useRef, useEffect, useMemo } from 'react';
import css from '@styled-system/css';
// import styled from '@styled-components/styled';
import { Box } from '~/components-styled/base';
import { Heading, Text, InlineText } from '~/components-styled/typography';
import siteText from '~/locale';
import { replaceComponentsInText } from '~/utils/replace-components-in-text';
import { formatNumber } from '~/utils/formatNumber';
// import styled from 'styled-components';

const ITEMS_AMOUNT = 75;
const ITEM_WIDTH = 4;
const ITEM_HEIGHT = 15;
const RADIUS = 70;

const STEP_RADIUS = (2 * Math.PI) / ITEMS_AMOUNT;
const STEP_DEGREES = 360 / ITEMS_AMOUNT;

const SVG_MORPH_DURATION = 300;

const CONTAINER_WIDTH = 150;
const CONTAINER_HEIGHT = 150;

function modulo(current: number, max: number) {
  return ((current % max) + max) % max;
}

function useInterval(callback: any, delay: number) {
  const savedCallback = useRef(callback);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    const id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}

// CLOCK

export function CounterClock() {
  const [counter, setCounter] = useState(0);
  const animateToCheck = useRef<any>(null);
  const animateToStar = useRef<any>(null);

  const angleArray = useMemo(() => {
    const tempAngleArray = [];
    let tempAngle = Math.PI / 2;

    for (let i = 0; i < ITEMS_AMOUNT; i++) {
      tempAngleArray.push((tempAngle += STEP_RADIUS));
    }

    return tempAngleArray;
  }, []);

  useInterval(() => {
    setCounter(modulo(counter + 1, ITEMS_AMOUNT));

    const current = modulo(counter, 2);

    if (current === 0) {
      if (animateToCheck.current !== null) {
        animateToCheck.current.beginElement();
      }
    }

    if (current === 1) {
      animateToStar.current.beginElement();
    }
  }, 800);

  return (
    <Box display="flex" alignItems="center">
      <div
        css={css({
          width: CONTAINER_WIDTH,
          height: CONTAINER_HEIGHT,
          position: 'relative',
        })}
      >
        <div
          css={css({
            transform: `rotate(180deg)`,
            display: 'inline-flex',
            position: 'relative',
            width: '100%',
            height: '100%',
            minWidth: CONTAINER_WIDTH,
          })}
        >
          {[...Array(ITEMS_AMOUNT)].map((x, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                transform: `translate(
                  ${
                    RADIUS * Math.cos(angleArray[index]) -
                    ITEM_WIDTH / 2 +
                    CONTAINER_WIDTH / 2
                  }px,
                  ${
                    RADIUS * Math.sin(angleArray[index]) -
                    ITEM_HEIGHT / 2 +
                    CONTAINER_HEIGHT / 2
                  }px
                )
                rotate(${index * STEP_DEGREES + 360 / ITEMS_AMOUNT}deg)`,
                width: ITEM_WIDTH,
                height: ITEM_HEIGHT,
                backgroundColor: index === counter ? '#007BC7' : '#d3d3d3',
                transition:
                  index === counter ? '0s' : '45s cubic-bezier(1,0,1,0.35)',
              }}
            />
          ))}
        </div>
        <Box position="absolute" top="calc(50% - 20px)" left="calc(50% - 20px)">
          <svg
            viewBox="0 0 194.6 185.1"
            css={css({ width: '40px', height: '40px' })}
          >
            <polygon
              fill="#FFD41D"
              points="97.3,0 127.4,60.9 194.6,70.7 145.9,118.1 157.4,185.1 97.3,153.5 37.2,185.1 48.6,118.1 0,70.7 67.2,60.9"
            >
              <animate
                ref={animateToCheck}
                begin="indefinite"
                fill="freeze"
                attributeName="points"
                dur={`${SVG_MORPH_DURATION}ms`}
                to="110,58.2 147.3,0 192.1,29 141.7,105.1 118.7,139.8 88.8,185.1 46.1,156.5 0,125 23.5,86.6  71.1,116.7"
              />
              <animate
                ref={animateToStar}
                begin="indefinite"
                fill="freeze"
                attributeName="points"
                dur={`${SVG_MORPH_DURATION}ms`}
                to="97.3,0 127.4,60.9 194.6,70.7 145.9,118.1 157.4,185.1 97.3,153.5 37.2,185.1 48.6,118.1 0,70.7 67.2,60.9"
              />
            </polygon>
          </svg>
        </Box>
      </div>
      <Box pl={4}>
        <Heading level={3}>
          {replaceComponentsInText(siteText.vaccinaties.clock.title, {
            seconds: (
              <InlineText color="blue" fontWeight="bold">
                0.8
              </InlineText>
            ),
          })}
        </Heading>
        <Text m={0}>
          {replaceComponentsInText(siteText.vaccinaties.clock.description, {
            amount: (
              <InlineText color="blue" fontWeight="bold">
                {formatNumber(84373)}
              </InlineText>
            ),
          })}
        </Text>
      </Box>
    </Box>
  );
}

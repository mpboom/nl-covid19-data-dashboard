import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Stap1Thuisbezoek = forwardRef(({ ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      focusable="false"
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="currentColor"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.2971 6.84078L29.5862 17.5358C29.7348 17.6843 29.8833 17.8328 29.8833 18.1299V18.8726C29.8833 19.1697 29.7348 19.3183 29.4377 19.3183H27.5066V29.2705H8.49333V19.3183H6.56229C6.26521 19.3183 6.11667 19.1697 6.11667 18.8726V18.1299C6.11667 17.8328 6.26521 17.6843 6.41375 17.5358L17.7029 6.84078C17.8514 6.69223 18.1485 6.69223 18.2971 6.84078ZM17.5545 16.3474C16.8117 16.3474 15.9205 16.3474 15.0292 16.6445V18.2785C15.4749 18.2042 15.8462 18.1299 16.2176 18.0556C16.5889 17.9814 16.9603 17.9071 17.4059 17.8328C18.4457 17.8328 19.0399 18.1299 19.0399 18.7241C19.0399 19.3183 18.7428 19.6153 17.8515 20.061L16.6632 20.6551C15.4749 21.2493 14.7322 22.1405 14.5836 23.0318L14.8807 24.5172H21.4165V22.7347H16.5147C16.6632 22.6357 16.7952 22.5367 16.9273 22.4376C17.1914 22.2396 17.4554 22.0415 17.8515 21.8435L18.8913 21.3978C20.2282 20.9522 20.9709 20.061 20.8224 18.8726C20.8224 17.3872 19.7826 16.3474 17.5545 16.3474Z"
      />
    </svg>
  );
});

Stap1Thuisbezoek.propTypes = {
  // color: PropTypes.string,
  // size: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.number
  // ]),
};

Stap1Thuisbezoek.displayName = 'Stap1Thuisbezoek';

export default Stap1Thuisbezoek;
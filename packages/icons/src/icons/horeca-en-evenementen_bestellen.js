import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const HorecaEnEvenementenBestellen = forwardRef(({ ...rest }, ref) => {
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
        d="M17 7.375C17.125 7.125 17.25 7 17.5 7C17.625 7 17.875 7.125 17.875 7.375L18.25 13.25C18.25 14.375 16.75 15.5 15.125 15.5H14.875C14.875 15.5 14.875 15.625 15 15.625C15.5 16 16.25 16 16.25 16C16.625 21.625 16.875 28.625 16.875 29C16.875 29.625 16.125 30 15.125 30C14.125 30 13.375 29.5 13.375 29C13.375 28.625 13.625 21.25 14.125 15.375C12.875 15 12 14.125 12 13.25L12.375 7.375C12.375 7.125 12.625 7 12.75 7C13 7 13.125 7.125 13.125 7.375L13.625 12.625C13.625 12.875 13.75 13 14 13C14.125 13 14.375 12.875 14.375 12.625L14.75 7.375C14.75 7.125 14.875 7 15.125 7C15.375 7 15.5 7.125 15.5 7.375L16 12.625C16 12.875 16.125 13 16.375 13C16.5 13 16.75 12.875 16.75 12.625L17 7.375Z"
        fill="currentColor"
      />
      <path
        d="M21.25 7.24998C23.125 9.12498 23.75 14.625 24 17.125C24 17.75 23.5 18.25 22.75 18.25H22.375C24.25 29 22.5 29.875 21.25 29.875C20.875 29.875 20.125 29.625 20.125 29.125V7.62498C20.125 7.12498 20.875 6.87498 21.25 7.24998Z"
        fill="currentColor"
      />
    </svg>
  );
});

HorecaEnEvenementenBestellen.propTypes = {
  // color: PropTypes.string,
  // size: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.number
  // ]),
};

HorecaEnEvenementenBestellen.displayName = 'HorecaEnEvenementenBestellen';

export default HorecaEnEvenementenBestellen;
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Maatregelen = forwardRef(({ ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      role="img"
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="#000"
      {...rest}
    >
      <path d="M28.48 30.4h-8.96v2.56h8.96V30.4zM25.9 26.435a2.229 2.229 0 01-2.062 1.764c-1.236.06-2.287-.912-2.348-2.171-.061-1.26.89-2.329 2.126-2.389.55-.026 1.058.16 1.465.477h.014c.056-.006.172-.127-.067-.466-.186-.265-.741-.863-2.053-.9l3.647-6.208c.404-.702 1.262-.403 1.116.388 0 0-1.7 8.871-1.838 9.505z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 8C15.178 8 8 15.178 8 24s7.178 16 16 16 16-7.178 16-16S32.822 8 24 8zm9.11 24.205l-1.87-1.87-.904.906 1.868 1.868a12.192 12.192 0 01-16.408 0l1.868-1.868-.905-.905-1.869 1.869a12.246 12.246 0 01-3.14-7.565h2.65v-1.28h-2.65a12.21 12.21 0 013.147-7.558l1.862 1.862.905-.905-1.862-1.862a12.21 12.21 0 017.558-3.146v2.65h1.28v-2.65a12.21 12.21 0 017.558 3.146l-1.862 1.862.905.905 1.862-1.862a12.21 12.21 0 013.146 7.558H33.6v1.274h2.65a12.263 12.263 0 01-3.14 7.57z"
      />
    </svg>
  );
});

Maatregelen.propTypes = {
  // color: PropTypes.string,
  // size: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.number
  // ]),
};

Maatregelen.displayName = 'Maatregelen';

export default Maatregelen;
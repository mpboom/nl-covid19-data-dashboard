import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SearchIconBold = forwardRef(({ ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      role="img"
      focusable="false"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      {...rest}
    >
      <path
        d="M15.5242 13.0271L11.4821 8.98585C11.9444 8.12657 12.2079 7.14521 12.2079 6.10308C12.2079 2.73779 9.46953 0 6.10352 0C2.73805 0 0 2.73779 0 6.10308C0 9.46926 2.73805 12.2079 6.10352 12.2079C7.1322 12.2079 8.10073 11.9497 8.9519 11.4985L13.0023 15.5488C13.6359 16.1824 14.668 16.1824 15.3015 15.5488L15.5242 15.326C16.1595 14.6909 16.1577 13.6623 15.5242 13.0271ZM2.40594 6.10308C2.40594 4.06177 4.06221 2.40594 6.10352 2.40594C8.14573 2.40594 9.802 4.06177 9.802 6.10308C9.802 8.14617 8.14573 9.802 6.10352 9.802C4.06221 9.802 2.40594 8.14617 2.40594 6.10308Z"
        fill="currentColor"
      />
    </svg>
  );
});

SearchIconBold.propTypes = {
  // color: PropTypes.string,
  // size: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.number
  // ]),
};

SearchIconBold.displayName = 'SearchIconBold';

export default SearchIconBold;
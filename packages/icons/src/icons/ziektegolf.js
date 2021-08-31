import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Ziektegolf = forwardRef(({ ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      role="img"
      focusable="false"
      viewBox="0 0 24 36"
      fill="#000"
      {...rest}
    >
      <path d="M17.3704 25.4327C17.3704 24.9694 17.001 24.5969 16.5417 24.5969C16.0824 24.5969 15.713 24.9694 15.713 25.4327C15.713 25.896 16.0824 26.2686 16.5417 26.2686C17.001 26.2686 17.3704 25.896 17.3704 25.4327ZM18.3175 28.2984C18.3175 27.8352 17.9481 27.4626 17.4888 27.4626C17.0294 27.4626 16.6601 27.8352 16.6601 28.2984C16.6601 28.7617 17.0294 29.1343 17.4888 29.1343C17.9481 29.1343 18.3175 28.7617 18.3175 28.2984ZM16.5275 22.099C16.9205 21.9795 17.1431 21.5592 17.0247 21.158L15.5662 17.9819C15.5899 17.6428 15.874 17.0887 15.9071 16.8069C16.0729 15.3788 15.8787 13.6833 15.8787 13.6833C17.02 12.4845 17.0294 11.1137 16.1439 10.0629C15.1353 8.85934 10.6461 7.41215 6.79618 8.24799C2.73318 9.13158 2.06075 12.8666 2.12231 14.863C2.19334 17.1842 3.48612 20.7903 2.96995 23.0972C2.74265 24.1097 3.48987e-06 29.2308 3.48987e-06 29.2308H9.60903V27.6489L7.68171 25.5521C7.57753 25.4184 7.64856 25.3181 7.67224 25.2942C7.67224 25.2942 10.594 26.856 11.6595 27.3384C12.706 27.8113 13.1606 27.0996 13.4968 26.4119C13.6862 26.025 13.8804 26.0775 14.1692 25.9342C14.5291 25.7575 14.2687 25.0172 14.0651 24.6638C13.8851 24.3485 13.7809 24.296 13.7809 24.296C14.1124 24.3294 14.4344 24.2673 14.6901 24.1861C14.979 24.0954 15.2347 23.7945 15.1353 23.5031C14.9222 22.8679 15.1921 22.3664 15.1921 22.3664L16.5275 22.099ZM20.6852 24.4775C20.6852 24.0142 20.3158 23.6417 19.8565 23.6417C19.3972 23.6417 19.0278 24.0142 19.0278 24.4775C19.0278 24.9408 19.3972 25.3133 19.8565 25.3133C20.3158 25.3133 20.6852 24.9408 20.6852 24.4775ZM23.1713 22.6864C22.712 22.6864 22.3426 23.059 22.3426 23.5223C22.3426 23.9855 22.712 24.3581 23.1713 24.3581C23.6306 24.3581 24 23.9855 24 23.5223C24 23.059 23.6306 22.6864 23.1713 22.6864ZM18.4359 30.3283C17.9765 30.3283 17.6072 30.7009 17.6072 31.1642C17.6072 31.6275 17.9765 32 18.4359 32C18.8952 32 19.2646 31.6275 19.2646 31.1642C19.2646 30.7009 18.8952 30.3283 18.4359 30.3283ZM20.7752 26.5886C20.3158 26.5886 19.9465 26.9611 19.9465 27.4244C19.9465 27.8877 20.3158 28.2602 20.7752 28.2602C21.2345 28.2602 21.6039 27.8877 21.6039 27.4244C21.6039 26.9611 21.2298 26.5886 20.7752 26.5886Z" />
    </svg>
  );
});

Ziektegolf.propTypes = {
  // color: PropTypes.string,
  // size: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.number
  // ]),
};

Ziektegolf.displayName = 'Ziektegolf';

export default Ziektegolf;
import React from 'react';
import PropTypes from 'prop-types';

export const Footer = ({className}) => {
  return (
    <div className={`${className} w-full py-2 bg-linen text-center`}>
      <span className="bg-linen">
        Made with{' '}
        <span role="img" aria-label="heart">
          ❤️
        </span>{' '}
        in Berlin.
      </span>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
};

export default Footer;

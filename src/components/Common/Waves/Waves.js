import React, { Fragment } from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node.isRequired,
  topColor: PropTypes.string.isRequired,
  bottomColor: PropTypes.string.isRequired,
};

const Waves = ({ children, topColor, bottomColor }) => (
  <Fragment>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="top-wave"
    >
      <path
        fill={topColor}
        fillOpacity="1"
        d="M0,224L48,234.7C96,245,192,267,288,245.3C384,224,480,160,576,144C672,128,768,160,864,154.7C960,149,1056,107,1152,96C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>{" "}
    {children}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="bottom-wave"
    >
      <path
        fill={bottomColor}
        fillOpacity="1"
        d="M0,128L48,133.3C96,139,192,149,288,165.3C384,181,480,203,576,186.7C672,171,768,117,864,112C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  </Fragment>
);

Waves.propTypes = propTypes;

export default Waves;

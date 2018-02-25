import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './styles';

export function SelectViewport({ viewports, defaultViewport, activeViewport, onChange }) {
  return (
    <div style={styles.row}>
      <label htmlFor="device" style={styles.label}>
        Device
      </label>
      <select style={styles.action} id="device" value={activeViewport} onChange={onChange}>
        <option value={defaultViewport}>Default</option>
        {Object.keys(viewports).map(key => (
          <option value={key} key={key}>
            {viewports[key].name}
          </option>
        ))}
      </select>
    </div>
  );
}

SelectViewport.propTypes = {
  onChange: PropTypes.func.isRequired,
  activeViewport: PropTypes.string.isRequired,
  viewports: PropTypes.shape({}).isRequired,
  defaultViewport: PropTypes.string.isRequired,
};

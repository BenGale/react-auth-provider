import React from 'react';
import PropTypes from 'prop-types';

const ContentArea = ({ contentOptions, selectedContentName }) => {
  const activeContent = contentOptions.find(
    content => content.componentName === selectedContentName
  );

  return (
    <div>
      { activeContent.component }
    </div>
  );
};

ContentArea.propTypes = {
  contentOptions: PropTypes.arrayOf(PropTypes.shape({
    componentName: PropTypes.string.isRequired,
    component: PropTypes.node.isRequired,
  })).isRequired,
  selectedContentName: PropTypes.string.isRequired,
};

export default ContentArea;

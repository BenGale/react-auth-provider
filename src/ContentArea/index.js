import React, { PropTypes } from 'react';

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

import React from 'react';
import * as feather from 'feather-icons';
import './IconComponent.scss';

const IconComponent = (props) => {
    
    const renderedIcon = feather.icons[`${props.icon}`].toSvg();

  return (
    <div className="icon-container">
      <div dangerouslySetInnerHTML={{ __html: renderedIcon }} />
    </div>
  );
}

export default IconComponent;
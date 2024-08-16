import React from "react";
import * as feather from "feather-icons";

const IconComponent = (props) => {
	const { icon, size, color, className } = props;

	const iconSize = size || 24;
	const iconColor = color || "black";

	const iconStyle = {
		width: `${iconSize}px`,
		height: `${iconSize}px`,
		color: iconColor,
	};

	const renderedIcon = feather.icons[`${icon}`].toSvg({
		...iconStyle,
		class: className,
	});

	return (
		<div className="icon-container">
			<div dangerouslySetInnerHTML={{ __html: renderedIcon }} />
		</div>
	);
};

export default IconComponent;

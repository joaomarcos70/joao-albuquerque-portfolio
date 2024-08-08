import React, { useState } from "react";
import { v4 as uuId } from "uuid";
import "./accordion.scss";

const Accordion = ({ title = "teste", children = <h1>teste123</h1> }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleAccordion = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div
			key={uuId()}
			className={`accordion ${isOpen ? "openned" : ""}`}
			onClick={() => handleAccordion()}
		>
			<div className="accordion-title">
				<h1>{title}</h1>
			</div>
			{isOpen ? <div className="accordion-content">{children}</div> : null}
		</div>
	);
};

export default Accordion;

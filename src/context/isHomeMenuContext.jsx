import React, { createContext, useState } from "react";

const defaultState = "/home";

export const AnchorMenuContext = createContext({
	anchorMenu: defaultState,
	setAnchorMenu: () => {},
});

export const AnchorMenuProvider = ({ children }) => {
	const [anchorMenu, setAnchorMenu] = useState(defaultState);

	return (
		<AnchorMenuContext.Provider value={{ anchorMenu, setAnchorMenu }}>
			{children}
		</AnchorMenuContext.Provider>
	);
};

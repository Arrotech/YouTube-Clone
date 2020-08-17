import React from 'react';
import './assets/css/SidebarRow.css';

function SidebarRow({ active, Icon, title }) {
	return (
		<div className={`sidebarRow ${active && 'sidebarRow--active'}`}>
			<Icon className="sidebarRow__icon"/>
			<h2 className="sidebarRow__title">{title}</h2>
		</div>
	);
}

export default SidebarRow;

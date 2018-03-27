import React from "react";

const {
	registerPlugin,
} = wp.plugins;
const {
	PluginSidebar,
	PluginMoreMenuItem,
} = wp.editPost.__experimental;
const {
	Fragment
} = wp.element;
const {
	dispatch,
} = wp.data;

const SIDEBAR = !! PluginSidebar;
const MORE_MENU_ITEM = !! PluginMoreMenuItem;

const Icon = (
	<svg width="100%" height="100%" viewBox="0 0 100 100">
		<circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />
	</svg>
);

const SidebarContents = ( props ) => {
	const onClose = dispatch( "core/edit-post" ).closeGeneralSidebar;
	return (
		<div>
			<p>Here is the sidebar content!</p>
			<button onClick={ onClose }>Close</button>
		</div>
	);
};

const Component = () => {
	return (
		<Fragment>
			{ SIDEBAR && <PluginSidebar name="my-sidebar" title="My sidebar">
				<SidebarContents />
			</PluginSidebar> }
			{ MORE_MENU_ITEM && <PluginMoreMenuItem
				name="more-menu-item"
				icon={ Icon }
				target="my-sidebar"
				type="sidebar">
				My Sidebar
			</PluginMoreMenuItem>}
		</Fragment>
	);
};

registerPlugin( "my-plugin", {
	render: Component,
} );

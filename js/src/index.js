const {
	registerPlugin,
} = wp.plugins;
const {
	PluginMoreMenuItem,
	PluginScreenTakeover,
} = wp.editPost.__experimental;
const {
	PluginSidebar,
} = wp.editPost;
const {
	Fragment
} = wp.element;
const {
	dispatch,
} = wp.data;
const {
	PanelBody,
} = wp.components;

const SIDEBAR = !! PluginSidebar;
const MORE_MENU_ITEM = !! PluginMoreMenuItem;
const SCREEN_TAKEOVER = !! PluginScreenTakeover;

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

const ScreenTakeoverContents = ( props ) => {
	const onClose = dispatch( "core/edit-post" ).closeScreenTakeover;
	return (
		<PanelBody>
			<p>Here is the screen takeover content!</p>
			<button onClick={ onClose }>Close</button>
		</PanelBody>
	);
};

const Component = () => {
	return (
		<Fragment>
			{ SIDEBAR && <PluginSidebar name="my-sidebar" title="My sidebar">
				<SidebarContents />
			</PluginSidebar> }
			{ MORE_MENU_ITEM && SIDEBAR && <PluginMoreMenuItem
				name="more-menu-item-sidebar"
				icon={ Icon }
				target="my-sidebar"
				type="sidebar">
				My Sidebar
			</PluginMoreMenuItem>}
			{ SCREEN_TAKEOVER && <PluginScreenTakeover
				name="my-screen-takeover">
				<ScreenTakeoverContents />
			</PluginScreenTakeover> }
			{ MORE_MENU_ITEM && SCREEN_TAKEOVER && <PluginMoreMenuItem
				name="more-menu-item-screen-takeover"
				icon={ Icon }
				target="my-screen-takeover"
				type="screen-takeover">
				My Screen Takeover
			</PluginMoreMenuItem> }
		</Fragment>
	);
};

registerPlugin( "my-plugin", {
	render: Component,
} );

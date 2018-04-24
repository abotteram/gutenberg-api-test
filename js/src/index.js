const {
	registerPlugin,
} = wp.plugins;
const experimental = wp.editPost.__experimental || {};
const {
	PluginScreenTakeover,
	PluginScreenTakeoverMoreMenuItem,
} = experimental;
const {
	PluginSidebar,
	PluginSidebarMoreMenuItem,
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
const SIDEBAR_MORE_MENU_ITEM = !! PluginSidebarMoreMenuItem;
const SCREEN_TAKEOVER = !! PluginScreenTakeover;
const SCREEN_TAKEOVER_MORE_MENU_ITEM = !! PluginScreenTakeoverMoreMenuItem;


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
			{ SIDEBAR_MORE_MENU_ITEM && SIDEBAR && <PluginSidebarMoreMenuItem
				icon={ Icon }
				target="my-sidebar">
				My Sidebar
			</PluginSidebarMoreMenuItem>}
			{ SIDEBAR_MORE_MENU_ITEM && SIDEBAR && <PluginSidebarMoreMenuItem
				icon={ Icon }
				target="my-sidebar">
				My same sidebar
			</PluginSidebarMoreMenuItem>}
			{ SCREEN_TAKEOVER && <PluginScreenTakeover
				icon={ Icon }
				title="My Screen Takeover"
				name="my-screen-takeover">
				<ScreenTakeoverContents />
			</PluginScreenTakeover> }
			{ SCREEN_TAKEOVER_MORE_MENU_ITEM && SCREEN_TAKEOVER && <PluginScreenTakeoverMoreMenuItem
				icon={ Icon }
				target="my-screen-takeover">
				My Screen Takeover
			</PluginScreenTakeoverMoreMenuItem> }
		</Fragment>
	);
};

registerPlugin( "my-plugin", {
	render: Component,
} );

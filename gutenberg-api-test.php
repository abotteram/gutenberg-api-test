<?php
/*
Plugin name: Gutenberg API test
*/

add_action( "admin_enqueue_scripts", "gat_enqueue_scripts" );

function gat_enqueue_scripts( $hook ) {
	if( is_gutenberg_editor_open( $hook ) ) {
		wp_register_script( "gat-gutenberg-plugin", plugins_url( "js/dist/gutenberg-plugin.js", __FILE__ ), array( "wp-edit-post" ), "1.0.0", true );
		wp_enqueue_script( "gat-gutenberg-plugin" );
	}
}

function is_gutenberg_editor_open( $hook ) {
	if( ! is_plugin_active( "gutenberg-api-test/gutenberg-api-test.php" ) ) {
		return false;
	}
	global $wp_query;
	if( ( $hook == 'post-new.php' || $hook == 'post.php' ) && ! isset( $_GET[ 'classic-editor' ] ) ) {
		return true;
	}
	return false;
}
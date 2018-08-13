<?php
/*
Plugin name: Gutenberg API test
*/

add_action( "admin_enqueue_scripts", "gat_enqueue_scripts" );

function gat_enqueue_scripts( $hook ) {
	if( is_gutenberg_editor_open( $hook ) ) {
		wp_register_script( "gat-gutenberg-plugin", plugins_url( "js/dist/gutenberg-plugin.js", __FILE__ ), array( "wp-edit-post", "react", "react-dom" ), "1.0.0", true );
		wp_register_style( "gat-gutenberg-plugin-style", plugins_url( "js/dist/gutenberg-plugin.css", __FILE__ ) );
		wp_enqueue_script( "gat-gutenberg-plugin" );
		wp_enqueue_style( "gat-gutenberg-plugin-style" );
	}
}

function is_gutenberg_editor_open( $hook ) {
	if( ! is_plugin_active( "gutenberg-api-test/gutenberg-api-test.php" ) ) {
		return false;
	}
	if( ( $hook == 'post-new.php' || $hook == 'post.php' ) && ! isset( $_GET[ 'classic-editor' ] ) ) {
		return true;
	}
	return false;
}

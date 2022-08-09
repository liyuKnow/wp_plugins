<?php
/**
* Plugin Name: hide-menu-bar
* Description: My first wordpress plugin.
* Version: 0.1
* Author: kidus-taye
* Author URI: https://www.liyudev.com/
**/

// There are two types of hooks
// 1. Actions
// 2. Filters

// modify the standard read more

function modify_read_more_link() {
    return '<a class="more-link" href="' . get_permalink() . '">Click to Read!</a>';
}

add_filter( 'the_content_more_link', 'modify_read_more_link' );
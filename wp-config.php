<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link https://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'derekhal_36test');

/** MySQL database username */
define('DB_USER', 'derekhal_derek');

/** MySQL database password */
define('DB_PASSWORD', 'Casbah37');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '>]q>J+wK3Ek+]#6|+~~tps{=e}tDv?z6gUob<mHF8h>,ktV+Q/%0QYYTcnLZJF2k');
define('SECURE_AUTH_KEY',  '&Q#iu+5@y@<Xv4IQOO+ii|[[p,zJy``Zj8Nd3YizN]C7z`jTIS| U7E=6<_,(PDg');
define('LOGGED_IN_KEY',    'qLO#~L,IBD@}k=9-qF`|<:(Z9lS:IBgXoG+-AN?:0jt7hC7PfHv/O=[7+DY.U5v=');
define('NONCE_KEY',        'Lnvl|M+=n+0Z}/wpN^R/hx;VwGeA?wSlF7:{&F*zQ1i/F:B!&ul`Do|N[LvDL5HQ');
define('AUTH_SALT',        'Ye ;SUVVy4Gd*{N|g0m=D}#i(+W9lh[.~0!}~Weum&P%Du4*4nx.<3Z #2@=7Qe-');
define('SECURE_AUTH_SALT', '=m64X%+3OV(6]]#nWig6n%CdfMY%@[LLl0eOXdXK#,S.3r4C3a=.5z3h]`O#zIdb');
define('LOGGED_IN_SALT',   '-4*vyP&&)`&HxaiBYr-?2(lgKEoJ= <5%v6?!F%<0{WP/E^&<.aav_qR({jQT4l,');
define('NONCE_SALT',       '**Mk_7O7| j#e~D^qBXQgu0;I#/W!y6-.Zf_#v@<h`(k]yoFDXdL>B*! *-`hgWK');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = '36_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

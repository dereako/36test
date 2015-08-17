<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" dir="ltr" lang="en"> <!--<![endif]-->
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
    <?php wp_head(); ?>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body <?php body_class(); ?>>
    <!--[if lt IE 7]>
        <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
    <div id="wrap" class="hfeed site">
        <a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'test36' ); ?></a>

        <header class="header" role="banner">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logo" title="<?php bloginfo( 'name' ); ?>" aria-controls="primary-menu" aria-expanded="false" rel="home">
                <div class="logo__box<?php echo $logo = randomBG();?>"><div class="logo__triangle logo__triangle-white"></div></div>
                <div class="logo__triangle logo__triangle-dark<?=$logo?>"></div>
            </a>
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logo__mobile"><div class="logo__triangle logo__triangle-white"></div></a>
    
            <nav class="navigation" role="navigation">
            	<a class="navigation__close">[<strong>close</strong>]</a>
				<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu' ) ); ?>
            </nav>
           	<div class="navigation__menu">[<strong>menu</strong>]</div>
            <div class="wrap"><hr /></div>
        </header>
		<div id="content" class="wrap">
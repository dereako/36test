<?php get_header(); ?>
    <main class="main" role="main">
        <section class="error-404 not-found">
        	<div class="left">
                <h1 class="page-title"><?php esc_html_e( 'Oops! That page can&rsquo;t be found.', 'test36' ); ?></h1>
                <p><?php esc_html_e( 'It looks like nothing was found at this location. Maybe try one of the links below or a search?', 'test36' ); ?></p>
            </div>
            <div class="right"><?php get_search_form(); ?></div>
            <div class="clear"></div>
            
            <p><?php the_widget( 'WP_Widget_Recent_Posts' ); ?></p>
        </section><!-- .error-404 -->

    </main><!-- #main -->
<?php get_footer(); ?>

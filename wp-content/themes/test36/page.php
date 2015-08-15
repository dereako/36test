<?php get_header(); ?>
    <main class="main" role="main">
        <div class="movement">
            <div class="container">
			<?php while (have_posts()) {
				the_post();
				
				get_template_part( 'template-parts/content', 'page' );
				
				// If comments are open or we have at least one comment, load up the comment template.
				if (comments_open() || get_comments_number()) {
					comments_template();
				}
			} ?>
			</div><!--.container-->
        </div><!--.movement-->
    </main>
<?php get_sidebar();
get_footer(); ?>

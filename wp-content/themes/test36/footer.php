	</div><!-- #content -->

	<footer class="footer" role="contentinfo">
    	<div class="wrap">
            <h1>Inquiries?</h1>
            <div class="endash">&ndash;</div>
            <div class="footer__text"><?php footer_text(); ?></div>
            <div class="footer__contact">
                call: <a href="tel:+1-234-567-8910">1.234.567.8910</a><br />
                email: <a href="mailto:jon@apexcreations.com">jon@apexcreations.com</a>
            </div>
            <div class="footer__fine_print">&copy; <?=date('Y')?> APEX CREATIONS. All rights reserved</div>
            <a href="#wrap" class="footer__up faded">[<strong>up</strong>]</a>
    	</div>
	</footer>
    <svg class="clip-svg">
        <defs>
            <clipPath id="clip-svg" clipPathUnits="objectBoundingBox">
                  <polygon points="0.5 0, 0 1, 1 1, 0.5 0" />
            </clipPath>
        </defs>   
    </svg>
</div><!-- #wrap -->
<?php wp_footer(); ?>
</body>
</html>

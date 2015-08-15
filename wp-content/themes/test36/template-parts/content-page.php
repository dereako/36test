<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="text">
		<?php the_title( '<h1>', '</h1>' ); ?>
		<?php the_content(); ?>
    </div>
	<?php if (is_front_page()) {
		// grab all the images attached to page the Works page (id=7)
		$works = get_children(array(
			'post_parent'    => 7,
			'post_status'    => 'inherit',
			'post_type'      => 'attachment',
			'post_mime_type' => 'image',
			'order'          => 'ASC',
			'orderby'        => 'menu_order',
			'numberposts' 	 => 7
		));
		// WOULDN'T DO THIS NORMALLY, THIS IS JUST TO SIMULATE MORE TEST CONTENT
		$works = array_merge($works,$works,$works);
				
		if (count($works)) {
			$cnt = 0;
			foreach ($works as $work_id=>$work) {
				$work->link = "works/".$work->post_name; ?>
				<div class="image" data-speed="<?=rand(1, 8)?>" data-movement-speed="<?=rand(1, 8)?>" data-side="<?php if ($cnt%2 == 1) { echo 'left'; } else { echo 'right'; } ?>">
					<div class="image__animate">
                        <a href="<?=$work->link?>">
                            <div class="image__hover">
                                <div class="image__bracket left">[</div>
                                <span class="image__more">more</span>
                                <div class="image__bracket right">]</div>
                            </div>
							<?php // Outputs a full image tag with alt, width and height
                            echo wp_get_attachment_image($work->ID, 'full'); ?>
                        </a>
					</div>
					<div class="image__info">
                    	<div class="left">
                            <h4><a href="<?=$work->link?>"><?=$work->post_title?></a></h4>
                            <strong>[<?=$work->post_excerpt?>]</strong>
                            <div class="endash">&ndash;</div>
                            <?=$work->post_content?>
                    	</div>
                        <div class="right">
                        	<a class="share share-twitter" target="external" href="https://twitter.com/intent/tweet?text=<?=urlencode("Check out the amazing work by Apex Creations http://www.derekhalldesign.com/36test/".$work->link)?>">TW</a>
                        	<a class="share share-facebook" target="external" href="https://www.facebook.com/dialog/share?app_id=1621005648156171&amp;display=popup&amp;href=http%3A%2F%2Fwww.derekhalldesign.com%2F36test%2F<?=urlencode($work->link)?>&amp;redirect_uri=<?=urlencode("http://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'])?>">FB</a>
                        </div>
                        <div class="clear"></div>
					</div>
				</div>
				<?php $cnt++;
				if ($cnt>7) { break; }
				if ($cnt==2 || $cnt==5) {
					$artists = array();
					/* Place artists to the right
					First is Jon, the main artist, attached to the About page (id=11) */
					if ($cnt==2) {
						$jon = get_children(array(
							'post_parent'    => 11,
							'post_status'    => 'inherit',
							'post_type'      => 'attachment',
							'post_mime_type' => 'image',
							'numberposts' 	 => 1
						));
						$artist = reset($jon);
					} else {
						// Next choose one of fellow artists at random
						$fellow = get_children(array(
							'post_parent'    => 22,
							'post_status'    => 'inherit',
							'post_type'      => 'attachment',
							'post_mime_type' => 'image',
							'orderby'        => 'rand',
							'numberposts' 	 => 1
						));
						$artist = reset($fellow);
					}
					if ($artist) {
						$artist->link = "about/".$artist->post_name; ?>
                        <div class="image image-artist" data-speed="<?=rand(1, 8)?>" data-movement-speed="<?=rand(1, 8)?>" data-side="right">
                            <div class="image__animate">
                                <a href="<?=$artist->link?>">
                                    <div class="image__hover">
                                        <div class="image__bracket left">[</div>
                                        <span class="image__more">more</span>
                                        <div class="image__bracket right">]</div>
                                    </div>
                                    <?=wp_get_attachment_image($artist->ID, 'full')?>
                                </a>
                            </div>
                            <div class="image__info">
                                <strong><?php if ($cnt==2) { echo 'Meet the Artist'; } else { echo 'Fellow Artist Profile'; } ?></strong>
                                <h4><a href="<?=$artist->link?>"><?=$artist->post_title?></a></h4>
                                <strong>[<?=$artist->post_excerpt?>]</strong>
                                <div class="endash">&ndash;</div>
                                <?=$artist->post_content?>
                            </div>
                            <div class="clear"></div>
                        </div>
                    <?php }
				}
			}
		}
	} else {
		$attachments = get_children(array(
			'post_parent'    => get_the_ID(),
			'post_status'    => 'inherit',
			'post_type'      => 'attachment',
			'post_mime_type' => 'image',
			'order'          => 'ASC',
			'orderby'        => 'menu_order'
		));
		$total = count($attachments);
		if ($total) {
			$cnt = 0;
			foreach ($attachments as $attachment_id=>$attachment) {
				$attachment->link = $attachment->post_name; ?>
				<div class="image" data-speed="<?=rand(1, 8)?>" data-movement-speed="<?=rand(1, 8)?>" data-side="<?php if ($cnt%2 == 1) { echo 'left'; } else { echo 'right'; } ?>">
					<div class="image__animate">
                        <a href="<?=$attachment->link?>">
                            <div class="image__hover">
                                <div class="image__bracket left">[</div>
                                <span class="image__more">more</span>
                                <div class="image__bracket right">]</div>
                            </div>
                            <?=wp_get_attachment_image($attachment_id, 'full')?>
                        </a>
					</div>
					<div class="image__info">
                    	<div class="left">
                            <h4><a href="<?=$attachment->link?>"><?=$attachment->post_title?></a></h4>
                            <strong>[<?=$attachment->post_excerpt?>]</strong>
                            <div class="endash">&ndash;</div>
                            <?=$attachment->post_content?>
                    	</div>
                        <div class="right">
                        	<a class="share share-twitter" target="external" href="https://twitter.com/intent/tweet?text=<?=urlencode("Check out the amazing work by Apex Creations http://www.derekhalldesign.com/36test/".$attachment->link)?>">TW</a>
                        	<a class="share share-facebook" target="external" href="https://www.facebook.com/dialog/share?app_id=1621005648156171&amp;display=popup&amp;href=http%3A%2F%2Fwww.derekhalldesign.com%2F36test%2F<?=urlencode($attachment->link)?>&amp;redirect_uri=<?=urlencode("http://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'])?>">FB</a>
                        </div>
                        <div class="clear"></div>
					</div>
				</div>
				<?php $cnt++;
			}
		}
	} ?>
</article><!-- #post-[int] -->

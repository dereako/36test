<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="block text" id="block-0" data-speed="1" data-movement-speed="1" data-side="left">
		<?php the_title( '<h1>', '</h1>' ); ?>
        <div class="endash">&ndash;</div>
		<?php if (is_front_page()) {
			global $more;
			$more = 0;
			echo get_the_content();
		} else {
			the_content();
		} ?>
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
			$cnt = 1;
			foreach ($works as $work_id=>$work) {
				$work->link = "works/".$work->post_name; ?>
				<div class="block image" id="block-<?=$cnt?>" data-speed="<?=rand(1, 8)?>" data-movement-speed="<?=rand(1, 8)?>" data-side="<?php if ($cnt%2 == 1 && $cnt!=7) { echo 'right'; } else { echo 'left'; } ?>">
					<div class="block__animate">
                        <a href="<?=$work->link?>">
							<?php // Outputs a full image tag with alt, width and height
                            echo wp_get_attachment_image($work->ID, 'full'); ?>
                            <div class="block__hover">
                                <div class="block__bracket left">[</div>
                                <span class="block__more">more</span>
                                <div class="block__bracket right">]</div>
                            </div>
                        </a>
					</div>
					<div class="block__info">
                    	<div class="left">
                            <h5><a href="<?=$work->link?>"><?=$work->post_title?></a></h5>
                            <strong>[<?=$work->post_excerpt?>]</strong>
                            <div class="endash">&ndash;</div>
                            <?=$work->post_content?>
                    	</div>
                        <div class="right">
                        	<a class="share share-twitter<?=randomBG();?>" target="external" href="https://twitter.com/intent/tweet?text=<?=urlencode("Check out the amazing work by Apex Creations http://www.derekhalldesign.com/36test/".$work->link)?>"><div class="share__icon"></div></a>
                        	<a class="share share-facebook<?=randomBG();?>" target="external" href="https://www.facebook.com/dialog/share?app_id=1621005648156171&amp;display=popup&amp;href=http%3A%2F%2Fwww.derekhalldesign.com%2F36test%2F<?=urlencode($work->link)?>&amp;redirect_uri=<?=urlencode("http://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'])?>"><div class="share__icon"></div></a>
                        </div>
                        <div class="clear"></div>
					</div>
				</div>
				<?php $cnt++;
				if ($cnt>10) { break; }
				if ($cnt==6) {
					// Show the latest blog post
					$posts = get_posts('post_type=post&showposts=1');
					foreach ($posts as $post) {
						setup_postdata($post); ?>
                        <section class="block blog-excerpt" id="block-<?=$cnt?>" data-speed="<?=rand(1, 8)?>" data-movement-speed="<?=rand(1, 8)?>" data-side="left">
                        	<div class="blog-excerpt__info">
                                <h4>The Latest</h4>
                                <a href="<?php the_permalink() ?>" class="huge"><?php the_title() ?></a>
                                <div class="endash">&ndash;</div>
                                <?php the_excerpt(); ?>
                            </div>
                            <div class="blog-excerpt__image">
                                <div class="block__animate">
                                    <a href="<?php the_permalink() ?>">
                                        <?=wp_get_attachment_image(get_post_thumbnail_id($post->ID), 'full');?>
                                        <div class="block__hover">
                                            <div class="block__bracket left">[</div>
                                            <span class="block__more">more</span>
                                            <div class="block__bracket right">]</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="clear"></div>
                        </section>
						<?php $cnt++;
					}
					wp_reset_postdata();
				}
				if ($cnt==3 || $cnt==8) {
					$artists = array();
					/* Place artists to the right
					First is Jon, the main artist, attached to the About page (id=11) */
					if ($cnt==3) {
						$jon = get_children(array(
							'post_parent'    => 11,
							'post_status'    => 'inherit',
							'post_type'      => 'attachment',
							'post_mime_type' => 'image',
							'numberposts' 	 => 1
						));
						$artist = reset($jon);
						$artist->link = "about";
					} else {
						// Next choose one of the fellow artists at random
						$fellow = get_children(array(
							'post_parent'    => 22,
							'post_status'    => 'inherit',
							'post_type'      => 'attachment',
							'post_mime_type' => 'image',
							'orderby'        => 'rand',
							'numberposts' 	 => 1
						));
						$artist = reset($fellow);
						$artist->link = "fellow-artists/".$artist->post_name;
					}
					if ($artist) { ?>
                        <div class="block image image-artist" id="block-<?=$cnt?>" data-speed="<?=rand(1, 5)?>" data-movement-speed="<?=rand(1, 5)?>" data-side="right">
                            <div class="block__animate">
                                <a href="<?=$artist->link?>">
                                    <?=wp_get_attachment_image($artist->ID, 'full')?>
                                    <div class="block__hover">
                                        <div class="block__bracket left">[</div>
                                        <span class="block__more">more</span>
                                        <div class="block__bracket right">]</div>
                                    </div>
                                </a>
                            </div>
                            <div class="block__info">
                                <strong><?php if ($cnt==3) { echo 'Meet the Artist'; } else { echo 'Fellow Artist Profile'; } ?></strong>
                                <h4><a href="<?=$artist->link?>"><?=$artist->post_title?></a></h4>
                                <strong>[<?=$artist->post_excerpt?>]</strong>
                                <div class="endash">&ndash;</div>
                                <?=$artist->post_content?>
                            </div>
                            <div class="clear"></div>
                        </div>
                    	<?php $cnt++;
					}
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
			$cnt = 1;
			foreach ($attachments as $attachment_id=>$attachment) {
				$attachment->link = $attachment->post_name; ?>
				<div class="block image" id="block-<?=$cnt?>" data-speed="<?=rand(1, 8)?>" data-movement-speed="<?=rand(1, 8)?>" data-side="<?php if ($cnt%2 == 1) { echo 'right'; } else { echo 'left'; } ?>">
					<div class="block__animate">
                        <a href="<?=$attachment->link?>">
                            <?=wp_get_attachment_image($attachment_id, 'full')?>
                            <div class="block__hover">
                                <div class="block__bracket left">[</div>
                                <span class="block__more">more</span>
                                <div class="block__bracket right">]</div>
                            </div>
                        </a>
					</div>
					<div class="block__info">
                    	<div class="left">
                            <h5><a href="<?=$attachment->link?>"><?=$attachment->post_title?></a></h5>
                            <strong>[<?=$attachment->post_excerpt?>]</strong>
                            <div class="endash">&ndash;</div>
                            <?=$attachment->post_content?>
                    	</div>
                        <div class="right">
                        	<a class="share share-twitter<?=randomBG();?>" target="external" href="https://twitter.com/intent/tweet?text=<?=urlencode("Check out the amazing work by Apex Creations http://www.derekhalldesign.com/36test/".$attachment->link)?>"><div class="share__icon"></div></a>
                        	<a class="share share-facebook<?=randomBG();?>" target="external" href="https://www.facebook.com/dialog/share?app_id=1621005648156171&amp;display=popup&amp;href=http%3A%2F%2Fwww.derekhalldesign.com%2F36test%2F<?=urlencode($attachment->link)?>&amp;redirect_uri=<?=urlencode("http://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'])?>"><div class="share__icon"></div></a>
                        </div>
                        <div class="clear"></div>
					</div>
				</div>
				<?php $cnt++;
			}
		}
	} ?>
</article><!-- #post-[int] -->

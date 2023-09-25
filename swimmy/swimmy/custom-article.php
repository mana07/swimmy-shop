<?php
/*
Template Name: 記事投稿ページ
Template Post Type: post
*/
?>

  <?php get_header(); ?>
    <div class="subtitle-article">
      <div id="article-page" class="text js-observerTarget timing05">ARTICLE</div>
    </div>
  </div>
  <?php if(have_posts()) :?>
    <?php while (have_posts()) : the_post() ; ?>

    <?php
             $cat = get_the_category();
             $catslug = $cat[0]->slug;
             $catname = $cat[0]->cat_name;
           ?>
   <div class="article-box">
      <h2 class="article-title-bold"><?php the_title(); ?></h2>
       <img class="blue-line" src="<?php echo get_template_directory_uri(); ?>/images/blueline.png">
      <p class="content-p"><?php the_content(); ?></p>
    </div>

    <?php endwhile; ?>
  <?php endif; ?>
 </header>
</div>
<div style="height: 50vh;"></div>
  <?php get_footer(); ?>
 </body>
</html>

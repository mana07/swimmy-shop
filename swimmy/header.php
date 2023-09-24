<!DOCTYPE html>
<html>
  <head>
    <title>swimmy</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="睡眠グッズ通販の架空webサイトです。">

    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/style.css">
    <?php wp_head(); ?>
  </head>

  <body>
   
    <div class="header">
      <header>
        <div class="stars">
          <nav id="nav">
            <a href="#" id="eternite"></a>
            <div id="nav-a">
              <a href="<?php echo esc_url( home_url( '/#about' ) ); ?>" id="nav-about" class="nav-item">about</a>
              <a href="<?php echo esc_url( home_url( '/#article' ) ); ?>" id="nav-menber" class="nav-item">article</a>
              <a href="<?php echo esc_url( home_url( '/#shop' ) ); ?>" id="nav-recruitment" class="nav-item">shop</a>
              <a href="<?php echo home_url(); ?>/order" id="nav-contact" class="nav-item">order made</a>
            </div>
          </nav>
          <div class="openbtn">
            <span></span>
            <span></span>
            <span></span>
            <div class="sp-a">
              <a href="<?php echo esc_url( home_url( '/#about' ) ); ?>" id="sp-about" class="nav-item">about</a>
              <a href="<?php echo esc_url( home_url( '/#article' ) ); ?>" id="sp-menber" class="nav-item">article</a>
              <a href="<?php echo esc_url( home_url( '/#shop' ) ); ?>" id="sp-recruitment" class="nav-item">shop</a>
              <a href="<?php echo home_url(); ?>/order" id="sp-contact" class="nav-item">order made</a>
            </div>
            <div class="sp-sns">
              <img  src="<?php echo get_template_directory_uri(); ?>/images/Instagram_Glyph_Black.png">
              <img id="sp-twitter" src="<?php echo get_template_directory_uri(); ?>/images/2021 Twitter logo - black.png">
            </div>
          </div>
          <script>
            (function(d) {
              var config = {
                kitId: 'wmc5act',
                scriptTimeout: 3000,
                async: true
              },
              h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
            })(document);
          </script>
          
        

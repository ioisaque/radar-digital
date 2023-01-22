    <?php $root = '' ?>

    <!-- Font -->
    <link href="https://fonts.googleapis.com/css?family=Hind:700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,700" rel="stylesheet">

    <!-- CSS -->
    <link type="text/css" rel="stylesheet" href="<?php echo $root ?>css/style.css">
    <link type="text/css" rel="stylesheet" href="<?php echo $root ?>css/bootstrap-grid.min.css">

    <!-- JQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.js"></script>

    </head>

    <body>

      <header class="container">
        <div class="row">
          <!-- Logo -->
          <div class="col-sm-6">
            <p class="site-title">
              <a href="<?php echo $root ?>"><img src="<?php echo $root ?>assets/radar-logo-white.svg"
                  alt="radar digital radar" class="logo"><img src="<?php echo $root ?>assets/radar-text-white.svg"
                  alt="radar digital" class="logo-text"></a>
            </p>
          </div>
          <!-- END Logo -->

          <!-- Navigation bar -->
          <div class="col-sm-6">
            <nav id="navigation">
              <ul>
                <li><a href="<?php echo $root ?>#work">Projetos</a></li>
                <li><a href="<?php echo $root ?>#what">Serviços</a></li>
                <li><a href="<?php echo $root ?>#contact">Contato</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <!-- END Navigation bar -->

        <!-- Mobile navigation bar -->
        <div class="mobile-nav">

          <button class="mobile-menu-btn" onclick="openNav()">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div class="overlay" id="overlay-nav">
            <!-- Button to close the overlay navigation -->
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>

            <nav id="mobile-navigation">
              <ul>
                <li><a href="<?php echo $root ?>#work">Projetos</a></li>
                <li><a href="<?php echo $root ?>#what">Serviços</a></li>
                <li><a href="<?php echo $root ?>#contact">Contato</a></li>
              </ul>
            </nav>
            <!--<div id="language-selector-mobile">
                <ul>
                    <li><a href="#">EN.</a></li>
                    <li><a href="#">FR.</a></li>
                </ul>
            </div>-->
          </div>
        </div>
        <!-- END Mobile navigation bar -->

      </header>

      <!-- Language selector
<div id="language-selector">
    <ul>
        <li><a href="#">EN.</a></li>
        <li><a href="#">FR.</a></li>
    </ul>
</div>
	END Language selector -->
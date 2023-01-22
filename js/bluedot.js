$(document).ready(function () {
    //VIEWPORT HOME HEIGHT
    function setHeight() {
        windowHeight = $(window).innerHeight();
        $('#home').css('height', windowHeight);
    };
    setHeight();

    $(window).resize(function () {
        setHeight();
    });
    //END VIEWPORT HOME HEIGHT    
});

//ANCHOR SMOOTH SCROLL WITH #
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    }
  });
//END SMOOTH SCROLL

//MOBILE MENU
//Open mobile menu
function openNav() {
    document.getElementById("overlay-nav").style.height = "100%";
}

// Close mobile menu
function closeNav() {
    document.getElementById("overlay-nav").style.height = "0%";
}

$('#overlay-nav').on('click', function () {
    document.getElementById("overlay-nav").style.height = "0%";
});
//END MOBILE MENU

//PARALLAX WORD OVERLAY
jQuery(document).ready(function () {
    jQuery('.word-overlay .two-words-overlay')
        .parallax({
            mouseport: jQuery('#home'),
            decay: 0.2
        });
});
//END PARALLAX WORD OVERLAY

//ANIMATIONS ON SCROLL
if (document.getElementById('home')) {
    var waypoint1 = new Waypoint({
        element: document.getElementById('home'),
        handler: function (direction) {
            jQuery(".title").addClass("animate-title");
            jQuery(".description").addClass("animate-text");
            waypoint1.destroy();
        },
        offset: '80%'
    });
}

if (document.getElementById('what')) {
    var waypoint2 = new Waypoint({
        element: document.getElementById('what'),
        handler: function (direction) {
            jQuery(".what-title").addClass("animate-title");
            waypoint2.destroy();
        },
        offset: '80%'
    });
}

var continuousElements = document.getElementsByClassName('work-title')
for (var i = 0; i < continuousElements.length; i++) {
    new Waypoint({
        element: continuousElements[i],
        handler: function () {
            this.element.className += " animate-text";
        },
        offset: '80%'
    })
}

var casestudyElements = document.getElementsByClassName('case-study-description')
for (var i = 0; i < casestudyElements.length; i++) {
    new Waypoint({
        element: casestudyElements[i],
        handler: function () {
            this.element.className += " animate-title";
        },
        offset: '70%'
    })
}
//END ANIMATIONS ON SCROLL
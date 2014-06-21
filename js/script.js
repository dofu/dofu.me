

// JavaScript Document



// Twitter tooltip
$('.sayhiya').qtip({
   content: 'Twit twit! <br/>My Bimbo-moment outlet. I have this peculiar Bimbo-alter-ego urge that I need to entertain',
   style: {
      classes: 'ui-tooltip-tipsy'
   },
   position: {
      my: 'left top', at: 'center right'
   },
  show: {
	effect: function() { $(this).show(200); },// Show
	
	}
})

$('.sayhiya2').qtip({
   content: 'My Linkedin Profile',
   style: {
      classes: 'ui-tooltip-tipsy'
   },
   position: {
      my: 'left top', at: 'center right'
   },
  show: {
  effect: function() { $(this).show(200); },// Show
  
  }
})



// Skills tooltip
$('.pokemon').qtip({
   content: 'My favourite app of all time!',
   style: {
      classes: 'ui-tooltip-tipsy'
   },
   position: {
      my: 'top center', at: 'bottom center'
   },
  show: {
	effect: function() { $(this).show(200); },// Show
	
	}
})

$('.sailormoon').qtip({
   content: 'Monetize your page by increasing the number of conversions',
   style: {
      classes: 'ui-tooltip-tipsy'
   },
   position: {
      my: 'top center', at: 'bottom center'
   },
  show: {
	effect: function() { $(this).show(200); },// Show
	
	}
})

$('.ultraman').qtip({
   content: 'Meet the demands of current tablets & smartphones by making your site mobile friendly',
   style: {
      classes: 'ui-tooltip-tipsy'
   },
   position: {
      my: 'top center', at: 'bottom center'
   },
  show: {
	effect: function() { $(this).show(200); },// Show
	
	}
})


$('.dragonball').qtip({
   content: 'Website designing is the most generic way I would use to describe what I do for living',
   style: {
      classes: 'ui-tooltip-tipsy'
   },
   position: {
      my: 'top center', at: 'bottom center'
   },
  show: {
	effect: function() { $(this).show(200); },// Show
	
	}
})

$('.garfield').qtip({
   content: 'I design & run test to make sure your site performs at its best',
   style: {
      classes: 'ui-tooltip-tipsy'
   },
   position: {
      my: 'top center', at: 'bottom center'
   },
  show: {
	effect: function() { $(this).show(200); },// Show
	
	}
})

$('.mathilda').qtip({
   content: ' He is really very good at this. Will make the effort to understand the purpose of every class before applying them. Very useful when you try to debug across browsers ',
   style: {
      classes: 'ui-tooltip-tipsy'
   },
   position: {
      my: 'top center', at: 'bottom center'
   },
  show: {
	effect: function() { $(this).show(200); },// Show
	
	}
})

jQuery(document).ready(function(){
    jQuery('a[rel=gallery1]').fancybox({
        'type':'image',
        'transitionIn':'fade',
        'transitionOut':'fade',
        'afterShow':function(){
          trackGalleryEvent('ViewInBox', this.href);
        },
        'onComplete':function(){_gaq.push(['_trackEvent','Portfolio','Views', this.title]);}
    });
});

// Add event tracking to gallery image links
jQuery('a[rel=gallery1]').each(function(){
  this.onclick = function(){
    trackGalleryEvent('View', this.getAttribute('href'));
  };
});

function trackGalleryEvent(action, href)
{
  if (!(href > '')) return;
  var filename = href.replace('images/', '');
  if (!(filename > '')) return;
  _gaq.push(['_trackEvent', 'Gallery', action, filename]);
}

// Track social button activity

jQuery('twitterbtn').each(function(){
  this.onclick = function(){
    _gaq.push(['_trackEvent','Social Button','Click', 'Twitter']);
  };
});

jQuery('linkedinbtn').each(function(){
  this.onclick = function(){
    _gaq.push(['_trackEvent','Social Button','Click', 'Linkedin']);
  };
});



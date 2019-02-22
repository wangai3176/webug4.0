// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// 
// 'jquery centered modal overlay' by Campbell McGuiness (c) 2014
//
// uses Stacklayout based CSS to vertically and horizontally centre a modal overlay
// very fast and robust due to lack of positioning javascript
//
// requires jquery 1.7.2 for window.height() support in IE < 9
//
// javascript is only used for:
// - calculate maximum height or width of overlay based on window size at the time of click
// - animate the overlay display and hide
// - keyboard ESC triggers close
//
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//
// markup triggers are always anchor
// target elements can be either an iframe or an img tag
// triggers supply the target URL in the href attribute of an anchor
//
// iframe
// - indicated by the presence of a 'rel' attribute on the trigger. just use '#' as a placeholder
// - maximum width = 1204px
// - iframe aspect ratio = 16:9
// (next version will automatically calulate aspect ratio, and provide a variable for the maximum width)
// 
// img
// - indicated by the lack of a 'rel' attribute
// - maximum height = 90%
// (next version will provide a variable for the maximum height)
//
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

(function ( $ ) {

    var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));


    // array to store URLs of loaded images
    var images = [];
    var $obj = null;

    // append target markup
    var $cmOverlayMask = $('<div/>',{
            id:'cm-overlay-mask'
        }),
        $cmWrap = $('<div/>',{
            id:'cm-wrap'
        }),
        $cmOverlay = $('<div/>',{
            id:'cm-overlay'
        }),
        $cmContent = $('<div/>',{
            'class':'cm-content'
        }),
        $cmScale = $('<i/>',{
            'class':'cm-scale'
        }),
        $cmPrev = $('<a/>',{
            href:'javascript:;',
            title:'Previous',
            id:'cm-prev'
        }).text('prev'),
        $cmNext = $('<a/>',{
            href:'javascript:;',
            title:'Next',
            id:'cm-next'
        }).text('next'),
        $cmClose = $('<a/>',{
            href:'javascript:;',
            title:'Press ESC to close',
            id:'cm-close'
        }).text('close');

    // set max width & aspect ratio (currently only applies to landscape iframes)
    var maxWidth = 900,
        aspectRatio = 0.5625, // 16:9
    // set max height for images (currently only applies to portrait images)
        maxHeightFraction = 0.9, // 90% height
    // initialise variables
        winHeight = 0, winWidth= 0, maxHeight = 0,
        $origin = 'none',
        $target = 'none'

    // closeOverlay() function
    var closeOverlay = function(){
        if ($origin !== 'none') {
            $origin.prepend($target);
        }
        $cmOverlayMask.add($cmOverlay).stop().clearQueue();
        $cmWrap.css('visibility','hidden');
        $cmOverlayMask.fadeTo(500,0,function(){
            $(this).hide();
        });
        $cmOverlay.fadeTo(200,0).removeClass('cm-box').removeAttr('style').find($cmContent).empty();
        $('html').removeClass('overlay-visible');
    };

    // declare displayOverlay() function. also applys class to trigger IE < 8 support hacks css for positioning
    var displayOverlay = function() {
        $cmOverlay.addClass('cm-box').fadeTo(0,1);
    };

    // cross browser windowSize() calculation
    var windowSize = function() {
        if( typeof( window.innerWidth ) == 'number' ) {
    // not IE
            winWidth = window.innerWidth;
            winHeight = window.innerHeight;
        } else if ( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    // IE > 5 in 'standards compliant mode'
            winWidth = document.documentElement.clientWidth;
            winHeight = document.documentElement.clientHeight;
        } else if ( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    // IE 4 compatible
            winWidth = document.body.clientWidth;
            winHeight = document.body.clientHeight;
        }
        maxHeight = Math.round((winHeight * 0.90) / 10) * 10;
    }
    
    // show previous and next arrows
    var showArrows = function(i) {
        objLength = $obj.length - 1;
        if ( i === 0 ) {
            /* first item */
            $cmPrev.hide();
            $cmNext.show();
            if ( i === objLength) {
                /* single item */
                $cmNext.hide();
            }
        } else if ( i === objLength) {
            /* last item */
            $cmPrev.show();
            $cmNext.hide();
        } else {
            /* item has siblings either side */
            $cmPrev.add($cmNext).show();
        }
    }

    // determine content type & populate overlay
    var populateOverlay = function(i,callback) {

        windowSize();

        var $target = $($obj[i]);
        $cmContent.empty();
        $cmOverlay.fadeTo(0,0);

        var url = $target.attr('href');
    // target = iframe
        if ( $target.is('[rel]')) {
    //        windowSize();
            $cmContent.prepend('<iframe width="640" height="360" frameborder="0" allowfullscreen="" src="'+url+'?autoplay=1;wmode=opaque;showinfo=0;rel=0;"></iframe>');
            var $iframe = $cmOverlay.find('iframe'),
            iframeWidth = $iframe.attr('width');
    // define scaleIframe() function. relative to width to cater for landscape orientation
    // could cache this into a function
            if ( iframeWidth < maxWidth ) {
                iframeWidth = maxWidth;
            }
            var iframeHeight = iframeWidth * aspectRatio;
            $iframe.attr({
                width:iframeWidth,
                height:iframeHeight
            });
            callback();
    // target = id
        } else if ( $target.is('[href*="#"]') ) {
            location.hash = '';
    //        $target = $(url).clone(true, true);
            $origin = $(url).parent();
            $target = $(url).detach();
            $cmContent.prepend($target);
            callback();
        } else {
    //        windowSize();
    // target = img
    // define img alt tag if it exists
            if ( $target.is('[alt]')) {
                var alt = $target.attr('alt');
            }

            // check if image has already been loaded
            if ($.inArray(url,images) > -1 ) {
                $cmWrap.addClass('cm-loaded');
            } else {
                $cmWrap.removeClass('cm-loaded');
            }

            var $img = $('<img/>',{
                src:url,
                alt:alt
            });

            // once image has loaded set img height. element must be loaded and not display:none to calculate height
            $cmContent.prepend($img.on('load',function(){
                    images.push(url);
                    var imgHeight = $img.height();
                    if ( maxHeight < imgHeight ) {
                        imgHeight = maxHeight;
                    }
                    $img.attr('height',imgHeight);
                    callback();
                })
            );
        }
    }

    // event handlers for swiping left or right
    $(window).on('swipeleft',function(){
        $cmNext.trigger('tap');
    });
    $(window).on('swiperight',function(){
        $cmPrev.trigger('tap');
    });

    // event handlers for keyboard press
    $(document).keydown(function(e) {
        switch(e.which) {
            case 27: // left
                closeOverlay();
            break;

            case 37: // left
                $cmPrev.trigger('tap');
            break;

            case 38: // up
            break;

            case 39: // right
                $cmNext.trigger('tap');
            break;
            break;

            case 40: // down
            break;

            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });

    // declare showOverlay() function
    var showOverlay = function(i){

        // function for moving prev or next and animating movement
        var cmMove = function(dir) {
            var distance = winWidth - $cmOverlay.width();
            $cmOverlay.clearQueue();
            if ( dir == 'prev' ) {
                i--;
            } else {
                i++;
                distance = distance *= -1;
            }
            $cmOverlay.animate({'left':distance},150,function(){
                populateOverlay(i,function(){
                    var overlayWidth = $cmOverlay.width();
                    distance = (((winWidth - overlayWidth) / 2 ) + overlayWidth) + 60;
                    if ( dir == 'prev' ) {
                        distance = distance *= -1;
                    }
                    displayOverlay();
                    $cmOverlay.css('left',distance).animate({'left':0},150,function(){
                        $cmWrap.addClass('cm-loaded');
                    });
                    showArrows(i);
                });
            });
        }

        if ( !$('#overlay-mask').length ) {
            $('body').append(
                $cmOverlayMask.hide().fadeTo(0,0),
                $cmWrap.append(
                    $cmOverlay.append(
                        $cmContent
                    ),
                    $cmScale,
                    $cmPrev,
                    $cmNext,
                    $cmClose
                )
            );
            if ( isTouch === false ){
            // add tooltip to close button - requires jQuery Tools
                $cmClose.tooltip({
                    position:'bottom center',
                    effect:'fade'
                });
            }
            // attach normal event handlers
            $cmPrev.on('tap',function(){
                if ( $cmPrev.is(':visible')) {
                    cmMove('prev');
                }
            });
            $cmNext.on('tap',function(){
                if ( $cmNext.is(':visible')) {
                    cmMove('next');
                }
            });
            $cmWrap.on('tap',function(event){
                if (!$(event.target).is($($cmOverlay.find('*')).add($cmPrev).add($cmNext)) || $(event.target).is($($cmClose))) {
                    closeOverlay();
                }
            });
        }

        $('html').addClass('overlay-visible');
        showArrows(i);

        // show overlay background mask
        $cmOverlayMask.show().fadeTo(500,0.8,function(){
            $cmWrap.css('visibility','visible');
            populateOverlay(i,function(){
                displayOverlay();
            });
        });

    }

    $.fn.cmOverlay = function(){
        // remove events from existing $obj items until i figure out how to create multiple instances of the plugin
        if ( $obj !== null ) {
            $obj.each(function(){
                $(this).off();
            });
        }
        $obj = this;
        return this.each(function(i) {
            $(this).on('tap',function(e){
                e.preventDefault();
                showOverlay(i);
            });
        });
    }

}( jQuery ));

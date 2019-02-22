/*!
 * jQuery Tools v1.2.7 - The missing UI library for the Web
 * 
 * scrollable/scrollable.js
 * tabs/tabs.js - inc. fix for rapid clicking breaks slideshow (issue 770)
 * tooltip/tooltip.js
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/
 * 
 */
(function(a){a.tools=a.tools||{version:"v1.2.7"},a.tools.scrollable={conf:{activeClass:"active",circular:!1,clonedClass:"cloned",disabledClass:"disabled",easing:"swing",initialIndex:0,item:"> *",items:".items",keyboard:!0,mousewheel:!1,next:".next",prev:".prev",size:1,speed:400,vertical:!1,touch:!0,wheelSpeed:0}};function b(a,b){var c=parseInt(a.css(b),10);if(c)return c;var d=a[0].currentStyle;return d&&d.width&&parseInt(d.width,10)}function c(b,c){var d=a(c);return d.length<2?d:b.parent().find(c)}var d;function e(b,e){var f=this,g=b.add(f),h=b.children(),i=0,j=e.vertical;d||(d=f),h.length>1&&(h=a(e.items,b)),e.size>1&&(e.circular=!1),a.extend(f,{getConf:function(){return e},getIndex:function(){return i},getSize:function(){return f.getItems().size()},getNaviButtons:function(){return n.add(o)},getRoot:function(){return b},getItemWrap:function(){return h},getItems:function(){return h.find(e.item).not("."+e.clonedClass)},move:function(a,b){return f.seekTo(i+a,b)},next:function(a){return f.move(e.size,a)},prev:function(a){return f.move(-e.size,a)},begin:function(a){return f.seekTo(0,a)},end:function(a){return f.seekTo(f.getSize()-1,a)},focus:function(){d=f;return f},addItem:function(b){b=a(b),e.circular?(h.children().last().before(b),h.children().first().replaceWith(b.clone().addClass(e.clonedClass))):(h.append(b),o.removeClass("disabled")),g.trigger("onAddItem",[b]);return f},seekTo:function(b,c,k){b.jquery||(b*=1);if(e.circular&&b===0&&i==-1&&c!==0)return f;if(!e.circular&&b<0||b>f.getSize()||b<-1)return f;var l=b;b.jquery?b=f.getItems().index(b):l=f.getItems().eq(b);var m=a.Event("onBeforeSeek");if(!k){g.trigger(m,[b,c]);if(m.isDefaultPrevented()||!l.length)return f}var n=j?{top:-l.position().top}:{left:-l.position().left};i=b,d=f,c===undefined&&(c=e.speed),h.animate(n,c,e.easing,k||function(){g.trigger("onSeek",[b])});return f}}),a.each(["onBeforeSeek","onSeek","onAddItem"],function(b,c){a.isFunction(e[c])&&a(f).on(c,e[c]),f[c]=function(b){b&&a(f).on(c,b);return f}});if(e.circular){var k=f.getItems().slice(-1).clone().prependTo(h),l=f.getItems().eq(1).clone().appendTo(h);k.add(l).addClass(e.clonedClass),f.onBeforeSeek(function(a,b,c){if(!a.isDefaultPrevented()){if(b==-1){f.seekTo(k,c,function(){f.end(0)});return a.preventDefault()}b==f.getSize()&&f.seekTo(l,c,function(){f.begin(0)})}});var m=b.parents().add(b).filter(function(){if(a(this).css("display")==="none")return!0});m.length?(m.show(),f.seekTo(0,0,function(){}),m.hide()):f.seekTo(0,0,function(){})}var n=c(b,e.prev).click(function(a){a.stopPropagation(),f.prev()}),o=c(b,e.next).click(function(a){a.stopPropagation(),f.next()});e.circular||(f.onBeforeSeek(function(a,b){setTimeout(function(){a.isDefaultPrevented()||(n.toggleClass(e.disabledClass,b<=0),o.toggleClass(e.disabledClass,b>=f.getSize()-1))},1)}),e.initialIndex||n.addClass(e.disabledClass)),f.getSize()<2&&n.add(o).addClass(e.disabledClass),e.mousewheel&&a.fn.mousewheel&&b.mousewheel(function(a,b){if(e.mousewheel){f.move(b<0?1:-1,e.wheelSpeed||50);return!1}});if(e.touch){var p={};h[0].ontouchstart=function(a){var b=a.touches[0];p.x=b.clientX,p.y=b.clientY},h[0].ontouchmove=function(a){if(a.touches.length==1&&!h.is(":animated")){var b=a.touches[0],c=p.x-b.clientX,d=p.y-b.clientY;f[j&&d>0||!j&&c>0?"next":"prev"](),a.preventDefault()}}}e.keyboard&&a(document).on("keydown.scrollable",function(b){if(!(!e.keyboard||b.altKey||b.ctrlKey||b.metaKey||a(b.target).is(":input"))){if(e.keyboard!="static"&&d!=f)return;var c=b.keyCode;if(j&&(c==38||c==40)){f.move(c==38?-1:1);return b.preventDefault()}if(!j&&(c==37||c==39)){f.move(c==37?-1:1);return b.preventDefault()}}}),e.initialIndex&&f.seekTo(e.initialIndex,0,function(){})}a.fn.scrollable=function(b){var c=this.data("scrollable");if(c)return c;b=a.extend({},a.tools.scrollable.conf,b),this.each(function(){c=new e(a(this),b),a(this).data("scrollable",c)});return b.api?c:this}})(jQuery);
(function($) {
        
    // static constructs
    $.tools = $.tools || {version: '@VERSION'};
    
    $.tools.tabs = {
        
        conf: {
            tabs: 'a',
            current: 'current',
            onBeforeClick: null,
            onClick: null, 
            effect: 'default',
            initialEffect: false,   // whether or not to show effect in first init of tabs
            initialIndex: 0,            
            event: 'click',
            rotate: false,
            
      // slide effect
      slideUpSpeed: 400,
      slideDownSpeed: 400,
            
            // 1.2
            history: false
        },
        
        addEffect: function(name, fn) {
            effects[name] = fn;
        }
        
    };
    
    var effects = {
        
        // simple "toggle" effect
        'default': function(i, done) { 
            this.getPanes().hide().eq(i).show();
            done.call();
        }, 
        
        /*
            configuration:
                - fadeOutSpeed (positive value does "crossfading")
                - fadeInSpeed
        */
        fade: function(i, done) {       
            
            var conf = this.getConf(),
                 speed = conf.fadeOutSpeed,
                 panes = this.getPanes();
            
            if (speed) {
                panes.fadeOut(speed);   
            } else {
                panes.hide();   
            }

            panes.eq(i).fadeIn(conf.fadeInSpeed, done); 
        },
        
        // for basic accordions
        slide: function(i, done) {
          var conf = this.getConf();
          
            this.getPanes().slideUp(conf.slideUpSpeed);
            this.getPanes().eq(i).slideDown(conf.slideDownSpeed, done);          
        }, 

        /**
         * AJAX effect
         */
        ajax: function(i, done)  {          
            this.getPanes().eq(0).load(this.getTabs().eq(i).attr("href"), done);    
        }       
    };      
    
    /**
     * Horizontal accordion
     * 
     * @deprecated will be replaced with a more robust implementation
    */
    
    var
      /**
      *   @type {Boolean}
      *
      *   Mutex to control horizontal animation
      *   Disables clicking of tabs while animating
      *   They mess up otherwise as currentPane gets set *after* animation is done
      */
      animating,
      /**
      *   @type {Number}
      *   
      *   Initial width of tab panes
      */
      w;
     
    $.tools.tabs.addEffect("horizontal", function(i, done) {
      if (animating) return;    // don't allow other animations
      
      var nextPane = this.getPanes().eq(i),
          currentPane = this.getCurrentPane();
          
        // store original width of a pane into memory
        w || ( w = this.getPanes().eq(0).width() );
        animating = true;
        
        nextPane.show(); // hidden by default
        
        // animate current pane's width to zero
    // animate next pane's width at the same time for smooth animation
    currentPane.animate({width: 0}, {
      step: function(now){
        nextPane.css("width", w-now);
      },
      complete: function(){
        $(this).hide();
        done.call();
        animating = false;
     }
    });
    // Dirty hack...  onLoad, currentPant will be empty and nextPane will be the first pane
    // If this is the case, manually run callback since the animation never occured, and reset animating
    if (!currentPane.length){ 
      done.call(); 
      animating = false;
    }
    }); 

    
    function Tabs(root, paneSelector, conf) {
        
        var self = this,
        trigger = root.add(this),
        tabs = root.find(conf.tabs),
        panes = paneSelector.jquery ? paneSelector : root.children(paneSelector),
        current, lock = false; // additionnal variable to prevent multiple click() call
             
        
        // make sure tabs and panes are found
        if (!tabs.length)  { tabs = root.children(); }
        if (!panes.length) { panes = root.parent().find(paneSelector); }
        if (!panes.length) { panes = $(paneSelector); }
        
        
        // public methods
        $.extend(this, {                
            click: function(i, e) {
              
                // it is lock, do not do anything
                if( lock ) return self;
              
                var tab = tabs.eq(i),
                    firstRender = !root.data('tabs');
                
                if (typeof i == 'string' && i.replace("#", "")) {
                    tab = tabs.filter("[href*=\"" + i.replace("#", "") + "\"]");
                    i = Math.max(tabs.index(tab), 0);
                }
                                
                if (conf.rotate) {
                    var last = tabs.length -1; 
                    if (i < 0) { return self.click(last, e); }
                    if (i > last) { return self.click(0, e); }                      
                }
                
                if (!tab.length) {
                    if (current >= 0) { return self; }
                    i = conf.initialIndex;
                    tab = tabs.eq(i);
                }               
                
                // current tab is being clicked
                if (i === current) { return self; }
                
                // possibility to cancel click action               
                e = e || $.Event();
                e.type = "onBeforeClick";
                trigger.trigger(e, [i]);                
                if (e.isDefaultPrevented()) { return; }
                
                // lock the click event while the effect is not over
                lock = true;
                
                // if firstRender, only run effect if initialEffect is set, otherwise default
                var effect = firstRender ? conf.initialEffect && conf.effect || 'default' : conf.effect;

                // call the effect
                effects[effect].call(self, i, function() {
                    current = i;
                    // release lock
                    lock = false;
                    // onClick callback
                    e.type = "onClick";
                    trigger.trigger(e, [i]);
                });         
                
                // default behaviour
                tabs.removeClass(conf.current); 
                tab.addClass(conf.current);             
                
                return self;
            },
            
            getConf: function() {
                return conf;    
            },

            getTabs: function() {
                return tabs;    
            },
            
            getPanes: function() {
                return panes;   
            },
            
            getCurrentPane: function() {
                return panes.eq(current);   
            },
            
            getCurrentTab: function() {
                return tabs.eq(current);    
            },
            
            getIndex: function() {
                return current; 
            }, 
            
            next: function() {
                return self.click(current + 1);
            },
            
            prev: function() {
                return self.click(current - 1); 
            },
            
            destroy: function() {
                tabs.off(conf.event).removeClass(conf.current);
                panes.find("a[href^=\"#\"]").off("click.T"); 
                return self;
            }
        
        });

        // callbacks    
        $.each("onBeforeClick,onClick".split(","), function(i, name) {
                
            // configuration
            if ($.isFunction(conf[name])) {
                $(self).on(name, conf[name]); 
            }

            // API
            self[name] = function(fn) {
                if (fn) { $(self).on(name, fn); }
                return self;    
            };
        });
    
        
        if (conf.history && $.fn.history) {
            $.tools.history.init(tabs);
            conf.event = 'history';
        }   
        
        // setup click actions for each tab
        tabs.each(function(i) {                 
            $(this).on(conf.event, function(e) {
                self.click(i, e);
                return e.preventDefault();
            });         
        });
        
        // cross tab anchor link
        panes.find("a[href^=\"#\"]").on("click.T", function(e) {
            self.click($(this).attr("href"), e);        
        }); 
        
        // open initial tab
        if (location.hash && conf.tabs == "a" && root.find("[href=\"" +location.hash+ "\"]").length) {
            self.click(location.hash);

        } else {
            if (conf.initialIndex === 0 || conf.initialIndex > 0) {
                self.click(conf.initialIndex);
            }
        }               
        
    }
    
    
    // jQuery plugin implementation
    $.fn.tabs = function(paneSelector, conf) {
        
        // return existing instance
        var el = this.data("tabs");
        if (el) { 
            el.destroy();   
            this.removeData("tabs");
        }

        if ($.isFunction(conf)) {
            conf = {onBeforeClick: conf};
        }
        
        // setup conf
        conf = $.extend({}, $.tools.tabs.conf, conf);       
        
        
        this.each(function() {              
            el = new Tabs($(this), paneSelector, conf);
            $(this).data("tabs", el); 
        });     
        
        return conf.api ? el: this;     
    };      
        
}) (jQuery); 
(function(a){a.tools=a.tools||{version:"v1.2.7"},a.tools.tooltip={conf:{effect:"toggle",fadeOutSpeed:"fast",predelay:0,delay:30,opacity:1,tip:0,fadeIE:!1,position:["top","center"],offset:[0,0],relative:!1,cancelDefault:!0,events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",tooltip:"mouseenter,mouseleave"},layout:"<div/>",tipClass:"tooltip"},addEffect:function(a,c,d){b[a]=[c,d]}};var b={toggle:[function(a){var b=this.getConf(),c=this.getTip(),d=b.opacity;d<1&&c.css({opacity:d}),c.show(),a.call()},function(a){this.getTip().hide(),a.call()}],fade:[function(b){var c=this.getConf();!a.browser.msie||c.fadeIE?this.getTip().fadeTo(c.fadeInSpeed,c.opacity,b):(this.getTip().show(),b())},function(b){var c=this.getConf();!a.browser.msie||c.fadeIE?this.getTip().fadeOut(c.fadeOutSpeed,b):(this.getTip().hide(),b())}]};function c(b,c,d){var e=d.relative?b.position().top:b.offset().top,f=d.relative?b.position().left:b.offset().left,g=d.position[0];e-=c.outerHeight()-d.offset[0],f+=b.outerWidth()+d.offset[1],/iPad/i.test(navigator.userAgent)&&(e-=a(window).scrollTop());var h=c.outerHeight()+b.outerHeight();g=="center"&&(e+=h/2),g=="bottom"&&(e+=h),g=d.position[1];var i=c.outerWidth()+b.outerWidth();g=="center"&&(f-=i/2),g=="left"&&(f-=i);return{top:e,left:f}}function d(d,e){var f=this,g=d.add(f),h,i=0,j=0,k=d.attr("title"),l=d.attr("data-tooltip"),m=b[e.effect],n,o=d.is(":input"),p=o&&d.is(":checkbox, :radio, select, :button, :submit"),q=d.attr("type"),r=e.events[q]||e.events[o?p?"widget":"input":"def"];if(!m)throw"Nonexistent effect \""+e.effect+"\"";r=r.split(/,\s*/);if(r.length!=2)throw"Tooltip: bad events configuration for "+q;d.on(r[0],function(a){clearTimeout(i),e.predelay?j=setTimeout(function(){f.show(a)},e.predelay):f.show(a)}).on(r[1],function(a){clearTimeout(j),e.delay?i=setTimeout(function(){f.hide(a)},e.delay):f.hide(a)}),k&&e.cancelDefault&&(d.removeAttr("title"),d.data("title",k)),a.extend(f,{show:function(b){if(!h){l?h=a(l):e.tip?h=a(e.tip).eq(0):k?h=a(e.layout).addClass(e.tipClass).appendTo(document.body).hide().append(k):(h=d.next(),h.length||(h=d.parent().next()));if(!h.length)throw"Cannot find tooltip for "+d}if(f.isShown())return f;h.stop(!0,!0);var o=c(d,h,e);e.tip&&h.html(d.data("title")),b=a.Event(),b.type="onBeforeShow",g.trigger(b,[o]);if(b.isDefaultPrevented())return f;o=c(d,h,e),h.css({position:"absolute",top:o.top,left:o.left}),n=!0,m[0].call(f,function(){b.type="onShow",n="full",g.trigger(b)});var p=e.events.tooltip.split(/,\s*/);h.data("__set")||(h.off(p[0]).on(p[0],function(){clearTimeout(i),clearTimeout(j)}),p[1]&&!d.is("input:not(:checkbox, :radio), textarea")&&h.off(p[1]).on(p[1],function(a){a.relatedTarget!=d[0]&&d.trigger(r[1].split(" ")[0])}),e.tip||h.data("__set",!0));return f},hide:function(c){if(!h||!f.isShown())return f;c=a.Event(),c.type="onBeforeHide",g.trigger(c);if(!c.isDefaultPrevented()){n=!1,b[e.effect][1].call(f,function(){c.type="onHide",g.trigger(c)});return f}},isShown:function(a){return a?n=="full":n},getConf:function(){return e},getTip:function(){return h},getTrigger:function(){return d}}),a.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),function(b,c){a.isFunction(e[c])&&a(f).on(c,e[c]),f[c]=function(b){b&&a(f).on(c,b);return f}})}a.fn.tooltip=function(b){var c=this.data("tooltip");if(c)return c;b=a.extend(!0,{},a.tools.tooltip.conf,b),typeof b.position=="string"&&(b.position=b.position.split(/,?\s/)),this.each(function(){c=new d(a(this),b),a(this).data("tooltip",c)});return b.api?c:this}})(jQuery);

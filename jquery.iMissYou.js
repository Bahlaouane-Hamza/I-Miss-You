//     jquery.IMissYou.js 1.0.0

//     (c) 2015 Hamza Bahlaouane
//     jquery.IMissYou may be freely distributed under the MIT license.
//     For all details and documentation:
//     https://github.com/Bahlaouane-Hamza/I-Miss-You


// Uses CommonJS, AMD or browser globals to create a jQuery plugin.
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function( root, jQuery ) {
            if ( jQuery === undefined ) {
                // require('jQuery') returns a factory that requires window to
                // build a jQuery instance, we normalize how we use modules
                // that require this pattern but the window provided is a noop
                // if it's defined (how jquery works)
                if ( typeof window !== 'undefined' ) {
                    jQuery = require('jquery');
                }
                else {
                    jQuery = require('jquery')(root);
                }
            }
            factory(jQuery);
            return jQuery;
        };
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    "use strict";

    $.iMissYou = function (options) {

        // Options
        var opts = $.extend( {}, $.iMissYou.defaults, options),
            origTitle = document.title,
            favicon = $('head').find('link[rel$="icon"]');
        var origFavicon = favicon.attr("href");


        // Preload favicon
        if(opts.favicon.enabled)
            preloadFavicon();

        // Watch for visibilitychange event
        $(document).bind("visibilitychange", function(){

            // Change title
            $(document).prop('title', (document.hidden) ? opts.title : origTitle);

            // Change favicon too ?
            if(opts.favicon.enabled){
                if($(document).prop('hidden'))
                    changeFavicon();
                else
                    revertFavicon();
            }
        });

        // Utilities
        function changeFavicon() {
            favicon.attr("href", opts.favicon.src);
        }
        function revertFavicon() {
            favicon.attr("href", origFavicon);
        }
        function preloadFavicon() {
            $('<img/>')[0].src = opts.favicon.src;
        }

    };

    // Default
    $.iMissYou.defaults = {
        title: "I Miss you !",
        favicon: {
            enabled: true,
            src:'iMissYouFavicon.ico'
        }
    };

}));



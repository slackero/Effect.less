$(document).ready(function($) {
    "use strict";
    
    var animationEvent = function() {
        var el = document.createElement("fakeelement");

        var animations = {
            "animation"      : "animationend",
            "MSAnimationEnd" : "msAnimationEnd",
            "OAnimation"     : "oAnimationEnd",
            "MozAnimation"   : "mozAnimationEnd",
            "WebkitAnimation": "webkitAnimationEnd"
        }
                
        for (var i in animations){
            if (el.style[i] !== undefined){
                return animations[i];
            }
        }
    };
    
    $(".btn[data-fx-name]").on("click", function(e) {
        var $btn = $(e.target),
        fx = $btn.data("fx-name");
        $btn.removeClass(fx).addClass(fx);
    });
    
    
    $(".btn[data-fx-name]").on(animationEvent(), function(e) {
        var $btn = $(e.target),
        fx = $btn.data("fx-name");
        
        if($btn.hasClass(fx)) {
            $btn.removeClass(fx);
        }
    });
});
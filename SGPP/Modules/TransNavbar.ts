/// <reference path="../ModuleDefinition.ts" />

var ModuleDefinition;
(function (ModuleDefinition) {
    var TransNavbar = (function () {
        function TransNavbar() {
            this.style = "header {transition: opacity 0.4s ease-in-out}\n" + ".scroll {opacity: 0.3;}\n" + "header:hover {opacity: 1}";
            this.shouldRun = function (location) { return true; };
        }
        TransNavbar.prototype.init = function () {
        };
        TransNavbar.prototype.render = $(window).scroll(function() {
			if ($(window).scrollTop() > 40 ){
				$('header').addClass('scroll');
			} else {
				$('header').removeClass('scroll');
            };      
		});
        TransNavbar.prototype.name = function () {
            return "Navbar becomes transparent when scrolled down";
        };
        return TransNavbar;
    })();
    ModuleDefinition.TransNavbar = TransNavbar;
})(ModuleDefinition || (ModuleDefinition = {}));
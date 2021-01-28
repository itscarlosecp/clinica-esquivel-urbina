"use strict";
var Navbar = /** @class */ (function () {
    function Navbar() {
        this.transPosition = 200;
        this.component = document.querySelector("nav");
        this.setTransparency();
    }
    Navbar.prototype.setTransparency = function () {
        var _this = this;
        window.addEventListener("scroll", function (_e) {
            if (window.scrollY > _this.transPosition) {
                _this.component.classList.add("blur");
            }
            else {
                _this.component.classList.contains("blur") &&
                    _this.component.classList.remove("blur");
            }
        });
    };
    return Navbar;
}());
var navbar = new Navbar();

"use strict";
const ripple_1 = require("@material/ripple");
var comp = {
    mdcComponents: [],
    onCreate: function () {
        this.state = {};
    },
    onMount: function () {
        console.log(this.input.ripple);
        let ripple = this.input.ripple ? new ripple_1.MDCRipple(this.el) : null;
        ripple && this.mdcComponents.push(ripple);
    },
    clickHandler: function (...args) {
        this.emit('click', ...args);
    },
    onDestroy() {
        for (let comp of this.mdcComponents) {
            comp.destroy();
        }
    }
};
module.exports = comp;
//# sourceMappingURL=component.js.map
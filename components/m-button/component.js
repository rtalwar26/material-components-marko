"use strict";
const RippleAdapter_1 = require("./RippleAdapter");
var comp = {
    mdcComponents: [],
    onCreate: function () {
        this.state = {};
    },
    onMount: function () {
        let ripple = this.input.ripple ? new RippleAdapter_1.default().activate(this.el) : null;
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
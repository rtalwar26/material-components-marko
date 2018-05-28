"use strict";
// import {MDCRipple} from '@material/ripple';
Object.defineProperty(exports, "__esModule", { value: true });
class RippleAdapter {
    activate(el) {
        // return new MDCRipple(el)
        return mdc.ripple.MDCRipple.attachTo(el);
    }
}
exports.default = RippleAdapter;
//# sourceMappingURL=RippleAdapter.js.map
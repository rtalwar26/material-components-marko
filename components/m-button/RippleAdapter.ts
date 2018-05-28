// import {MDCRipple} from '@material/ripple';

export default class RippleAdapter{

    activate(el:HTMLElement){
        // return new MDCRipple(el)
        return mdc.ripple.MDCRipple.attachTo(el)
    }
}
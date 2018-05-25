import {MDCRipple} from '@material/ripple';

var comp = {
    mdcComponents:[],
    onCreate: function () {
        this.state = {
        };
    },
    onMount: function () {
        console.log(this.input.ripple);
        let ripple = this.input.ripple ? new MDCRipple(this.el) : null;

        ripple && this.mdcComponents.push(ripple);
    },
    clickHandler:function(...args){
        this.emit('click',...args)
    },
    onDestroy(){
        for(let comp of this.mdcComponents){
            comp.destroy();
        }
    }
}
export = comp;
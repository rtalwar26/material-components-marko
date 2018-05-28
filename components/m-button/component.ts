import RippleAdapter from "./RippleAdapter";


var comp = {
    mdcComponents:[],
    onCreate: function () {
        this.state = {
        };
    },
    onMount: function () {
        let ripple = this.input.ripple ? new RippleAdapter().activate(this.el) : null;

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
cc.Class({
    extends: cc.Component,

    properties: {
        avatar: {
            default: null,
            type: cc.Sprite
        },

        msg: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
    },

    // use this for initialization
    onLoad: function () {
        
    },

    // called every frame
    update: function (dt) {

    },

    init(data){
        this.msg.string = data.nick + '贡献了' + data.value + '分钟的能量水' 
    }
});

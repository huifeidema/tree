cc.Class({
    extends: cc.Component,

    properties: {
        rankNo: {
            default: null,
            type: cc.Label
        },
        nickName: {
            default: null,
            type: cc.Label
        },
        growth: {
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

    init(rankData){
        this.rankNo.string = rankData.rank
        this.nickName.string = rankData.nick
        this.growth.string = rankData.contribution
    }
});

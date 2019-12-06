const MsgModel = require('./MsgModel')
var self = null
cc.Class({
    extends: cc.Component,

    properties: {
        msgsNode: {
            default: null,
            type: cc.Node
        },
        itemPrefab: {
            default: null,
            type: cc.Prefab
        },
        cdText: {
            default: null,
            type: cc.Label
        },
        progressText: {
            default: null,
            type: cc.Label
        },
        energyBar: {
            default: null,
            type: cc.ProgressBar
        },
        doubleBtn: {
            default: null,
            type: cc.Button
        },
        timeBtn: {
            default: null,
            type: cc.Button
        },
        rankItemPrefab: {
            default: null,
            type: cc.Prefab
        },
        nameText: {
            default: null,
            type: cc.Label
        },
        coinText: {
            default: null,
            type: cc.Label
        },
        rankNoText: {
            default: null,
            type: cc.Label
        },
        growthText: {
            default: null,
            type: cc.Label
        },
        rankScrollView: {
        	default: null,
        	type: cc.ScrollView
        },
    },

    // use this for initialization
    onLoad: function () {
        self = this
        // this.label.string = this.text;
        this._timeCount = 0
        this._cd = 120 * 60
        this._totalEnergy = 1000
        this._currentEnergy = 0
        this.progressText.string = 1 + '%'
        this.energyBar.progress = 0.1
        this._energyFactor = 1.0
        this._msgModel = new MsgModel()
        this._msgModel.login(this.onLoginCallback)
        this._msgModel.query(this.onQueryCallback)
        this._timeStamp = 0
        self.energyBar.progress = 0
        this.spacing = 12
        this.content = this.rankScrollView.content;
        this.updateRankInfo()
    },

    addEnergy(data){
        var item = cc.instantiate(this.itemPrefab).getComponent('Avatar');
        this.msgsNode.addChild(item.node)
        item.init(data)
    },

    onLoginCallback(data){
        cc.log('onLoginCallback')
        self._userData = data
        if (self._userData.coins <= 800){
            self.doubleBtn.enabled = false
        }
        self.updateUserInfo(data)
    },
    
    addProgress(slipGrowth, data){
        let percent = (self.energyBar.progress * data.total  + slipGrowth) / data.total
        self.progressText.string = (percent * 100) + '%'
        self.energyBar.progress = percent
    },

    updateProgress(data){
        const slipGrowth = (data.growth - (self.energyBar.progress * data.total)) / 1000
        for (let index = 0; index < 1000; index++) {
            setTimeout(() => {
                self.addProgress(slipGrowth, data)
            }, 10 * (index + 1));
        }
    },

    onQueryCallback(data){
        //refresh progress
        if (data.double_time <= 0){
            self.doubleBtn.node.active = true
            self.timeBtn.node.active = false
        }else {
            self.doubleBtn.node.active = false
            self.timeBtn.node.active = true
            self.cdText.string = data.double_time + ''
        }
        self.updateProgress(data)
        
        //弹幕
        for (let index = 0; index < data.study_actions.length; index++) {
            const element = data.study_actions[index];
            if (element.timestamp > self._timeStamp){
                setTimeout(() => {
                    self.addEnergy(element)
                }, 2000 * (index + 1));
            }
        }
        self._timeStamp = data.study_actions[0].timestamp
    },

    // called every frame
    update: function (dt) {
        this._timeCount += dt
        if (this._timeCount > 10){
            this._timeCount = 0
            this._msgModel.query(this.onQueryCallback)
        }
    },

    onDoubleClick(){
        cc.log('onDoubleClick')
        this._energyFactor = 2.0
        //上传双倍经验卡
        this.doubleBtn.node.active = false
        this.timeBtn.node.active = true
        this._msgModel.speed(JSON.stringify({
            "login": 4076423544,
            "group_id": 2059799
            }))
        
    },

    updateUserInfo(data){
        this.nameText.string = data.nick
        this.coinText.string = data.coins
        this.rankNoText.string = data.rank
        this.growthText.string = data.contribution
    },

    onRankInfo(data){
        for (let i = 0; i < data.ranks.length; i++) {
            const rankData = data.ranks[i];
            var item = cc.instantiate(self.rankItemPrefab).getComponent('RankItem');
            self.content.addChild(item.node);
    		item.node.setPosition(10, -80 - item.node.height * (0.5 + i) - self.spacing * (i + 1));
            item.init(rankData)
        }
    },

    updateRankInfo(){
        this._msgModel.leaderboard(this.onRankInfo)
    }
});

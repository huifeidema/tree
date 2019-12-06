cc.Class({
    extends: cc.Component,

    // use this for initialization
    init: function () {
        this._msgs = [
            {
                avatar: 'xxx',
                msg: 'cheery贡献了10分钟的能量水',
                count: 10,
            },
            {
                avatar: 'xxx',
                msg: 'cheery111贡献了20分钟的能量水',
                count: 20,
            },
            {
                avatar: 'xxx',
                msg: 'cheery222贡献了30分钟的能量水',
                count: 30,
            }
        ]
    },

    // called every frame
    update: function (dt) {

    },

    setMsgs: function(data){

    },

    getMsgs: function(){
        return this._msgs
    },

    login(callback){
        //获取用户数据
        var xhr = cc.loader.getXMLHttpRequest();//创建XMLHttpRequest对象
        cc.log("Status: Send Get Request to httpbin.org");
        //set arguments with <URL>?xxx=xxx&yyy=yyy
        var url ="http://vidar.thellsapi.com/user/4076423544";
        // url=url+"?"+"access_token="+token+"&gameId="+gameid;
        cc.log(url);
        xhr.open("GET", url, true);//设置和服务器交互的参数
        xhr.onreadystatechange = function () {		//注册回调的方法，发送成功后执行
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status <= 207)) {
                var httpStatus = xhr.statusText;
                var response = xhr.responseText//.substring(0, 100) + "...";
                const user=JSON.parse(response);
                callback(user)
                cc.log(user);
            //  cc.log("GET Response (100 chars): \n" + response);
            // cc.log("Status: Got GET response! " + httpStatus);
            }
        };
        xhr.send();//设置向服务器发送的数据，启动和服务器的交互
    },

    query(callback){
        //获取用户数据
        var xhr = cc.loader.getXMLHttpRequest();//创建XMLHttpRequest对象
        cc.log("Status: Send Get Request to httpbin.org");
        //set arguments with <URL>?xxx=xxx&yyy=yyy
        var url ="http://vidar.thellsapi.com/tree/2059799";
        // url=url+"?"+"access_token="+token+"&gameId="+gameid;
        cc.log(url);
        xhr.open("GET", url, true);//设置和服务器交互的参数
        xhr.onreadystatechange = function () {		//注册回调的方法，发送成功后执行
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status <= 207)) {
                var httpStatus = xhr.statusText;
                var response = xhr.responseText//.substring(0, 100) + "...";
                const tree=JSON.parse(response);
                callback(tree)
                cc.log(tree);
            //  cc.log("GET Response (100 chars): \n" + response);
            // cc.log("Status: Got GET response! " + httpStatus);
            }
        };
        xhr.send();//设置向服务器发送的数据，启动和服务器的交互
    },

    leaderboard(callback){
        //获取用户数据
        var xhr = cc.loader.getXMLHttpRequest();//创建XMLHttpRequest对象
        cc.log("Status: Send Get Request to httpbin.org");
        //set arguments with <URL>?xxx=xxx&yyy=yyy
        var url ="http://vidar.thellsapi.com/leaderboard/2059799";
        // url=url+"?"+"access_token="+token+"&gameId="+gameid;
        cc.log(url);
        xhr.open("GET", url, true);//设置和服务器交互的参数
        xhr.onreadystatechange = function () {		//注册回调的方法，发送成功后执行
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status <= 207)) {
                var httpStatus = xhr.statusText;
                var response = xhr.responseText//.substring(0, 100) + "...";
                const leaderboard=JSON.parse(response);
                callback(leaderboard)
                cc.log(leaderboard);
            //  cc.log("GET Response (100 chars): \n" + response);
            // cc.log("Status: Got GET response! " + httpStatus);
            }
        };
        xhr.send();//设置向服务器发送的数据，启动和服务器的交互
    },

    gift(data, callback){
        //获取用户数据
        var xhr = cc.loader.getXMLHttpRequest();//创建XMLHttpRequest对象
        cc.log("Status: Send Get Request to httpbin.org");
        //set arguments with <URL>?xxx=xxx&yyy=yyy
        var url ="http://vidar.thellsapi.com/gift";
        // url=url+"?"+"access_token="+token+"&gameId="+gameid;
        cc.log(url);
        xhr.open("POST", url, true);//设置和服务器交互的参数
        xhr.onreadystatechange = function () {		//注册回调的方法，发送成功后执行
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status <= 207)) {
                var httpStatus = xhr.statusText;
                var response = xhr.responseText//.substring(0, 100) + "...";
                const gift=JSON.parse(response);
                callback(gift)
                cc.log(gift);
            //  cc.log("GET Response (100 chars): \n" + response);
            // cc.log("Status: Got GET response! " + httpStatus);
            }
        };
        xhr.send(data);//设置向服务器发送的数据，启动和服务器的交互
    },

    speed(data, callback){
        //获取用户数据
        var xhr = cc.loader.getXMLHttpRequest();//创建XMLHttpRequest对象
        cc.log("Status: Send Get Request to httpbin.org");
        //set arguments with <URL>?xxx=xxx&yyy=yyy
        var url ="http://vidar.thellsapi.com/speed";
        // url=url+"?"+"access_token="+token+"&gameId="+gameid;
        cc.log(url);
        xhr.open("POST", url, true);//设置和服务器交互的参数
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {		//注册回调的方法，发送成功后执行
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status <= 207)) {
                var httpStatus = xhr.statusText;
                var response = xhr.responseText//.substring(0, 100) + "...";
                const speed=JSON.parse(response);
                if (callback) callback(speed)
                cc.log(speed);
            //  cc.log("GET Response (100 chars): \n" + response);
            // cc.log("Status: Got GET response! " + httpStatus);
            }
        };
        xhr.send(data);//设置向服务器发送的数据，启动和服务器的交互
    },


});

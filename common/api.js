
//var device_type = 'web'

var device_type = 'mobile'

//var device_type = 'wapp'

var host = "http://localhost"

module.exports = {
    HOST: host,
    API_ROOT: host + '/week/',
    API_VERSION: '1.1.0',
    post(options) {
        this.request(options);
    },
    get(options) {
        options.method = 'GET';
        this.request(options);
    },
    delete(options) {
        options.method = 'DELETE';
        this.request(options);
    },
    put(options) {
        options.method = 'PUT';
        this.request(options);
    },
    request(options) {
        var apiRoot = this.API_ROOT;
        var token   = '';
        try {
            token = wx.getStorageSync('token')
        } catch (e) {
            // Do something when catch error
        }

        var requireLogin = true;

        if (typeof options.login == 'undefined' || options.login == true) {
            requireLogin = true;
        } else {
            requireLogin = false;
        }

        wx.request({
            url: apiRoot + options.url,
            data: options.data,
            method: options.method ? options.method : 'POST',
            header: {
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/x-www-form-urlencoded',
                'XX-Token': token,
                'XX-Device-Type': 'wxapp',
                'XX-Api-Version': this.API_VERSION
            },
            success: res => {
                var data = res.data;
                if (data.code == 10001 && requireLogin) {

                    if (!tryingLogin) {
                        // tryingLogin        = true;
                        // var hasGetUserInfo = wx.getStorageSync('hasGetUserInfo');
                        // if (hasGetUserInfo) {
                        //     wx.showToast({
                        //         title: '正在重新登录',
                        //         icon: 'success',
                        //         duration: 1000
                        //     });
                        //     setTimeout(() => {
                        //         this.login();
                        //     }, 1000);
                        // } else {
                        //     this.login();
                        // }

                    }
                    // 登录注册
                    let currentPages = getCurrentPages();

                    console.log('-------no login!---------');

                    let currentRoute = currentPages.pop()['__route__'];
                    if (currentRoute != 'pages/login/login') {
                        wx.navigateTo({
                            url: '/pages/login/login'
                        });
                    }

                } else {
                    options.success(data);
                }

            },
            fail: function (res) {
                if (options.fail) {
                    options.fail(res)
                }
            },
            complete: options.complete ? options.complete : null
        });
    },
    login: function () {
        wx.login({
            success: loginRes => {
                console.log(loginRes);
                if (loginRes.code) {
                    wx.getUserInfo({
                        withCredentials: true,
                        success: res => {
                            console.log(res);
                            wx.setStorageSync('hasGetUserInfo', '1');
                            this.post({
                                url: 'wxapp/public/login',
                                data: {
                                    code: loginRes.code,
                                    encrypted_data: res.encryptedData,
                                    iv: res.iv,
                                    raw_data: res.rawData,
                                    signature: res.signature
                                },
                                success: data => {
                                    if (data.code == 1) {
                                        wx.showToast({
                                            title: '登录成功!',
                                            icon: 'success',
                                            duration: 1000
                                        });

                                        try {
                                            wx.setStorageSync('login', '1');
                                            wx.setStorageSync('token', data.data.token);
                                            wx.setStorageSync('user', data.data.user);
                                        } catch (e) {
                                        }

                                        setTimeout(function () {
                                            wx.switchTab({
                                                url: '/pages/index/index',
                                                success: res => {
                                                    getCurrentPages()[0].onPullDownRefresh()
                                                }
                                            });
                                        }, 1000);
                                    }

                                },
                                complete: () => {
                                    tryingLogin = false;
                                }
                            });
                        },
                        fail: (res) => {
                            console.log(res);
                            tryingLogin = false;
                            if (res.errMsg == "getUserInfo:cancel" || res.errMsg == "getUserInfo:fail auth deny") {
                                wx.showModal({
                                    title: '用户授权失败',
                                    showCancel: false,
                                    content: '请删除此小程序重新授权!',
                                    success: function (res) {
                                        if (res.confirm) {
                                            console.log('用户点击确定')
                                        }
                                    }
                                });
                            }

                        }
                    });


                } else {
                    tryingLogin = false;
                }
            },
            fail: () => {
                tryingLogin = false;
            }
        });
    },
    uploadFile(options) {

        options.url = this.API_ROOT + options.url;

        let token = this.getToken();

        let that = this;

        let oldSuccess  = options.success;
        options.success = function (res) {
            console.log(res.data);
            let data = JSON.parse(res.data);
            console.log(data);
            if (data.code == 0 && data.data && data.data.code && data.data.code == 10001) {
                // wx.navigateTo({
                //     url: '/pages/login/login'
                // });
                that.login();
            } else {
                oldSuccess(data);
            }
        }

        options.header = {
            'Content-Type': 'multipart/form-data',
            'XX-Token': token,
            'XX-Device-Type': 'wxapp',
            'XX-Api-Version': this.API_VERSION
        };
        wx.uploadFile(options);

    },
    getToken() {
        var token = '';
        try {
            token = wx.getStorageSync('token')
        } catch (e) {
            // Do something when catch error
        }

        return token;
    }
};
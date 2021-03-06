/**
 * 通用模块 - 登录注册弹出层
 * @param {Element} $btn 触发弹出层的按钮
 * @param {String} type  显示登录层/注册层
 * @description 将弹出层的html集成在模块里，使模块完全解耦。
 * @author zhangsilei 2017-01-23
 */
var loginRegisterView = function($btn, type) {

    this.init = function(suc) {
        this.alert(suc);
    };

    this.html = function() {
        return '<div data-am-widget="tabs" class="am-tabs am-tabs-default m-loginRegister-tabs" data-am-tabs>' +
            '<ul class="am-tabs-nav am-cf am-text-lg">' +
            '<li class="am-active">' +
            '<a href="[data-tab-panel-0]">登录</a>' +
            '</li>' +
            '<li class="">' +
            '<a href="[data-tab-panel-1]">注册</a>' +
            '</li>' +
            '</ul>' +
            '<div class="am-tabs-bd">' +
            '<div data-tab-panel-0 class="am-tab-panel am-active">' +
            '<input type="text" class="am-form-field am-margin-vertical-sm account" placeholder="手机号/邮箱">' +
            '<input type="text" class="am-form-field" placeholder="密码">' +
            '<div class="am-margin-top-sm am-cf m-loginRegister-set">' +
            '<label class="am-checkbox-inline am-fl">' +
            '<input type="checkbox" checked="checked"> 记住密码' +
            '</label>' +
            '<a href="#" class="am-text-sm am-text-middle am-fr">忘记密码</a>' +
            '</div>' +
            '<input type="button" value="登 录" class="am-btn am-btn-primary am-btn-block am-margin-top login-btn" data-am-loading="{spinner: "circle-o-notch", loadingText: "登录中..."}">' +
            '</div>' +
            '<div data-tab-panel-1 class="am-tab-panel">' +
            '<input type="text" class="am-form-field am-margin-vertical-sm" placeholder="昵称">' +
            '<input type="text" class="am-form-field" placeholder="手机号">' +
            '<input type="password" class="am-form-field am-margin-vertical-sm" placeholder="密码">' +
            '<div class="m-loginRegister-codeWrap">' +
            '<input type="text" class="am-form-field m-loginRegister-code" placeholder="验证码">' +
            '<img src="https://www.zhihu.com/captcha.gif?r=1472116117193&type=login" class="am-fr m-loginRegister-codeImg" alt="验证码">' +
            '</div>' +
            '<input type="button" name="" value="注 册" class="am-btn am-btn-block am-btn-primary am-margin-top am-fl register-btn" data-am-loading="{spinner: "circle-o-notch", loadingText: "注册中..."}">' +
            '</div>' +
            '</div>' +
            '</div>'
    };

    this.alert = function(suc) {
        var _this = this;
        $btn.on('click', function(e) {
            layer.open({
                type: 1,
                content: _this.html(),
                anim: 'up',
                btn: '隐藏按钮',
                // style: 'border: none; -webkit-animation-duration: .5s; animation-duration: .5s;',
                style: 'width: 80%; max-width: 400px; padding: 20px;',
                success: function(layer) {
                    var timer = null;
                    $('.layui-m-layerbtn').hide();
                    timer = setTimeout(function() {
                        $('.m-loginRegister-tabs').tabs('open', type == 'login' ? 0 : 1);
                        clearTimeout(timer);
                    }, 50);
                    _this.sendAjax(function() {
                        if (typeof suc == 'function') {
                            suc.call(_this);
                        }
                    });
                }
            });
        })
    };

    this.sendAjax = function(cb) {
        $('.m-loginRegister-tabs').on('click', '.login-btn', function(e) {
                var $this = $(this);
                $this.button('loading');
                // ajax
                setTimeout(function() {
                    $this.button('reset');
                    cb();
                }, 2000);
            })
            .on('click', '.register-btn', function(e) {
                var $this = $(this);
                $this.button('loading');
                // ajax
                setTimeout(function() {
                    $this.button('reset');
                    cb();
                }, 2000);
            });
    };

    this.close = function() {
        $('.layui-m-layerbtn span').click();
    };

}
var IndexPage = {
    init: function() {
        var _this = this;
        _this.render();
        _this.bindEvents();
    },

    render: function() {
        var alHorizontal = 10 * 2,
            lmHorizontal = 5 * 2,
            maxScreenWidth = 1200;
        $('.load-more').width($('.articalList').width() - alHorizontal - lmHorizontal);
        // 自适应布局
        if ($(window).width() < maxScreenWidth) {
            $('.right').hide();
            $('.left').removeClass('am-fl').css('margin', '0 auto');
            $('.tags').show();
        } else {
            $('.right').show();
            $('.left').addClass('am-fl').removeAttr('style');
            $('.tags').hide();
        }
    },

    bindEvents: function() {
        new loginRegisterView($('.login'), 'login').init();
        new loginRegisterView($('.register'), 'register').init();

        $(document).on('click', '.load-more', function(event) {
            var $this = $(this);
            $this.button('loading');
            // ajax
            setTimeout(function() {
                $this.button('reset');
            }, 2000);
        }).on('click', '.like-btn', function(event) {
            var $this = $(this),
                $icon = $this.find('.like-icon'),
                $num = $this.find('.num'),
                animation = 'am-animation-scale-up';
            if (!$this.data('clicked')) {
                if ($.AMUI.support.animation) {
                    $icon.addClass(animation)
                        .one($.AMUI.support.animation.end, function() {
                            $icon.removeClass(animation);
                        });
                }
                $icon.addClass('like-icon-active');
                $num.text($.trim($num.text()) - 0 + 1).addClass('like-icon-active');
                $this.css({
                    borderColor: '#f37b1d',
                    background: '#F37B5A'
                }).data('clicked', true);
            } else {
                layer.open({
                    content: '赞过了哟',
                    skin: 'msg',
                    time: 2
                });
            }
        });
    }
}

$(function() {
    IndexPage.init();
    $(window).resize(function(event) {
        IndexPage.render();
    });
})
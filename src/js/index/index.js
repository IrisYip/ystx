var IndexPage = {
    init: function() {
        var _this = this;
        _this.render();
        _this.addEvent();
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

    addEvent: function() {
        new LoginRegisterMask($('.login'), 'login').init();
        new LoginRegisterMask($('.register'), 'register').init();

        $('.load-more').on('click', function() {
            var $this = $(this);
            $this.button('loading');
            // ajax
            setTimeout(function() {
                $this.button('reset');
            }, 2000);
        });

        $('.like').on('click', function(event) {
            var $this = $(this),
                $icon = $this.find('.icon'),
                $num = $this.find('.num'),
                animation = 'am-animation-scale-up';

            if ($.AMUI.support.animation) {
                $icon.addClass(animation)
                    .one($.AMUI.support.animation.end, function() {
                        $icon.removeClass(animation);
                    });
            }
            $icon.css('color', '#faba50');
            $num.text($.trim($num.text()) - 0 + 1).css('color', '#faba50');
            $this.css('borderColor', '#faba50');
        });
    }
}

$(function() {
    IndexPage.init();
    $(window).resize(function(event) {
        IndexPage.init();
    });
})
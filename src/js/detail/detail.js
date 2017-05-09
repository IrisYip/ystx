var DetailPage = {
    init: function() {
        var _this = this;
        _this.render();
        _this.bindEvents();
    },

    render: function() {
        new loginRegisterView($('.login'), 'login').init();
        new loginRegisterView($('.register'), 'register').init();
        new loginRegisterView($('.comment > button'), 'login').init();
        this.autoLayout();
    },

    autoLayout: function() {
        var maxWidth = 1200,
            $author = $('.user-comments .author');
        // 自适应布局
        if ($(window).width() > maxWidth) {
            $author.find('img').css({
                width: '3.5rem',
                height: '3.5rem'
            });
            $author.find('.info > span').css('fontSize', '1.5rem');
            $author.find('.info > div span').css('fontSize', '1.3rem');
            $author.find('.action i').css('fontSize', '120%')
        } else {
            $author.find('img').removeAttr('style');
            $author.find('.info > span').removeAttr('style');
            $author.find('.info > div span').removeAttr('style');
            $author.find('.action i').removeAttr('style');
        }
    },

    bindEvents: function() {
        $(document).on('click', '.user-comments .like-icon', function(event) {
            var $icon = $(this),
                animation = 'am-animation-scale-up';
            if (!$icon.data('clicked')) {
                if ($.AMUI.support.animation) {
                    $icon.addClass(animation)
                        .one($.AMUI.support.animation.end, function() {
                            $icon.removeClass(animation);
                        });
                }
                $icon.addClass('am-icon-thumbs-up')
                    .css({
                        color: 'rgb(243, 123, 29)'
                    })
                    .data('clicked', true)
                    .children('span').text($(this).text() - 0 + 1);
            } else {
                layer.open({
                    content: '赞过了哟',
                    skin: 'msg',
                    time: 2
                });
            }
        }).on('click', '.user-comments .talk-icon', function(event) {
            var $talk = $(this),
                $currentAuthor = $talk.parents('.floor'),
                $commentAuthor = $talk.parents('.action').parent('.author').find('.name'),
                inputHtml = '<textarea class="am-padding-sm" placeholder="写下你的评论"></textarea>';

            if (!$talk.parent('.action').data('iscomment')) {
                if (!$currentAuthor.find('textarea').length) {
                    $currentAuthor.append(inputHtml);
                } else {
                    $currentAuthor.find('textarea').remove();
                }
            } else {
                if (!$currentAuthor.find('textarea').length) {
                    $currentAuthor.append(inputHtml);
                    $currentAuthor.find('textarea').val('@' + $commentAuthor.text());
                } else {
                    $currentAuthor.find('textarea').remove();
                }
            }
        });
    }
}

$(function() {
    DetailPage.init();
    $(window).resize(function(event) {
        DetailPage.autoLayout();
    });
})
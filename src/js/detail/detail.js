var detailPage = {
    init: function() {
        this.render();
        this.bindEvents();
    },

    render: function() {
        new loginRegisterView($('.login'), 'login').init();
        new loginRegisterView($('.register'), 'register').init();
        new loginRegisterView($('.comment > button'), 'login').init();
    },

    bindEvents: function() {

    }
}

$(function() {
    detailPage.init();
})
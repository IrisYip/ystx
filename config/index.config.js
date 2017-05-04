window.config = {};
config.index = {
    init: function(env) {
        if (env == 'local-static') {
            this.commonCssPath = '../../src/css/common/';
            this.cssPath = '../../src/css/index';
            this.jsPath = '../../src/js/index';
            this.commonJsPath = '../../src/js/common/';
            this.imagesPath = '../../src/images/index';
        } else if (env == 'local-server') {

        } else if (env == 'online') {

        }
    }
}
config.index.init('local-static');
(function () {
    var vueIndex = function (view, data, callback) {
        
        return new Vue({
            template: view,
            data: data
        });
    };
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = vueIndex;
    } else {
        this.vueIndex = vueIndex;
    }
}).call(this);
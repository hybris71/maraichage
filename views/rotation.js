(function () {
    var vueRotation = function (view, data, callback) {
        
        return new Vue({
            template: view,
            data: data
        });
    };
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = vueRotation;
    } else {
        this.vueRotation = vueRotation;
    }
}).call(this);
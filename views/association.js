(function () {
    var vueAssociation = function (view, data, callback) {
        
        return new Vue({
            template: view,
            data: data
        });
    };
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = vueAssociation;
    } else {
        this.vueAssociation = vueAssociation;
    }
}).call(this);
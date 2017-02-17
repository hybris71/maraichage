(function () {
    var vueCatalogue = function (view, data, callback) {
        
        return new Vue({
            template: view,
            data: data
        });
    };
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = vueCatalogue;
    } else {
        this.vueCatalogue = vueCatalogue;
    }
}).call(this);
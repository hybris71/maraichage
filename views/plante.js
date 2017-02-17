(function () {
    var vuePlante = function (view, data, callback) {
        
        return new Vue({
            template: view,
            data: data,
            methods: {
                changeEdit: function () {     
                    this.edit = true;
                    this.styleObjectEdit.display = "none";
                    this.styleObjectOk.display = "block";
                },
                save: function () {
                    this.edit = false;
                    this.styleObjectEdit.display = "block";
                    this.styleObjectOk.display = "none";
                    
                    if (callback) {
                        callback(data);
                    }
                }
            }
        });
    };
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = vuePlante;
    } else {
        this.vuePlante = vuePlante;
    }
}).call(this);
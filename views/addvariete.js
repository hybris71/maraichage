(function () {
    var vueAddVariete = function (view, data, callback) {
        
        return new Vue({
            template: view,
            data: data,
            methods: {
                validateBeforeSubmit(e) {
                
                    this.$validator.validateAll().then(() => {
                        // success stuff.
                        this.submitForm();
                    });
                },
                submitForm(){
                    
                    this.formSubmitted = true;
                    console.log("submit form");
                    if (callback) {
                        callback(data);
                    }
                    
                },
                addNewVariete(){
                    
                    NA.socket.emit("get-form-variete");
                    console.log("add new variete");
                    this.formSubmitted = false;
                    
                }
            }
        });
    };
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = vueAddVariete;
    } else {
        this.vueAddVariete = vueAddVariete;
    }
}).call(this);
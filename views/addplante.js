(function () {
    var vueAddPlante = function (view, data, callback) {
        
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
                addNewPlante(){
                    
                    NA.socket.emit("get-form");
                    console.log("add new plante");
                    this.formSubmitted = false;
                    
                }
            }
        });
    };
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = vueAddPlante;
    } else {
        this.vueAddPlante = vueAddPlante;
    }
}).call(this);
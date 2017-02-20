NA.socket.emit("get-form");

NA.socket.on("get-form", function (data) {
        
            console.log("socket on get form!");
            var addPlante = vueAddPlante(data.view, data.data, function (data) {
                console.log("add plante!!!")
                NA.socket.emit("add-plante", data);
            });
            addPlante.$mount(".main");
            NA.socket.on("add-plante", function (data) {
                
                console.log("socket on add plante");
                
                addPlante.formSubmitted = data.data.formSubmitted;
                addPlante.data = data.data;
            });
});
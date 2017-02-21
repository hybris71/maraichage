var urlBasePath = document.getElementsByTagName("base")[0];

NA.socket.emit("get-form-variete", {
            id_plante: $("p[id='id_plante'] > strong").html(),
            urlPath: location.href
});

NA.socket.on("get-form-variete", function (data) {
        
            console.log("socket on get form!");
            var addVariete = vueAddVariete(data.view, data.data, function (data) {
                console.log("add variete")
                NA.socket.emit("add-variete", data);
            });
            addVariete.$mount(".main");
            NA.socket.on("add-variete", function (data) {
                
                console.log("socket on add variete");
                
                addVariete.formSubmitted = data.data.formSubmitted;
                addVariete.data = data.data;
            });
});
NA.socket.emit("get-variete", {
            id_variete: $("p[id='id_variete'] > strong").html(),
            urlPath: location.href
});

NA.socket.on("get-variete", function (data) {
        
            console.log("socket on get form!");
            var variete = vueVariete(data.view, data.data, function (data) {
                console.log("update variete")
                NA.socket.emit("update-variete", data);
            });
            variete.$mount(".main");
            NA.socket.on("update-variete", function (data) {
                
                console.log("socket on add plante");
                
            });
});
NA.socket.emit("get-variete", {
            id_variete: $("p[id='id_variete'] > strong").html(),
            urlPath: location.href
});

NA.socket.on("get-variete", function (data) {
        
            console.log("socket on get form!");
            var variete = vueVariete(data.view, data.data, function (data) {
                
                if (data.action == "displaySemi") {
                    
                    console.log("displaySemi");
                    NA.socket.emit("display-semi", data);
                    
                } else if (data.action == "saveVariete") {
                
                    console.log("saveVariete");
                    NA.socket.emit("update-variete", data);
                    
                } else if (data.action == "saveSemi") {
                    
                    console.log("saveSemi");
                    NA.socket.emit("update-semi", data);
                    
                }
                
            });
            variete.$mount(".main");
            NA.socket.once("update-variete", function (data) {
                
                console.log("socket on update plante");
                
            });

            NA.socket.on("display-semi", function (data) {

                console.log("return display-semi");

                variete.currentSemi = data.data.currentSemi;
                variete.repiquages = data.data.repiquages;
                variete.tunnels = data.data.tunnels;
                variete.listModalites = data.data.listModalites;
                variete.index_modalite = data.data.index_modalite;

            });
});




var urlBasePath = document.getElementsByTagName("base")[0];

Vue.use(VeeValidate);

/*$(document).ready(function() {
    console.log( "ready!" );*/
    NA.socket.emit("get-plante", {
            id: $("li[id='id_plante'] > strong").html(),
            urlPath: location.href
    });
/*});*/

NA.socket.on("get-plante", function (data) {
    
            console.log("socket on get plante");
    
            console.log(data.data);
    
            var plante = vuePlante(data.view, data.data, function (data) {
                console.log("socket emit update plante");
                NA.socket.emit("update-plante", data);
            });
            plante.$mount(".main");
            NA.socket.on("update-plante", function (data) {
                console.log("socket on update");
                plante.data = data.data;         
            });     
});
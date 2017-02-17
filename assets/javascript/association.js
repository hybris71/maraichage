// Get Current Plant
var plante = $("input[name='plante']").val();

var addFamilleFavorable = document.getElementById("addAssoFavorable"),
    delFamilleFavorable = document.getElementById("delAssoFavorable"),
    addFamilleDefavorable = document.getElementById("addAssoDefavorable"),
    delFamilleDefavorable = document.getElementById("delAssoDefavorable");

addAssoFavorable.addEventListener("click", function () {
    
    NA.socket.emit("insert-plante-asso", {
        id: $("select[name='plantes'] > option:selected").val(),
        nom: plante,
        favorable: 0
    });
});

addAssoDefavorable.addEventListener("click", function () {
    
    NA.socket.emit("insert-plante-asso", {
        id: $("select[name='plantes'] > option:selected").val(),
        nom: plante,
        favorable: 1
    });
});


NA.socket.on("insert-plante-asso", function (data) {
     
    if (data.favorable == 0) {
        $("select[name='associationsFavorables']").append($("select[name='plantes'] > option:selected").clone());
    } else {
        $("select[name='associationsDefavorables']").append($("select[name='plantes'] > option:selected").clone());
    }

    $("select[name='plantes'] > option:selected").remove();
    
});


delAssoFavorable.addEventListener("click", function () {
    
    NA.socket.emit("del-plante-asso", {
        id: $("select[name='associationsFavorables'] > option:selected").val(),
        nom: plante,
        favorable: 0
    });
});

delAssoDefavorable.addEventListener("click", function () {
    
    NA.socket.emit("del-plante-asso", {
        id: $("select[name='associationsDefavorables'] > option:selected").val(),
        nom: plante,
        favorable: 1
    });
});


NA.socket.on("del-plante-asso", function (data) {
   
    if (data.favorable == 0) {
        
        $("select[name='plantes']").append($("select[name='associationsFavorables'] > option:selected").clone());
        $("select[name='associationsFavorables'] > option:selected").remove();
    } else {
        $("select[name='plantes']").append($("select[name='associationsDefavorables'] > option:selected").clone());
        $("select[name='associationsDefavorables'] > option:selected").remove();
    }
    
});
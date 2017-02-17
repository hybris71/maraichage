// Get Current Plant
var plante = $("input[name='plante']").val();

/*var select_plante = document.getElementById("list_plantes");

select_plante.addEventListener("change", function () {
        
    var current_plante = $("select[name='plante']").val();
    
    NA.socket.emit("change-plante", {
        nom: current_plante
    });
});

NA.socket.on("insert-famille", function (locals) {
    
});*/

var addFamilleFavorable = document.getElementById("addFamilleFavorable"),
    delFamilleFavorable = document.getElementById("delFamilleFavorable"),
    addFamilleDefavorable = document.getElementById("addFamilleDefavorable"),
    delFamilleDefavorable = document.getElementById("delFamilleDefavorable"),
    addPlanteFavorable = document.getElementById("addPlanteFavorable"),
    delPlanteFavorable = document.getElementById("delPlanteFavorable"),
    addPlanteDefavorable = document.getElementById("addPlanteDefavorable"),
    delPlanteDefavorable = document.getElementById("delPlanteDefavorable");

addFamilleFavorable.addEventListener("click", function () {
    
    NA.socket.emit("insert-famille", {
        id: $("select[name='familles'] > option:selected").val(),
        nom: plante,
        favorable: 0
    });
});

addFamilleDefavorable.addEventListener("click", function () {
    
    NA.socket.emit("insert-famille", {
        id: $("select[name='familles'] > option:selected").val(),
        nom: plante,
        favorable: 1
    });
});


NA.socket.on("insert-famille", function (data) {
     
    if (data.favorable == 0) {
        $("select[name='rotationFamillesFavorables']").append($("select[name='familles'] > option:selected").clone());
    } else {
        $("select[name='rotationFamillesDefavorables']").append($("select[name='familles'] > option:selected").clone());
    }

    $("select[name='familles'] > option:selected").remove();
    
});


delFamilleFavorable.addEventListener("click", function () {
    
    NA.socket.emit("del-famille", {
        id: $("select[name='rotationFamillesFavorables'] > option:selected").val(),
        nom: plante,
        favorable: 0
    });
});

delFamilleDefavorable.addEventListener("click", function () {
    
    NA.socket.emit("del-famille", {
        id: $("select[name='rotationFamillesDefavorables'] > option:selected").val(),
        nom: plante,
        favorable: 1
    });
});


NA.socket.on("del-famille", function (data) {
   
    if (data.favorable == 0) {
        
        $("select[name='familles']").append($("select[name='rotationFamillesFavorables'] > option:selected").clone());
        $("select[name='rotationFamillesFavorables'] > option:selected").remove();
    } else {
        $("select[name='familles']").append($("select[name='rotationFamillesDefavorables'] > option:selected").clone());
        $("select[name='rotationFamillesDefavorables'] > option:selected").remove();
    }
    
});


// Form Plant
addPlanteFavorable.addEventListener("click", function () {
    
    NA.socket.emit("insert-plante", {
        id: $("select[name='listplantes'] > option:selected").val(),
        nom: plante,
        favorable: 0
    });
});

addPlanteDefavorable.addEventListener("click", function () {
    
    NA.socket.emit("insert-plante", {
        id: $("select[name='listplantes'] > option:selected").val(),
        nom: plante,
        favorable: 1
    });
});


NA.socket.on("insert-plante", function (data) {
     
    if (data.favorable == 0) {
        $("select[name='rotationPlantesFavorables']").append($("select[name='listplantes'] > option:selected").clone());
    } else {
        $("select[name='rotationPlantesDefavorables']").append($("select[name='listplantes'] > option:selected").clone());
    }

    $("select[name='listplantes'] > option:selected").remove();
    
});

delPlanteFavorable.addEventListener("click", function () {
    
    NA.socket.emit("del-plante", {
        id: $("select[name='rotationPlantesFavorables'] > option:selected").val(),
        nom: plante,
        favorable: 0
    });
});

delPlanteDefavorable.addEventListener("click", function () {
    
    NA.socket.emit("del-plante", {
        id: $("select[name='rotationPlantesDefavorables'] > option:selected").val(),
        nom: plante,
        favorable: 1
    });
});


NA.socket.on("del-plante", function (data) {
   
    if (data.favorable == 0) {
        
        $("select[name='listplantes']").append($("select[name='rotationPlantesFavorables'] > option:selected").clone());
        $("select[name='rotationPlantesFavorables'] > option:selected").remove();
    } else {
        $("select[name='listplantes']").append($("select[name='rotationPlantesDefavorables'] > option:selected").clone());
        $("select[name='rotationPlantesDefavorables'] > option:selected").remove();
    }
    
});


/*
var delButton = document.getElementById("del");
var submitButton = document.getElementById("newRotation");

var addPlanteFButton = document.getElementById("addPlanteF");
var delPlanteFButton = document.getElementById("delPlanteF");

var form1 = document.getElementById("form1");

addButton.addEventListener("click", function ()  {

    $("select[name='rotationFamillesFavorables']").append($("select[name='familles'] > option:selected").clone());

    $("select[name='familles'] > option:selected").remove();
    
    
});


delButton.addEventListener("click", function ()  {

    $("select[name='familles']").append($("select[name='rotationFamillesFavorables'] > option:selected").clone());

    $("select[name='rotationFamillesFavorables'] > option:selected").remove();
    
});


submitButton.addEventListener("click", function ()  {
    
        $("select[name='rotationFamillesFavorables'] > option").each(function(){
    
        $(this).attr("selected","selected");

        });
    
        form1.submit();
    

});


addPlanteFButton.addEventListener("click", function ()  {

    $("select[name='rotationPlantesFavorables']").append($("select[name='listplantes'] > option:selected").clone());

    $("select[name='listplantes'] > option:selected").remove();
    
    
});


delPlanteFButton.addEventListener("click", function ()  {

    $("select[name='listplantes']").append($("select[name='rotationPlantesFavorables'] > option:selected").clone());

    $("select[name='rotationPlantesFavorables'] > option:selected").remove();
    
});*/
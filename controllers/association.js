exports.setSockets = function () {
    var NA = this,
        io = NA.io,
        Plante = NA.models.Plante;
        

    // Attendre un lien valide entre client et serveur
    io.sockets.on("connection", function (socket) {
        
        socket.on("insert-plante-asso", function (data) {
            
            plante = new Plante();
            
            NA.mySql.getConnection(function (err, connection) {
                if (err) {
                    console.log(err);
                    return false;
                }
                
                plante
                    .setConnection(connection)
                    .nom_plante(data.nom)
                    .readAll(function () {
                        plante
                            .insertAssociation(data.id,data.favorable);
                    });
                        
            });

            io.sockets.emit("insert-plante-asso", data);
        });
        
        
        socket.on("del-plante-asso", function (data) {
           
            plante = new Plante();
            
            NA.mySql.getConnection(function(err, connection) {
                if (err) {
                    console.log(err);
                    return false;
                }
                
                plante
                    .setConnection(connection)
                    .nom_plante(data.nom)
                    .readAll(function () {
                                
                            plante
                                .deleteAssociation(data.id);
                    });
                        
            });

            io.sockets.emit("del-plante-asso", data);
        });
          
    });
};

exports.changeVariations = function (next, locals) {
    
    var NA = this,
        Plante = NA.models.Plante,
        plante = new Plante();
    
    
    function difference(obj1, obj2) {
        
        var new_obj = [],
            i;
        
        for (i = 0; i < obj1.length; i++) {

            var alreayExist = 0;

                for (var j = 0; j < obj2.length; j++) {

                    if(obj1[i].id == obj2[j].id) {

                            alreayExist = alreayExist+1;
                    } 
                }

            if(alreayExist == 0) {

                new_obj.push({ 
                    nom: obj1[i].nom,
                    id: obj1[i].id
                });
            }
        }
        
        return new_obj;
        
    }
    
    if (typeof locals.body.plante === 'undefined') {
        
        locals.body.plante = 'Tomate';
        
    }
    
    NA.mySql.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            return false;
        }
        
            plante
                .setConnection(connection)
                .readNames(function (catalogue) {
                    locals.catalogue = catalogue;
                        
                        //console.log(plante.get_rotation_familles_favorables());

                        plante
                            .nom_plante(locals.body.plante)
                            .readAll(function () {
                                
                                locals.plante = plante;
                                
                                var interPlantes = difference(catalogue,plante.get_plantes_associations_favorables());
                                
                                var finalPlantes = difference(interPlantes,plante.get_plantes_associations_defavorables());
                            
                                var current_plante = [ {
                                    id: plante.id_plante(),
                                    nom: plante.nom_plante()
                                } ];
                                
                                locals.listPlantes = difference(finalPlantes,current_plante);
                            
                                next();
                            
                            });     
                });
        }); 
};

exports.changeDom = function (next, locals) {
    var NA = this,
        renderer = NA.modules.vueServerRenderer.createRenderer(),
        fs = NA.modules.fs,
        path = NA.modules.path,
        view = path.join(NA.serverPath, NA.webconfig.viewsRelativePath, "association.htm"),
        model = path.join(NA.serverPath, NA.webconfig.viewsRelativePath, "association.js"),
        data = {};
    
    fs.readFile(view, "utf-8", function (error, content) {
        
        var ejs = NA.modules.ejs,
            render = ejs.render(content, locals, { delimiter: "?" });
        
        renderer.renderToString(require(model)(render,data), function (error, html) {
            
            locals.dom = locals.dom.replace('<div class="main"></div>', html);
            next();
            
        });
          
    });    
};

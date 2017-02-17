exports.setSockets = function () {
    var NA = this,
        io = NA.io,
        Famille = NA.models.Famille,
        famille = new Famille(),
        Plante = NA.models.Plante;
        

    // Attendre un lien valide entre client et serveur
    io.sockets.on("connection", function (socket) {
        
        socket.on("insert-famille", function (data) {
            
            plante = new Plante();
            
            NA.mySql.getConnection(function (err, connection) {
                if (err) {
                    console.log(err);
                    return false;
                }
                console.log(data.nom);
                plante
                    .setConnection(connection)
                    .nom_plante(data.nom)
                    .readAll(function () {
                                
                            plante
                                .insertRotationFamille(data.id,data.favorable);
                    });
                        
            });

            io.sockets.emit("insert-famille", data);
        });
        
        
        socket.on("del-famille", function (data) {
           
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
                                .deleteRotationFamille(data.id);
                    });
                        
            });

            io.sockets.emit("del-famille", data);
        });
        
        socket.on("insert-plante", function (data) {
            
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
                                .insertRotationPlante(data.id,data.favorable);
                    });
                        
            });

            io.sockets.emit("insert-plante", data);
        });
        
        socket.on("del-plante", function (data) {
           
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
                                .deleteRotationPlante(data.id);
                    });
                        
            });

            io.sockets.emit("del-plante", data);
        });
          
    });
};

exports.changeVariations = function (next, locals) {
    
    var NA = this,
        Famille = NA.models.Famille,
        famille = new Famille(),
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
        
        famille
            .setConnection(connection)
            .read(function (familles) {
            
            plante
                .setConnection(connection)
                .readNames(function (catalogue) {
                    locals.catalogue = catalogue;
                        
                        //console.log(plante.get_rotation_familles_favorables());

                        plante
                            .nom_plante(locals.body.plante)
                            .readAll(function () {
                                
                                locals.plante = plante;
                                //console.log(plante.get_rotation_familles_favorables());
                                                            
                                var interFamilles = difference(familles,plante.get_rotation_familles_favorables());
                                locals.listFamilles = difference(interFamilles, plante.get_rotation_familles_defavorables());
                            
                                var interPlantes = difference(catalogue,plante.get_rotation_plantes_favorables());
                            
                                locals.listPlantes = difference(interPlantes,plante.get_rotation_plantes_defavorables());
                                
                                next();
                            
                            });
                 
                    
                           
                });
        });
        
    });
};

exports.changeDom = function (next, locals) {
    var NA = this,
        renderer = NA.modules.vueServerRenderer.createRenderer(),
        fs = NA.modules.fs,
        path = NA.modules.path,
        view = path.join(NA.serverPath, NA.webconfig.viewsRelativePath, "rotation.htm"),
        model = path.join(NA.serverPath, NA.webconfig.viewsRelativePath, "rotation.js"),
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

   
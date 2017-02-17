exports.setSockets = function () {
    var NA = this,
        io = NA.io,
        Plante = NA.models.Plante,
        Famille = NA.models.Famille,
        famille = new Famille(),
        Groupe = NA.models.Groupe,
        groupe = new Groupe(),
        locals = {};

    // Attendre un lien valide entre client et serveur
    io.sockets.on("connection", function (socket) {
        
        var render;
        
        socket.on("get-plante", function (data) {
            
            var plante = new Plante();
            
            NA.mySql.getConnection(function (err, connection) {
                if (err) {
                    console.log(err);
                    return false;
                }
                
                famille
                    .setConnection(connection)
                    .read(function (familles) {
            
                        groupe
                            .setConnection(connection)
                            .read(function (groupes) {

                                console.log("on va lancer id_plante dans socket get plante" + data.id);
                            
                                plante
                                    .setConnection(connection)
                                    .id_plante(data.id)
                                    .readAll(function () {
                                    
                                        // On récupère les variations spécifiques
                                        locals = NA.specific("plante.json", undefined);
                                        // On récupère les variations
                                        // variations = NA.common(data.lang, variations);
                                        locals.plante = plante;
                                        //console.log(locals);
                                        // On récupère le fragment HTML depuis le dossier `viewsRelativePath` et on applique les variations.
                                        locals.urlPath = data.urlPath;

                                        render = NA.view("plante.htm", locals);
                                        //console.log(render);
                                    
                                        console.log(plante.id_famille());
                                        console.log(familles);
                                        console.log(familles.findIndex(function (item) { return plante.id_famille() === item.id; }));
                                    
                                        io.sockets.emit("get-plante", {
                                            view: render,                            
                                            data: {
                                                edit: false,
                                                styleObjectEdit: {
                                                    display: 'block'
                                                },
                                                styleObjectOk: {
                                                    display: 'none'
                                                },
                                                id: plante.id_plante(),
                                                nom_plante: plante.nom_plante(),
                                                origine_geographique:plante.origine_geographique(),
                                                anciennete_culture:plante.anciennete_culture(),
                                                cycle:plante.cycle(),
                                                description:plante.description(),
                                                nom_groupe:plante.nom_groupe(),
                                                id_groupe:plante.id_groupe(),
                                                nom_famille:plante.nom_famille(),
                                                id_famille:plante.id_famille(),
                                                listGroupes: groupes,
                                                index_groupe: groupes.findIndex(function (item) { return plante.id_groupe() === item.id; }),
                                                listFamilles: familles,
                                                index_famille: familles.findIndex(function (item) { return plante.id_famille() === item.id; })
                                            }
                                        });

                                    });
                            });
                    });
            });
        });
        
        socket.on("update-plante", function (data) {
        
            var plante = new Plante();
            
                NA.mySql.getConnection(function (err, connection) {
                    if (err) {
                        console.log(err);
                        return false;
                    }

                    console.log("Plante id à update:" + data.id);
                    
                    famille
                    .setConnection(connection)
                    .read(function (familles) {
            
                        groupe
                            .setConnection(connection)
                            .read(function (groupes) {

                                console.log("on va lancer id_plante dans socket update plante" + data.id);
                                plante
                                    .setConnection(connection)
                                    .id_plante(data.id)
                                    .nom_plante(data.nom_plante)
                                    .origine_geographique(data.origine_geographique)
                                    .anciennete_culture(data.anciennete_culture)
                                    .cycle(data.cycle)
                                    .description(data.description)
                                    .id_groupe(data.listGroupes[data.index_groupe].id)
                                    .id_famille(data.listFamilles[data.index_famille].id)
                                    .udpate_plante(function (infos){
                                    
                                        console.log(".update_plante");
                                    
                                        console.log(plante.id_plante());
                                            
                                        // On récupère les variations spécifiques
                                        locals = NA.specific("plante.json", undefined);
                                        // On récupère les variations
                                        // variations = NA.common(data.lang, variations);
                                        locals.plante = plante;
                                        // On récupère le fragment HTML depuis le dossier `viewsRelativePath` et on applique les variations.
                                        locals.urlPath = data.urlPath;
                                        render = NA.view("plante.htm", locals);
                                        //console.log(render);
                                        //console.log("plante groupe:" + plante.nom_groupe());
                                        //console.log("plante famille:" + plante.nom_famille());
                                        io.sockets.emit("update-plante", {
                                            view: render,                            
                                            data: {
                                                edit: false,
                                                styleObjectEdit: {
                                                    display: 'block'
                                                },
                                                styleObjectOk: {
                                                    display: 'none'
                                                },
                                                id: plante.id_plante(),
                                                nom_plante: plante.nom_plante(),
                                                origine_geographique:plante.origine_geographique(),
                                                anciennete_culture:plante.anciennete_culture(),
                                                cycle:plante.cycle(),
                                                description:plante.description(),
                                                nom_groupe:plante.nom_groupe(),
                                                id_groupe:plante.id_groupe(),
                                                nom_famille:plante.nom_famille(),
                                                id_famille:plante.id_famille(),
                                                listGroupes: groupes,
                                                index_groupe: groupes.findIndex(function (item) { return plante.id_groupe() === item.id; }),
                                                listFamilles: familles,
                                                index_famille: familles.findIndex(function (item) { return plante.id_famille() === item.id; })
                                            }
                                        });
                                    });
                            }); 
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
        view = path.join(NA.serverPath, NA.webconfig.viewsRelativePath, "plante.htm"),
        model = path.join(NA.serverPath, NA.webconfig.viewsRelativePath, "plante.js"),
        data = {
            edit: false,
            styleObjectEdit: {
                display: 'block'
            },
            styleObjectOk: {
                display: 'none'
            },
            id: locals.plante.id_plante(),
            nom_plante: locals.plante.nom_plante(),
            origine_geographique: locals.plante.origine_geographique(),
            anciennete_culture: locals.plante.anciennete_culture(),
            cycle: locals.plante.cycle(),
            description: locals.plante.description(),
            nom_groupe: locals.plante.nom_groupe(),
            id_groupe: locals.plante.id_groupe(),
            nom_famille: locals.plante.nom_famille(),
            id_famille: locals.plante.id_famille(),
            listGroupes: locals.groupes,
            index_groupe: locals.groupes.findIndex(function (item) { return locals.plante.id_groupe() === item.id; }),
            listFamilles: locals.familles,
            index_famille: locals.familles.findIndex(function (item) { return locals.plante.id_famille() === item.id; })
        };
    
    fs.readFile(view, "utf-8", function (error, content) {
        
        var ejs = NA.modules.ejs,
            render = ejs.render(content, locals, { delimiter: "?" });
        
        renderer.renderToString(require(model)(render,data), function (error, html) {
            
            locals.dom = locals.dom.replace('<div class="main"></div>', html);
            next();
            
        });
          
    });    
};

exports.changeVariations = function (next, locals) {

    var NA = this,
    Plante = NA.models.Plante,
    plante = new Plante(),
    Famille = NA.models.Famille,
    famille = new Famille(),
    Groupe = NA.models.Groupe,
    groupe = new Groupe();
    
    NA.mySql.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            return false;
        }
        
        famille
            .setConnection(connection)
            .read(function (familles) {
            
                locals.familles = familles;
            
                groupe
                    .setConnection(connection)
                    .read(function (groupes) {
                    
                        locals.groupes = groupes;
                        
                        plante
                            .setConnection(connection)
                            .nom_plante(locals.params.plante)
                            .readAll(function () {

                                locals.plante = plante;
                                next();

                            });
                    });
            });
    });
};
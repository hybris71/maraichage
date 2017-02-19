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
                                                index_famille: familles.findIndex(function (item) { return plante.id_famille() === item.id; }),
                                                temp_gel: plante.temp_gel(),
                                                fumier_frais: plante.fumier_frais(),
                                                climat_favorable: plante.climat_favorable(),
                                                climat_defavorable: plante.climat_defavorable(),
                                                commentaire_climat: plante.commentaire_climat(),
                                                sol_favorable: plante.sol_favorable(),
                                                sol_defavorable: plante.sol_defavorable(),
                                                commentaire_sol: plante.commentaire_sol(),
                                                fertilisation_favorable: plante.fertilisation_favorable(),
                                                fertilisation_defavorable: plante.fertilisation_defavorable(),
                                                commentaire_fertilisation: plante.commentaire_fertilisation(),
                                                rotation_familles_favorables: plante.get_rotation_familles_favorables(),
                                                rotation_familles_defavorables: plante.get_rotation_familles_defavorables(),
                                                rotation_plantes_favorables: plante.get_rotation_plantes_favorables(),
                                                rotation_plantes_defavorables: plante.get_rotation_plantes_defavorables(),
                                                plantes_associations_favorables: plante.get_plantes_associations_favorables(),
                                                plantes_associations_defavorables: plante.get_plantes_associations_defavorables(),
                                                rotation_duree_mini: plante.rotation_duree_mini(),
                                                commentaire_duree: plante.commentaire_duree(),
                                                rendement: plante.rendement(),
                                                azote: plante.azote(),
                                                phosphore: plante.phosphore(),
                                                potassium: plante.potassium(),
                                                calcium: plante.calcium(),
                                                magnesium: plante.magnesium(),
                                                varietes: plante.get_list_variete()
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
                                    
                                        
                                        plante
                                        .climat_favorable(data.climat_favorable)
                                        .climat_defavorable(data.climat_defavorable)
                                        .commentaire_climat(data.commentaire_climat)
                                        .temp_gel(data.temp_gel)
                                        .sol_favorable(data.sol_favorable)
                                        .sol_defavorable(data.sol_defavorable)
                                        .commentaire_sol(data.commentaire_sol)
                                        .fertilisation_favorable(data.fertilisation_favorable)
                                        .fertilisation_defavorable(data.fertilisation_defavorable)
                                        .commentaire_fertilisation(data.commentaire_fertilisation)
                                        .fumier_frais(data.fumier_frais)
                                        .udpate_pedoclimat(function (infos) {
                                            
                                            plante
                                                .rotation_duree_mini(data.rotation_duree_mini)
                                                .commentaire_duree(data.commentaire_duree)
                                                .update_rotation_duree(function (infos) {
                                                
                                                    plante
                                                        .rendement(data.rendement)
                                                        .azote(data.azote)
                                                        .phosphore(data.phosphore)
                                                        .potassium(data.potassium)
                                                        .calcium(data.calcium)
                                                        .magnesium(data.magnesium)
                                                        .update_exportations(function (infos) {
                                                        
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
                                                                    index_famille: familles.findIndex(function (item) { return plante.id_famille() === item.id; }),
                                                                    temp_gel: plante.temp_gel(),
                                                                    fumier_frais: plante.fumier_frais(),
                                                                    climat_favorable: plante.climat_favorable(),
                                                                    climat_defavorable: plante.climat_defavorable(),
                                                                    commentaire_climat: plante.commentaire_climat(),
                                                                    sol_favorable: plante.sol_favorable(),
                                                                    sol_defavorable: plante.sol_defavorable(),
                                                                    commentaire_sol: plante.commentaire_sol(),
                                                                    fertilisation_favorable: plante.fertilisation_favorable(),
                                                                    fertilisation_defavorable: plante.fertilisation_defavorable(),
                                                                    commentaire_fertilisation: plante.commentaire_fertilisation(),
                                                                    rotation_familles_favorables: plante.get_rotation_familles_favorables(),
                                                                    rotation_familles_defavorables: plante.get_rotation_familles_defavorables(),
                                                                    rotation_plantes_favorables: plante.get_rotation_plantes_favorables(),
                                                                    rotation_plantes_defavorables: plante.get_rotation_plantes_defavorables(),
                                                                    plantes_associations_favorables: plante.get_plantes_associations_favorables(),
                                                                    plantes_associations_defavorables: plante.get_plantes_associations_defavorables(),
                                                                    rotation_duree_mini: plante.rotation_duree_mini(),
                                                                    commentaire_duree: plante.commentaire_duree(),
                                                                    rendement: plante.rendement(),
                                                                    azote: plante.azote(),
                                                                    phosphore: plante.phosphore(),
                                                                    potassium: plante.potassium(),
                                                                    calcium: plante.calcium(),
                                                                    magnesium: plante.magnesium(),
                                                                    varietes: plante.get_list_variete()

                                                                }
                                                            });
                                                    }); 
                                            });    
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
            index_famille: locals.familles.findIndex(function (item) { return locals.plante.id_famille() === item.id; }),
            temp_gel: locals.plante.temp_gel(),
            fumier_frais: locals.plante.fumier_frais(),
            climat_favorable: locals.plante.climat_favorable(),
            climat_defavorable: locals.plante.climat_defavorable(),
            commentaire_climat: locals.plante.commentaire_climat(),
            sol_favorable: locals.plante.sol_favorable(),
            sol_defavorable: locals.plante.sol_defavorable(),
            commentaire_sol: locals.plante.commentaire_sol(),
            fertilisation_favorable: locals.plante.fertilisation_favorable(),
            fertilisation_defavorable: locals.plante.fertilisation_defavorable(),
            commentaire_fertilisation: locals.plante.commentaire_fertilisation(),
            rotation_familles_favorables: locals.plante.get_rotation_familles_favorables(),
            rotation_familles_defavorables: locals.plante.get_rotation_familles_defavorables(),
            rotation_plantes_favorables: locals.plante.get_rotation_plantes_favorables(),
            rotation_plantes_defavorables: locals.plante.get_rotation_plantes_defavorables(),
            plantes_associations_favorables: locals.plante.get_plantes_associations_favorables(),
            plantes_associations_defavorables: locals.plante.get_plantes_associations_defavorables(),
            rotation_duree_mini: locals.plante.rotation_duree_mini(),
            commentaire_duree: locals.plante.commentaire_duree(),
            rendement: locals.plante.rendement(),
            azote: locals.plante.azote(),
            phosphore: locals.plante.phosphore(),
            potassium: locals.plante.potassium(),
            calcium: locals.plante.calcium(),
            magnesium: locals.plante.magnesium(),
            varietes: locals.plante.get_list_variete()
            
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
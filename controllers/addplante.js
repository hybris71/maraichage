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
        
        socket.on("get-form", function () {
            
            console.log("get form controller");
            
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
                            
                                // On récupère les variations spécifiques
                                locals = NA.specific("addplante.json", undefined);
                                // On récupère les variations
                                // variations = NA.common(data.lang, variations);
                                //locals.plante = plante;
                                //console.log(locals);
                                // On récupère le fragment HTML depuis le dossier `viewsRelativePath` et on applique les variations.
                                //locals.urlPath = data.urlPath;

                                render = NA.view("addplante.htm", locals);
                                //console.log(render);

                                io.sockets.emit("get-form", {
                                        view: render,                            
                                        data: {
                                            name: '',
                                            listGroupes: groupes,
                                            index_groupe: 0,
                                            listFamilles: familles,
                                            index_famille: 0,
                                            description: '',
                                            origine_geographique: '',
                                            anciennete_culture: '',
                                            cycle: '',
                                            engrais_vert: '',
                                            compagne: '',
                                            climat_favorable: '',
                                            climat_defavorable: '',
                                            commentaire_climat: '',
                                            temp_gel: '0',
                                            sol_favorable: '',
                                            sol_defavorable: '',
                                            commentaire_sol: '',
                                            fertilisation_favorable: '',
                                            fertilisation_defavorable: '',
                                            commentaire_fertilisation: '',
                                            fumier_frais: '',
                                            duree_rotation: '1',
                                            commentaire_duree: '',
                                            rendement: '1',
                                            azote: '100',
                                            phosphore: '100',
                                            potassium: '100',
                                            calcium: '100',
                                            magnesium: '100',
                                            formSubmitted: false
                                        }
                                });
                            
                        });
                    });
            });
                
        });
        
        socket.on("add-plante", function (data) {
                       
            var plante = new Plante();
            
            NA.mySql.getConnection(function(err, connection) {
                if (err) {
                    throw err;
                }

                plante
                    .setConnection(connection)
                    .nom_plante(data.name)
                    .ref_famille(data.listFamilles[data.index_famille].id)
                    .ref_groupe(data.listGroupes[data.index_groupe].id)
                    .description(data.description)
                    .origine_geographique(data.origine_geographique)
                    .anciennete_culture(data.anciennete_culture)
                    .cycle(data.cycle)
                    .engrais_vert(data.engrais_vert)
                    .compagne(data.compagne)
                    .create(function (infos) {

                        locals.insertId = infos.insertId;
                        locals.plante = plante;

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
                            .createPedoclimat(function (infos) {

                                plante
                                    .rendement(data.rendement)
                                    .azote(data.azote)
                                    .phosphore(data.phosphore)
                                    .potassium(data.potassium)
                                    .calcium(data.calcium)
                                    .magnesium(data.magnesium)
                                    .createExportation(function (infos) {

                                        plante
                                            .rotation_duree_mini(data.duree_rotation)
                                            .commentaire_duree(data.commentaire_duree)
                                            .createDureeRotation(function (infos) {

                                                // On récupère les variations spécifiques
                                                locals = NA.specific("addplante.json", undefined);
                                                // On récupère les variations
                                                // variations = NA.common(data.lang, variations);
                                                //locals.plante = plante;
                                                //console.log(locals);
                                                // On récupère le fragment HTML depuis le dossier `viewsRelativePath` et on applique les variations.
                                                //locals.urlPath = data.urlPath;

                                                render = NA.view("addplante.htm", locals);
                                                //console.log(render);

                                                io.sockets.emit("add-plante", {
                                                        view: render,                            
                                                        data: {
                                                            name: '',
                                                            listGroupes: '',
                                                            index_groupe: 0,
                                                            listFamilles: '',
                                                            index_famille: 0,
                                                            description: '',
                                                            origine_geographique: '',
                                                            anciennete_culture: '',
                                                            cycle: '',
                                                            engrais_vert: '',
                                                            compagne: '',
                                                            climat_favorable: '',
                                                            climat_defavorable: '',
                                                            commentaire_climat: '',
                                                            temp_gel: '0',
                                                            sol_favorable: '',
                                                            sol_defavorable: '',
                                                            commentaire_sol: '',
                                                            fertilisation_favorable: '',
                                                            fertilisation_defavorable: '',
                                                            commentaire_fertilisation: '',
                                                            fumier_frais: '',
                                                            duree_rotation: '1',
                                                            commentaire_duree: '',
                                                            rendement: '1',
                                                            azote: '100',
                                                            phosphore: '100',
                                                            potassium: '100',
                                                            calcium: '100',
                                                            magnesium: '100',
                                                            formSubmitted: true
                                                        }
                                                }); 
                                            
                                        });


                                    });

                            });
                    });
            });
               
        });
        
    });
}

exports.changeDom = function (next, locals) {
    var NA = this,
        renderer = NA.modules.vueServerRenderer.createRenderer(),
        fs = NA.modules.fs,
        path = NA.modules.path,
        view = path.join(NA.serverPath, NA.webconfig.viewsRelativePath, "addplante.htm"),
        model = path.join(NA.serverPath, NA.webconfig.viewsRelativePath, "addplante.js"),
        data = {
            name: '',
            listGroupes: locals.groupes,
            index_groupe: 0,
            listFamilles: locals.familles,
            index_famille: 0,
            description: '',
            origine_geographique: '',
            anciennete_culture: '',
            cycle: '',
            engrais_vert: '',
            compagne: '',
            climat_favorable: '',
            climat_defavorable: '',
            commentaire_climat: '',
            temp_gel: '0',
            sol_favorable: '',
            sol_defavorable: '',
            commentaire_sol: '',
            fertilisation_favorable: '',
            fertilisation_defavorable: '',
            commentaire_fertilisation: '',
            fumier_frais: '',
            duree_rotation: '1',
            commentaire_duree: '',
            rendement: '1',
            azote: '100',
            phosphore: '100',
            potassium: '100',
            calcium: '100',
            magnesium: '100',
            formSubmitted: false
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
        plante = Plante();
    
        Famille = NA.models.Famille,
        famille = Famille();
    
        Groupe = NA.models.Groupe,
        groupe = Groupe();
    
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
                    
                        next();
                
                    });
            });
    });
};
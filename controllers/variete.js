exports.setSockets = function () {
    var NA = this,
        io = NA.io,
        Variete = NA.models.Variete,
        Semi = NA.models.Semi,
        Tunnel = NA.models.Tunnel,
        locals = {};

    // Attendre un lien valide entre client et serveur
    io.sockets.on("connection", function (socket) {
        
        var render;
        
        socket.on("get-variete", function (data) {
            
            var variete = new Variete();
            
            NA.mySql.getConnection(function(err, connection) {
            if (err) {
                console.log(err);
                return false;
            }
 
            variete
                .setConnection(connection)
                .id_variete(data.id_variete)
                .readAll(function () {
                
                    var semi = new Semi();
                
                    semi
                        .setConnection(connection)
                        .readAllTypeSemis(function (type_semis){   
                    
                            // On récupère les variations spécifiques
                            locals = NA.specific("variete.json", undefined);
                            // On récupère les variations
                            // variations = NA.common(data.lang, variations);
                            locals.variete = variete;
                            //console.log(locals);
                            // On récupère le fragment HTML depuis le dossier `viewsRelativePath` et on applique les variations.
                            locals.urlPath = data.urlPath;

                            render = NA.view("variete.htm", locals);
                            //console.log(render);
                            io.sockets.emit("get-variete", {
                                view: render,                            
                                data: {
                                    edit: false,
                                    editCurrentSemi: false,
                                    addFieldRepiquage: false,
                                    addFieldTunnel: false,
                                    styleObjectEdit: {
                                        display: 'block'
                                    },
                                    styleObjectOk: {
                                        display: 'none'
                                    },
                                    styleEditSemi: {
                                        display: 'block'
                                    },
                                    styleSaveSemi: {
                                        display: 'none'
                                    },
                                    displayCurrentSemi: false,
                                    action: "",
                                    indexSemi: 0,
                                    id_variete: variete.id_variete(),
                                    nom_variete: variete.nom_variete(),
                                    description: variete.description(),
                                    graine_duree_vie: variete.graine_duree_vie(),
                                    graine_pmg: variete.graine_pmg(),
                                    listModalites: type_semis,
                                    index_modalite: '0',
                                    semis: variete.get_list_semi(),
                                    currentSemi: {},
                                    repiquages: [],
                                    tunnels: [],
                                    newSemiTitre: '',
                                    newSemiModalite: '',
                                    nSemiDebut: '1',
                                    nSemiFin: '1',
                                    nProfondeur: '1',
                                    nTemperatureGermi: '1',
                                    nTauxGermi: '90',
                                    nTempsLevee: '1',
                                    nDistanceEntreRangs: '1',
                                    nDistanceSurRang: '1',
                                    nRepiquageId: '',
                                    nRepiquageDebut: '1',
                                    nRepiquageFin: '1',
                                    nRepiquageCom: '',
                                    nTunnelId: '',
                                    nTunnelType: '',
                                    nTunnelDebut: '1',
                                    nTunnelFin: '1',
                                    nTunnelCom: ''
                                }
                            });
                    });
                });
		
            });
        });
        
        socket.on("update-variete", function (data) {
        
            var variete = new Variete();
            
            console.log("update variete");
            
            NA.mySql.getConnection(function(err, connection) {
                
                if (err) {
                    console.log(err);
                    return false;
                }
 
                variete
                    .setConnection(connection)
                    .id_variete(data.id_variete)
                    .nom_variete(data.nom_variete)
                    .description(data.description)
                    .updateVariete(function () {
                    
                            
                            variete
                                .graine_duree_vie(data.graine_duree_vie)
                                .graine_pmg(data.graine_pmg)
                                .updateGraine(function () {
                                    
                                    console.log("update graine");
                                });
                            

                    });
            
            });
        
        });
    
        socket.on("update-semi", function (data) {
        
            var semi = new Semi();
            
            console.log("update semi");
            console.log(data);
            
            NA.mySql.getConnection(function(err, connection) {
                
                if (err) {
                    console.log(err);
                    return false;
                }
 
                    semi
                        .setConnection(connection)
                        .id_semi(data.currentSemi.id_semi)                     
                        .nom_semi(data.currentSemi.nom_semi)
                        .type_semi(data.listModalites[data.index_modalite].id)
                        .debut_semi(data.currentSemi.debut_semi)
                        .fin_semi(data.currentSemi.fin_semi)
                        .profondeur(data.currentSemi.profondeur)
                        .temperature_germi(data.currentSemi.temperature_germi)
                        .taux_germi(data.currentSemi.taux_germi)
                        .temps_levee_jour(data.currentSemi.temps_levee_jour)
                        .distance_entre_rang(data.currentSemi.distance_entre_rang)
                        .distance_sur_rang(data.currentSemi.distance_sur_rang)
                        .updateSemi(function () {
                    
                            
                            
                        });
            
            });
        
        });
        
        socket.on("add-repiquage", function (data) {
        
            var semi = new Semi();
            
            console.log("add repiquage");
            console.log(data);
            
            NA.mySql.getConnection(function(err, connection) {
                
                if (err) {
                    console.log(err);
                    return false;
                }
 
                    semi
                        .setConnection(connection)
                        .id_semi(data.id_semi)                     
                        .debut_repi(data.debut_repi)
                        .fin_repi(data.fin_repi)
                        .repi_commentaire(data.repi_commentaire)
                        .createRepiquage(function (infos) {
                        
                                io.sockets.emit("add-repiquage", {
                                    id_repiquage: infos.insertId
                                });
                                            
                        });
            
            });
        
        });
    
        socket.on("remove-repiquage", function (data) {
        
            var semi = new Semi();
            
            console.log("remove repiquage");
            console.log(data);
            
            NA.mySql.getConnection(function(err, connection) {
                
                if (err) {
                    console.log(err);
                    return false;
                }
                
                if(data.id_repiquage) {
                    
                    semi
                        .setConnection(connection)
                        .id_repiquage(data.id_repiquage)
                        .deleteRepiquage(function () {
                                            
                        });
                } else {
                    
                    console.log("probleme id repiquage :" + data.id_repiquage);
                }
                    
            
            });
        
        });
        
        socket.on("add-tunnel", function (data) {
        
            var tunnel = new Tunnel();
            
            console.log("add tunnel");
            console.log(data);
            
            NA.mySql.getConnection(function(err, connection) {
                
                if (err) {
                    console.log(err);
                    return false;
                }
                
                    tunnel
                        .setConnection(connection)
                        .ref_semi(data.id_semi)
                        .type_tunnel(data.type_tunnel)
                        .debut_tunnel(data.debut_tunnel)
                        .fin_tunnel(data.fin_tunnel)
                        .commentaire_tunnel(data.commentaire_tunnel)
                        .create(function (infos) {
                        
                                console.log("insert id du tunnel :" + infos.insertId);
                                io.sockets.emit("add-tunnel", {
                                    id_tunnel: infos.insertId
                                });
                                            
                        });
            
            });
        
        });
    
        socket.on("remove-tunnel", function (data) {
        
            var tunnel = new Tunnel();
            
            console.log("remove tunnel");
            console.log(data);
            
            NA.mySql.getConnection(function(err, connection) {
                
                if (err) {
                    console.log(err);
                    return false;
                }
                
                if (data.id_tunnel) {
                    
                    console.log("on rentre dans le delete");
                    
                    tunnel
                        .setConnection(connection)
                        .id_tunnel(data.id_tunnel)
                        .deleteTunnel(function () {
                                                                    
                        });
                } else {
                    
                    console.log("probleme id tunnel");
                    
                }
                    
            
            });
        
        });
        
        socket.on("display-semi", function (data) {
        
            console.log(data);
            
            var variete = new Variete(),
                semi = new Semi(),
                tunnel = new Tunnel();
            
            NA.mySql.getConnection(function(err, connection) {
                if (err) {
                    console.log(err);
                    return false;
                }
                
                console.log(data.semis[data.indexSemi].id);
                
                variete
                    .setConnection(connection)
                    .id_variete(data.id_variete)
                    .readAll(function () {
                    
                        locals.variete = variete;
                    
                        semi
                        .setConnection(connection)
                        .readAllTypeSemis(function (type_semis){
                            
                            semi
                                .id_semi(data.semis[data.indexSemi].id)
                                .readAll(function () {

                                    locals.semi = semi;

                                    semi
                                        .readRepiquages(function (repiquages) {

                                            tunnel
                                                .setConnection(connection)
                                                .ref_semi(semi.id_semi())
                                                .readAll(function (tunnels) {
                                                
                                                    // On récupère les variations spécifiques
                                                    locals = NA.specific("variete.json", undefined);
                                                    // On récupère les variations
                                                    // variations = NA.common(data.lang, variations);

                                                    //console.log(locals);
                                                    // On récupère le fragment HTML depuis le dossier `viewsRelativePath` et on applique les variations.
                                                    locals.urlPath = data.urlPath;

                                                    render = NA.view("variete.htm", locals);
                                                    //console.log(render);
                                                    io.sockets.emit("display-semi", {
                                                        view: render,                            
                                                        data: {
                                                            edit: false,
                                                            editCurrentSemi: false,
                                                            addFieldRepiquage: false,
                                                            addFieldTunnel: false,
                                                            styleObjectEdit: {
                                                                display: 'block'
                                                            },
                                                            styleObjectOk: {
                                                                display: 'none'
                                                            },
                                                            styleEditSemi: {
                                                                display: 'block'
                                                            },
                                                            styleSaveSemi: {
                                                                display: 'none'
                                                            },
                                                            displayCurrentSemi: true,
                                                            action: "",
                                                            indexSemi: 0,
                                                            id_variete: variete.id_variete(),
                                                            nom_variete: variete.nom_variete(),
                                                            description: variete.description(),
                                                            graine_duree_vie: variete.graine_duree_vie(),
                                                            graine_pmg: variete.graine_pmg(),
                                                            listModalites: type_semis,
                                                            index_modalite: type_semis.findIndex(function (item) { return semi.type_semi() === item.id; }),
                                                            semis: variete.get_list_semi(),
                                                            currentSemi: {
                                                                id_semi: semi.id_semi(),
                                                                nom_semi: semi.nom_semi(),
                                                                distance_entre_rang: semi.distance_entre_rang(),
                                                                distance_sur_rang: semi.distance_sur_rang(),
                                                                profondeur: semi.profondeur(),
                                                                temps_levee_jour: semi.temps_levee_jour(),
                                                                temperature_germi: semi.temperature_germi(),
                                                                taux_germi: semi.taux_germi(),
                                                                rendement: semi.rendement(),
                                                                debut_semi: semi.debut_semi(),
                                                                fin_semi: semi.fin_semi(),
                                                                type_semi: semi.type_semi_description(),
                                                                ref_variete: semi.ref_variete()                                                    
                                                            },
                                                            repiquages: repiquages,
                                                            tunnels: tunnels,
                                                            newSemiTitre: '',
                                                            newSemiModalite: '',
                                                            nSemiDebut: '1',
                                                            nSemiFin: '1',
                                                            nProfondeur: '1',
                                                            nTemperatureGermi: '1',
                                                            nTauxGermi: '90',
                                                            nTempsLevee: '1',
                                                            nDistanceEntreRangs: '1',
                                                            nDistanceSurRang: '1',
                                                            nRepiquageId: '',
                                                            nRepiquageDebut: '1',
                                                            nRepiquageFin: '1',
                                                            nRepiquageCom: '',
                                                            nTunnelId: '',
                                                            nTunnelType: '',
                                                            nTunnelDebut: '1',
                                                            nTunnelFin: '1',
                                                            nTunnelCom: ''
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
};

exports.changeDom = function (next, locals) {
    var NA = this,
        renderer = NA.modules.vueServerRenderer.createRenderer(),
        fs = NA.modules.fs,
        path = NA.modules.path,
        view = path.join(NA.serverPath, NA.webconfig.viewsRelativePath, "variete.htm"),
        model = path.join(NA.serverPath, NA.webconfig.viewsRelativePath, "variete.js"),
        data = {
            edit: false,
            editCurrentSemi: false,
            addFieldRepiquage: false,
            addFieldTunnel: false,
            styleObjectEdit: {
                display: 'block'
            },
            styleObjectOk: {
                display: 'none'
            },
            styleEditSemi: {
                display: 'block'
            },
            styleSaveSemi: {
                display: 'none'
            },
            displayCurrentSemi: false,
            action: "",
            indexSemi: 0,
            id_variete: locals.variete.id_variete(),
            nom_variete: locals.variete.nom_variete(),
            description: locals.variete.description(),
            graine_duree_vie: locals.variete.graine_duree_vie(),
            graine_pmg: locals.variete.graine_pmg(),
            listModalites: '',
            index_modalite: '',
            semis: locals.variete.get_list_semi(),
            currentSemi: {},
            repiquages: [],
            tunnels: [],
            newSemiTitre: '',
            newSemiModalite: '',
            nSemiDebut: '1',
            nSemiFin: '1',
            nProfondeur: '1',
            nTemperatureGermi: '1',
            nTauxGermi: '90',
            nTempsLevee: '1',
            nDistanceEntreRangs: '1',
            nDistanceSurRang: '1',
            nRepiquageId: '',
            nRepiquageDebut: '1',
            nRepiquageFin: '1',
            nRepiquageCom: '',
            nTunnelId: '',
            nTunnelType: '',
            nTunnelDebut: '1',
            nTunnelFin: '1',
            nTunnelCom: ''
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
	Variete = NA.models.Variete,
	variete = Variete();
	
    NA.mySql.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            return false;
        }
 
        variete
            .setConnection(connection)
            .nom_variete(locals.params.variete)
            .readAll(function () {
	    
	               locals.variete = variete;
	
                    next();
        
	       });
		
    });
};

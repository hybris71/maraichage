exports.setSockets = function () {
    var NA = this,
        io = NA.io,
        Plante = NA.models.Plante,
        Variete = NA.models.Variete,
        Semi = NA.models.Semi,
        Tunnel = NA.models.Tunnel,
        locals = {};

    // Attendre un lien valide entre client et serveur
    io.sockets.on("connection", function (socket) {
        
        var render;
        
        socket.on("get-form-variete", function (data) {
            
            var plante = new Plante(),
                semi = new Semi();
            
            NA.mySql.getConnection(function (err, connection) {
                if (err) {
                    console.log(err);
                    return false;
                }
            
                semi
                    .setConnection(connection)
                    .readAllTypeSemis(function (type_semis){
                    
                        plante
                            .setConnection(connection)
                            .id_plante(data.id_plante)
                            .readAll(function () {

                                // On récupère les variations spécifiques
                                locals = NA.specific("addvariete.json", undefined);
                                // On récupère les variations
                                // variations = NA.common(data.lang, variations);
                                //locals.plante = plante;
                                //console.log(locals);
                                // On récupère le fragment HTML depuis le dossier `viewsRelativePath` et on applique les variations.
                                //locals.urlPath = data.urlPath;

                                render = NA.view("addvariete.htm", locals);
                                //console.log(render);

                                io.sockets.emit("get-form-variete", {
                                    view: render,                            
                                    data: {
                                        nom_plante: plante.nom_plante(),
                                        id_plante: plante.id_plante(),
                                        nom_variete: '',
                                        description: '',
                                        duree_vie: '1',
                                        pmg: '1',
                                        listModalites: type_semis,
                                        index_modalite: '0',
                                        semis: [],
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
                                        tunnels: [],
                                        nType: '',
                                        nTunnelDebut: '1',
                                        nTunnelFin: '1',
                                        nTunnelCom: '',
                                        repiquages: [],
                                        nRepiquageDebut: '1',
                                        nRepiquageFin: '1',
                                        nRepiquageCom: '',
                                        formSubmitted: false
                                    }
                                });
                            });
                    });
            });
        });
        
        socket.on("add-variete", function (data) {
                       
            var variete = new Variete(),
                semi = new Semi(),
                tunnel = new Tunnel(),
                itineraires = data.semis;
    
                console.log(itineraires);
                
                NA.mySql.getConnection(function(err, connection) {
                if (err) {
                    throw err;
                }
                    
                    console.log(data.id_plante);
                    console.log(data.nom_variete);
                    console.log(data.description);
                    
                    variete
                        .setConnection(connection)
                        .ref_plante(data.id_plante)
                        .nom_variete(data.nom_variete)
                        .description(data.description)
                        .create(function (infos){
                        
                                variete
                                    .graine_duree_vie(data.duree_vie)
                                    .graine_pmg(data.pmg)
                                    .createGraine(function (infos){
                                        
                                        itineraires.forEach(function(itineraire) {
                                    
                                            semi
                                                .setConnection(connection)
                                                .ref_variete(variete.id_variete())
                                                .nom_semi(itineraire.titre)
                                                .type_semi(data.listModalites[itineraire.modalite].id)
                                                .debut_semi(itineraire.debut_semi)
                                                .fin_semi(itineraire.fin_semi)
                                                .profondeur(itineraire.profondeur)
                                                .temperature_germi(itineraire.temperature_germi)
                                                .taux_germi(itineraire.taux_germi)
                                                .temps_levee_jour(itineraire.temps_levee_jour)
                                                .distance_entre_rang(itineraire.distance_entre_rang)
                                                .distance_sur_rang(itineraire.distance_sur_rang)
                                                .create(function (infos){
                                                
                                                    locals.ref_semi = infos.insertId;

                                                    tunnels = itineraire.tunnels;
                                                    repiquages = itineraire.repiquages;

                                                    if (repiquages.length) {

                                                        repiquages.forEach(function(repi){
                                                            
                                                            semi
                                                                .debut_repi(repi.debut_repi)
                                                                .fin_repi(repi.fin_repi)
                                                                .repi_commentaire(repi.repi_commentaire)
                                                                .createRepiquage();
                                                        });
                                                    }
                                                
                                                    if (tunnels.length) {

                                                        tunnels.forEach(function(tun){
                                                            
                                                            tunnel
                                                                .setConnection(connection)
                                                                .ref_semi(locals.ref_semi)
                                                                .type_tunnel(tun.type_tunnel)
                                                                .debut_tunnel(tun.debut_tunnel)
                                                                .fin_tunnel(tun.fin_tunnel)
                                                                .commentaire_tunnel(tun.commentaire_tunnel)
                                                                .create();
                                                                
                                                        });
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
        view = path.join(NA.serverPath, NA.webconfig.viewsRelativePath, "addvariete.htm"),
        model = path.join(NA.serverPath, NA.webconfig.viewsRelativePath, "addvariete.js"),
        data = {
            nom_plante: locals.plante.nom_plante(),
            id_plante: locals.plante.id_plante(),
            nom_variete: '',
            description: '',
            duree_vie: '1',
            pmg: '1',
            listModalites: locals.type_semis,
            index_modalite: '0',
            semis: [],
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
            tunnels: [],
            nType: '',
            nTunnelDebut: '1',
            nTunnelFin: '1',
            nTunnelCom: '',
            repiquages: [],
            nRepiquageDebut: '1',
            nRepiquageFin: '1',
            nRepiquageCom: '',
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
        plante = new Plante(),
        Semi = NA.models.Semi,
        semi = new Semi();
    
    NA.mySql.getConnection(function(err, connection) {
        if (err) {
            throw err;
        }
        
        semi
            .setConnection(connection)
            .readAllTypeSemis(function (type_semis){
            
                locals.type_semis = type_semis;
            
                plante
                    .setConnection(connection)
                    .nom_plante(locals.params.plante)
                    .readAll(function () {
                    
                        locals.plante = plante;
                        next();
                    
                    });
        }); 
    });
};
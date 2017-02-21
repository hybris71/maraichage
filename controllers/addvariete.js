exports.setSockets = function () {
    var NA = this,
        io = NA.io,
        Plante = NA.models.Plante,
        Variete = NA.models.Variete,
        locals = {};

    // Attendre un lien valide entre client et serveur
    io.sockets.on("connection", function (socket) {
        
        var render;
        
        socket.on("get-form-variete", function (data) {
            
            var plante = new Plante();
            
            NA.mySql.getConnection(function (err, connection) {
                if (err) {
                    console.log(err);
                    return false;
                }
            
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
                            formSubmitted: false
                        }
                    });
                });
            });
        });
        
        socket.on("add-variete", function (data) {
                       
            var variete = new Variete();
            
            NA.mySql.getConnection(function(err, connection) {
                if (err) {
                    throw err;
                }

                variete
                    .createVariete(function (infos) {

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
                
                    io.sockets.emit("add-variete", {
                        view: render,                            
                        data: {
                            nom_plante: plante.nom_plante(),
                            id_plante: plante.id_plante(),
                            nom_variete: '',
                            description: '',
                            duree_vie: '1',
                            pmg: '1',
                            formSubmitted: true
                        }
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
        plante = new Plante();
    
    NA.mySql.getConnection(function(err, connection) {
        if (err) {
            throw err;
        }
            
        plante
            .setConnection(connection)
            .nom_plante(locals.params.plante)
            .readAll(function () {

                locals.plante = plante;
                next();
            });
    });
};
exports.setSockets = function () {
    var NA = this,
        io = NA.io,
        Variete = NA.models.Variete,
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
                            styleObjectEdit: {
                                display: 'block'
                            },
                            styleObjectOk: {
                                display: 'none'
                            },
                            id_variete: locals.variete.id_variete(),
                            nom_variete: locals.variete.nom_variete(),
                            description: locals.variete.description()
                        }
                    });

                });
		
            });
        });
        
        socket.on("update-plante", function (data) {
        
            console.log("update variete");
        
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
            styleObjectEdit: {
                display: 'block'
            },
            styleObjectOk: {
                display: 'none'
            },
            id_variete: locals.variete.id_variete(),
            nom_variete: locals.variete.nom_variete(),
            description: locals.variete.description()
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

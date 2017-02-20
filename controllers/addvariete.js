exports.setSockets = function () {
    var NA = this,
        io = NA.io,
        Variete = NA.models.Variete,
        locals = {};

    // Attendre un lien valide entre client et serveur
    io.sockets.on("connection", function (socket) {
        
        var render;
        
        socket.on("get-form-variete", function () {
            
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
                data: { }
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
                        data: { }
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

exports.changeVariations = function (next, locals) {
    var NA = this;
    next();
};
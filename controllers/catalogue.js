exports.changeVariations = function (next, locals) {
    var NA = this,
        Plante = NA.models.Plante,
        planteManager = Plante();

    NA.mySql.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            return false;
        }
	
	planteManager
        .setConnection(connection)
        .readNames(function (catalogue) {
 
            locals.catalogue = catalogue;
            
            next();
        });
    });
};

exports.changeDom = function (next, locals) {
    var NA = this,
        renderer = NA.modules.vueServerRenderer.createRenderer(),
        fs = NA.modules.fs,
        path = NA.modules.path,
        view = path.join(NA.serverPath, NA.webconfig.viewsRelativePath, "catalogue.htm"),
        model = path.join(NA.serverPath, NA.webconfig.viewsRelativePath, "catalogue.js"),
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
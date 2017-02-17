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

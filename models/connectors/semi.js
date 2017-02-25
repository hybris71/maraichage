/* jslint esversion: 6 */
var semi = require('../objects/semi.js');
 
function Semi(connection) {
    var privates = {},
        publics = this;
    
    semi.call(publics);
 
    privates.connection = connection;
 
    if (!(publics instanceof Semi)) {
        return new Semi();
    }
 
    publics.setConnection = function (connection) {
        privates.connection = connection;
        return publics;
    };
    
    publics.createRepiquage = function () {
    	var insert = "INSERT INTO repiquages (",
    		values = ") VALUES (";

		
		if (publics.debut_repi()) { insert += "`debut_repi`, "; }
        if (publics.fin_repi()) { insert += "`fin_repi`, "; }
        if (publics.repi_commentaire()) { insert += "`repi_commentaire`, "; }
        if (publics.id_semi()) { insert += "`ref_semi`, "; }

		insert = insert.replace(/, $/g, "");

		if (publics.debut_repi()) { values += '"' + publics.debut_repi() + '", '; }
        if (publics.fin_repi()) { values += '"' + publics.fin_repi() + '", '; }
        if (publics.repi_commentaire()) { values += '"' + publics.repi_commentaire() + '", '; }
        if (publics.id_semi()) { values += '"' + publics.id_semi() + '", '; }
		
		values = values.replace(/, $/g, ")");

		privates.connection.query(insert + values, function (err, infos) {
			if (err) {
				throw err;
			}
		});

		return publics;
    };

    publics.create = function (callback) {
    	var insert = "INSERT INTO semis (",
    		values = ") VALUES (";

		
		if (publics.nom_semi()) { insert += "`nom_semi`, "; }
        if (publics.type_semi()) { insert += "`ref_type_semi`, "; }
        if (publics.distance_entre_rang()) { insert += "`distance_entre_rang`, "; }
        if (publics.distance_sur_rang()) { insert += "`distance_sur_rang`, "; }
        if (publics.profondeur()) { insert += "`profondeur`, "; }
        if (publics.temps_levee_jour()) { insert += "`temps_levee_jour`, "; }
        if (publics.temperature_germi()) { insert += "`temperature_germi`, "; }
        if (publics.taux_germi()) { insert += "`taux_germi`, "; }
        if (publics.debut_semi()) { insert += "`debut_semi`, "; }
        if (publics.fin_semi()) { insert += "`fin_semi`, "; }
        if (publics.ref_variete()) { insert += "`ref_variete`, "; }

		insert = insert.replace(/, $/g, "");

		if (publics.nom_semi()) { values += '"' + publics.nom_semi() + '", '; }
        if (publics.type_semi()) { values += '"' + publics.type_semi() + '", '; }
        if (publics.distance_entre_rang()) { values += '"' + publics.distance_entre_rang() + '", '; }
        if (publics.distance_sur_rang()) { values += '"' + publics.distance_sur_rang() + '", '; }
        if (publics.profondeur()) { values += '"' + publics.profondeur() + '", '; }
        if (publics.temps_levee_jour()) { values += '"' + publics.temps_levee_jour() + '", '; }
        if (publics.temperature_germi()) { values += '"' + publics.temperature_germi() + '", '; }
        if (publics.taux_germi()) { values += '"' + publics.taux_germi() + '", '; }
        if (publics.debut_semi()) { values += '"' + publics.debut_semi() + '", '; }
        if (publics.fin_semi()) { values += '"' + publics.fin_semi() + '", '; }
        if (publics.ref_variete()) { values += '"' + publics.ref_variete() + '", '; }
		
		values = values.replace(/, $/g, ")");

		privates.connection.query(insert + values, function (err, infos) {
			if (err) {
				throw err;
			}
            
            publics.id_semi(infos.insertId);

			if (callback) {
				callback(infos);
			}
		});

		return publics;
    };

    publics.readAllTypeSemis = function (callback) {
        var select = `SELECT
                    id_type_semi,
                    type_semi_description
                FROM type_semis;`
                
        privates.connection.query(select, function(err, rows, fields) {
                        
                        var type_semis = [];
            
                        if (err) { 
                            console.log(err); 
                        }

                        for (var i = 0; i < rows.length; i++) {
                                var new_type_semi = {
                                    id: rows[i].id_type_semi,
                                    description: rows[i].type_semi_description
                                };
                            type_semis.push(new_type_semi);
                        } 
            if (callback) {
                    callback(type_semis);
            }
        });
        
        return publics;
    };
}

Semi.prototype = Object.create(semi.prototype);
Semi.prototype.constructor = Semi;

module.exports = Semi;
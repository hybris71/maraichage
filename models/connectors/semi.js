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
    
    publics.createRepiquage = function (callback) {
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
            publics.id_repiquage(infos.insertId);

			if (callback) {
				callback(infos);
			}
		});

		return publics;
    };
    
    publics.deleteRepiquage = function () {
        var del = "DELETE FROM repiquages",
            where = "";

		if (publics.id_repiquage()) { where += ' && `id_repiquage` = ' + publics.id_repiquage(); }
        if (publics.id_semi()) { where += ' && `ref_semi` = ' + publics.id_semi(); }

        where = where.replace("&&", "WHERE");

        privates.connection.query(del + where, function (err, infos) {
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
    
    publics.readAll = function (callback) {
        var select = `SELECT 
                            SMI.id_semi AS id_semi,
                            SMI.nom_semi AS nom_semi,
                            SMI.distance_entre_rang AS distance_entre_rang,
                            SMI.distance_sur_rang AS distance_sur_rang,
                            SMI.profondeur AS profondeur,
                            SMI.temps_levee_jour AS temps_levee_jour,
                            SMI.temperature_germi AS temperature_germi,
                            SMI.taux_germi AS taux_germi,
                            SMI.rendement AS rendement,
                            SMI.debut_semi AS debut_semi,
                            SMI.fin_semi AS fin_semi,
                            SMI.ref_variete AS ref_variete,
                            SMI.ref_type_semi AS ref_type_semi,
                            T_SMI.type_semi_description AS type_semi_description
                            FROM semis AS SMI
                            INNER JOIN type_semis T_SMI ON T_SMI.id_type_semi = SMI.ref_type_semi`
                where = "";
    
        if (publics.id_semi()) { where += ' && SMI.`id_semi` = "' + publics.id_semi() + '"'; }

        where = where.replace("&&", "WHERE");

	   privates.connection.query(select + where, function(err, rows, fields) {

                        if (err) console.log(err);
		
                        if (rows[0]) {
                                    publics.id_semi(rows[0].id_semi);
                                    publics.nom_semi(rows[0].nom_semi);
                                    publics.distance_entre_rang(rows[0].distance_entre_rang);
                                    publics.distance_sur_rang(rows[0].distance_sur_rang);
                                    publics.profondeur(rows[0].profondeur);
                                    publics.temps_levee_jour(rows[0].temps_levee_jour);
                                    publics.temperature_germi(rows[0].temperature_germi);
                                    publics.taux_germi(rows[0].taux_germi);
                                    publics.rendement(rows[0].rendement);
                                    publics.debut_semi(rows[0].debut_semi);
                                    publics.fin_semi(rows[0].fin_semi);
                                    publics.type_semi(rows[0].ref_type_semi);
                                    publics.type_semi_description(rows[0].type_semi_description);
                                    publics.ref_variete(rows[0].ref_variete);                        
                        }

                    if(callback) {
                        callback();
                    }
        });
        
        return publics;
    };
    
    publics.readRepiquages = function (callback) {
        var select = `SELECT 
                            REPI.id_repiquage AS id_repiquage,
                            REPI.debut_repi AS debut_repi,
                            REPI.fin_repi AS fin_repi,
                            REPI.repi_commentaire AS repi_commentaire
                            FROM repiquages AS REPI`
                where = "";
    
        if (publics.id_semi()) { where += ' && REPI.`ref_semi` = "' + publics.id_semi() + '"'; }

        where = where.replace("&&", "WHERE");

	   privates.connection.query(select + where, function(err, rows, fields) {

                        var repiquages = [];
                        
                        if (err) console.log(err);
		
                        for (var i = 0; i < rows.length; i++) {
                                var new_repiquage = {
                                    id: rows[i].id_repiquage,
                                    debut_repi: rows[i].debut_repi,
                                    fin_repi: rows[i].fin_repi,
                                    repi_commentaire: rows[i].repi_commentaire
                                };
                            repiquages.push(new_repiquage);
                        }

                    if(callback) {
                        callback(repiquages);
                    }
        });
        
        return publics;
    };
    
    publics.updateSemi = function (callback) {
        var update = "UPDATE semis SET",
            where = "";
    
        if (publics.nom_semi()) { update += '`nom_semi` = "' + publics.nom_semi() + '", '; }
        if (publics.debut_semi()) { update += '`debut_semi` = "' + publics.debut_semi() + '", '; }
        if (publics.fin_semi()) { update += '`fin_semi` = "' + publics.fin_semi() + '", '; }
        if (publics.profondeur()) { update += '`profondeur` = "' + publics.profondeur() + '", '; }
        if (publics.temperature_germi()) { update += '`temperature_germi` = "' + publics.temperature_germi() + '", '; }
        if (publics.taux_germi()) { update += '`taux_germi` = "' + publics.taux_germi() + '", '; }
        if (publics.temps_levee_jour()) { update += '`temps_levee_jour` = "' + publics.temps_levee_jour() + '", '; }
        if (publics.distance_entre_rang()) { update += '`distance_entre_rang` = "' + publics.distance_entre_rang() + '", '; }
        if (publics.distance_sur_rang()) { update += '`distance_sur_rang` = "' + publics.distance_sur_rang() + '", '; }
        if (publics.type_semi()) { update += '`ref_type_semi` = "' + publics.type_semi() + '", '; }
        
        update = update.replace(/, $/g, "");

        if (publics.id_semi()) { where += ' && `id_semi` = ' + publics.id_semi(); }

        where = where.replace("&&", "WHERE");

        privates.connection.query(update + where, function (err, infos) {
            if (err) { 
                throw err;
            }

            if (callback) {
                callback(infos);
            }
        });

        return publics;
    };
    
}

Semi.prototype = Object.create(semi.prototype);
Semi.prototype.constructor = Semi;

module.exports = Semi;
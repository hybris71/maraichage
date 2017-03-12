/* jslint esversion: 6 */
var variete = require('../objects/variete.js');

function Variete(connection) {
    var privates = {},
        publics = this;

    privates.connection = connection;

    if (!(publics instanceof Variete)) {
        return new Variete();
    }

    publics.setConnection = function (connection) {
        privates.connection = connection;
        return publics;
    };

    variete.call(publics);
    
    publics.create = function (callback) {
    	var insert = "INSERT INTO varietes (",
    		values = ") VALUES (";

		
		if (publics.nom_variete()) { insert += "`nom_variete`, "; }
        if (publics.description()) { insert += "`description`, "; }
        if (publics.ref_plante()) { insert += "`ref_plante`, "; }

		insert = insert.replace(/, $/g, "");

		if (publics.nom_variete()) { values += '"' + publics.nom_variete() + '", '; }
        if (publics.description()) { values += '"' + publics.description() + '", '; }
        if (publics.ref_plante()) { values += '"' + publics.ref_plante() + '", '; }
		
		values = values.replace(/, $/g, ")");

		privates.connection.query(insert + values, function (err, infos) {
			if (err) {
				throw err;
			}
            
            publics.id_variete(infos.insertId);

			if (callback) {
				callback(infos);
			}
		});

		return publics;
    };
    
    publics.createGraine = function (callback) {
    	var insert = "INSERT INTO graines (",
    		values = ") VALUES (";

		
        if (publics.graine_duree_vie()) { insert += "`duree_vie`, "; }
        if (publics.graine_pmg()) { insert += "`pmg`, "; }
		if (publics.id_variete()) { insert += "`ref_variete`, "; }

		insert = insert.replace(/, $/g, "");

        if (publics.graine_duree_vie()) { values += '"' + publics.graine_duree_vie() + '", '; }
        if (publics.graine_pmg()) { values += '"' + publics.graine_pmg() + '", '; }
        if (publics.id_variete()) { values += '"' + publics.id_variete() + '", '; }
		
		values = values.replace(/, $/g, ")");

		privates.connection.query(insert + values, function (err, infos) {
			if (err) {
				throw err;
			}

			if (callback) {
				callback(infos);
			}
		});

		return publics;
    };
	
    publics.readAll = function (callback) {
        var select = `SELECT
                        VR.id_variete AS id_variete,
                        VR.nom_variete AS nom_variete,
                        VR.description AS description,
                        VR.ref_plante AS ref_plante,
                        STK.aeration AS stockage_aeration,
                        STK.duree_conservation AS stockage_duree_conservation,
                        STK.hygrometrie AS stockage_hygrometrie,
                        STK.local AS stockage_local,
                        STK.temperature AS stockage_temperature,
                        GRN.duree_vie AS graine_duree_vie,
                        GRN.pmg AS graine_pmg,
                        GRN.prix AS graine_prix,
                        SMI.id_semi AS id_semi,
                        SMI.nom_semi AS nom_semi
                        FROM varietes AS VR
                        LEFT JOIN semis SMI ON SMI.ref_variete = VR.id_variete
                        LEFT JOIN stockage STK ON STK.ref_variete = VR.id_variete
                        LEFT JOIN graines GRN ON GRN.ref_variete = VR.id_variete`
                where = "";
     /*           addWhere = " WHERE ";

	if (publics.nom_variete()) { where += addWhere + "`nom_variete` = '" + publics.nom_variete().replace(/'/g, "''") + "'"; addWhere = ' && '; }
    if (publics.id_variete()) { where += addWhere + "`id_variete` = '" + publics.id_variete().replace(/'/g, "''") + "'"; addWhere = ' && '; }*/

        if (publics.nom_variete()) { where += ' && VR.`nom_variete` = "' + publics.nom_variete() + '"'; }
        if (publics.id_variete()) { where += ' && VR.`id_variete` = "' + publics.id_variete() + '"'; }

        where = where.replace("&&", "WHERE");

	   privates.connection.query(select + where, function(err, rows, fields) {

                        if (err) console.log(err);
		
                        if (rows[0]) {
                                    publics.id_variete(rows[0].id_variete);
                                    publics.nom_variete(rows[0].nom_variete);
                                    publics.description(rows[0].description);
                                    publics.ref_plante(rows[0].ref_plante);
                                    publics.stockage_aeration(rows[0].stockage_aeration);
                                    publics.stockage_duree_conservation(rows[0].stockage_duree_conservation);
                                    publics.stockage_hygrometrie(rows[0].stockage_hygrometrie);
                                    publics.stockage_local(rows[0].stockage_local);
                                    publics.stockage_temperature(rows[0].stockage_temperature);
                                    publics.graine_duree_vie(rows[0].graine_duree_vie);
                                    publics.graine_pmg(rows[0].graine_pmg);
                                    publics.graine_prix(rows[0].graine_prix);                        
                        }
        
                        for (var i = 0; i < rows.length; i++) {
                            
                            if (rows[i].id_semi) {
                                
                                var new_semi = {
                                    id: rows[i].id_semi,
                                    nom: rows[i].nom_semi
                                };

                                publics.add(new_semi, publics.get_list_semi());
                                
                            }
                        }

                    if(callback) {
                        callback();
                    }
        });
        
        return publics;
    };
    
    publics.updateVariete = function (callback) {
        var update = "UPDATE varietes SET",
            where = "";
    
        if (publics.nom_variete()) { update += '`nom_variete` = "' + publics.nom_variete() + '", '; }
        if (publics.description()) { update += '`description` = "' + publics.description() + '", '; }

        update = update.replace(/, $/g, "");

        if (publics.id_variete()) { where += ' && `id_variete` = ' + publics.id_variete(); }

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
    
    publics.updateGraine = function (callback) {
        var update = "UPDATE graines SET",
            where = "";
    
        if (publics.graine_duree_vie()) { update += '`duree_vie` = "' + publics.graine_duree_vie() + '", '; }
        if (publics.graine_pmg()) { update += '`pmg` = "' + publics.graine_pmg() + '", '; }

        update = update.replace(/, $/g, "");

        if (publics.id_variete()) { where += ' && `ref_variete` = ' + publics.id_variete(); }

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

}; 

Variete.prototype = Object.create(variete.prototype);
Variete.prototype.constructor = Variete;

module.exports = Variete;

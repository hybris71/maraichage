/* jslint esversion: 6 */
var plante = require('../objects/plante.js');

function Plante(connection) {
    var privates = {},
        publics = this;
    
    plante.call(publics);
    
    privates.connection = connection;
 
    if (!(publics instanceof Plante)) {
        return new Plante();
    }
 
    publics.setConnection = function (connection) {
        privates.connection = connection;
        return publics;
    };

    publics.readNames = function (callback) {
        var select = `SELECT
                    id_plante,
                    nom AS nom_plante
                FROM plantes;`
                
        privates.connection.query(select, function(err, rows, fields) {
                        var catalogue = [];

                        if (err) { 
                            console.log(err); 
                        }

                        for (var i = 0; i < rows.length; i++) {
                                var new_plante = { 
                                    nom: rows[i].nom_plante,
                                    id: rows[i].id_plante
                                };
                                catalogue.push(new_plante);
                        } 
            if (callback) {
                    callback(catalogue);
            }
        });
        
        return publics;
    };
    
    publics.create = function (callback) {
    	var insert = "INSERT INTO plantes (",
    		values = ") VALUES (";

		
		if (publics.nom_plante()) { insert += "`nom`, "; }
        if (publics.origine_geographique()) { insert += "`origine_geographique`, "; }
        if (publics.anciennete_culture()) { insert += "`anciennete_culture`, "; }
        if (publics.cycle()) { insert += "`cycle`, "; }
        if (publics.description()) { insert += "`description`, "; }
        if (publics.engrais_vert()) { insert += "`engrais_vert`, "; }
        if (publics.compagne()) { insert += "`compagne`, "; }
        if (publics.ref_groupe()) { insert += "`ref_groupe`, "; }
        if (publics.ref_famille()) { insert += "`ref_famille`, "; }

		insert = insert.replace(/, $/g, "");

		if (publics.nom_plante()) { values += '"' + publics.nom_plante() + '", '; }
        if (publics.origine_geographique()) { values += '"' + publics.origine_geographique() + '", '; }
        if (publics.anciennete_culture()) { values += '"' + publics.anciennete_culture() + '", '; }
        if (publics.cycle()) { values += '"' + publics.cycle() + '", '; }
        if (publics.description()) { values += '"' + publics.description() + '", '; }
        if (publics.engrais_vert()) { values += '"' + publics.engrais_vert() + '", '; }
        if (publics.compagne()) { values += '"' + publics.compagne() + '", '; }
        if (publics.ref_groupe()) { values += '"' + publics.ref_groupe() + '", '; }
        if (publics.ref_famille()) { values += '"' + publics.ref_famille() + '", '; }
		
		values = values.replace(/, $/g, ")");

		privates.connection.query(insert + values, function (err, infos) {
			if (err) {
				throw err;
			}
            
            publics.id_plante(infos.insertId);

			if (callback) {
				callback(infos);
			}
		});

		return publics;
    };
    
    publics.createPedoclimat = function (callback) {
    	var insert = "INSERT INTO pedoclimat (",
    		values = ") VALUES (";

		
        if (publics.climat_favorable()) { insert += "`climat_favorable`, "; }
        if (publics.climat_defavorable()) { insert += "`climat_defavorable`, "; }
        if (publics.commentaire_climat()) { insert += "`commentaire_climat`, "; }
        if (publics.temp_gel()) { insert += "`temp_gel`, "; }
        if (publics.sol_favorable()) { insert += "`sol_favorable`, "; }
        if (publics.sol_defavorable()) { insert += "`sol_defavorable`, "; }
        if (publics.commentaire_sol()) { insert += "`commentaire_sol`, "; }
        if (publics.fertilisation_favorable()) { insert += "`fertilisation_favorable`, "; }
        if (publics.fertilisation_defavorable()) { insert += "`fertilisation_defavorable`, "; }
        if (publics.commentaire_fertilisation()) { insert += "`commentaire_fertilisation`, "; }
        if (publics.fumier_frais()) { insert += "`fumier_frais`, "; }
		if (publics.id_plante()) { insert += "`ref_plante`, "; }

		insert = insert.replace(/, $/g, "");

        if (publics.climat_favorable()) { values += '"' + publics.climat_favorable() + '", '; }
        if (publics.climat_defavorable()) { values += '"' + publics.climat_defavorable() + '", '; }
        if (publics.commentaire_climat()) { values += '"' + publics.commentaire_climat() + '", '; }
        if (publics.temp_gel()) { values += '"' + publics.temp_gel() + '", '; }
        if (publics.sol_favorable()) { values += '"' + publics.sol_favorable() + '", '; }
        if (publics.sol_defavorable()) { values += '"' + publics.sol_defavorable() + '", '; }
        if (publics.commentaire_sol()) { values += '"' + publics.commentaire_sol() + '", '; }
        if (publics.fertilisation_favorable()) { values += '"' + publics.fertilisation_favorable() + '", '; }
        if (publics.fertilisation_defavorable()) { values += '"' + publics.fertilisation_defavorable() + '", '; }
        if (publics.commentaire_fertilisation()) { values += '"' + publics.commentaire_fertilisation() + '", '; }
        if (publics.fumier_frais()) { values += '"' + publics.fumier_frais() + '", '; }
		if (publics.id_plante()) { values += '"' + publics.id_plante() + '", '; }
		
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
    
    publics.createExportation = function (callback) {
    	var insert = "INSERT INTO exportations (",
    		values = ") VALUES (";
		
        if (publics.rendement()) { insert += "`rendement`, "; }
        if (publics.azote()) { insert += "`azote`, "; }
        if (publics.phosphore()) { insert += "`phosphore`, "; }
        if (publics.potassium()) { insert += "`potassium`, "; }
        if (publics.calcium()) { insert += "`calcium`, "; }
        if (publics.magnesium()) { insert += "`magnesium`, "; }
        if (publics.id_plante()) { insert += "`ref_plante`, "; }

		insert = insert.replace(/, $/g, "");

        if (publics.rendement()) { values += '"' + publics.rendement() + '", '; }
        if (publics.azote()) { values += '"' + publics.azote() + '", '; }
        if (publics.phosphore()) { values += '"' + publics.phosphore() + '", '; }
        if (publics.potassium()) { values += '"' + publics.potassium() + '", '; }
        if (publics.calcium()) { values += '"' + publics.calcium() + '", '; }
        if (publics.magnesium()) { values += '"' + publics.magnesium() + '", '; }
        if (publics.id_plante()) { values += '"' + publics.id_plante() + '", '; }
		
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
    
    publics.createDureeRotation = function (callback) {
    	var insert = "INSERT INTO rotation_duree (",
    		values = ") VALUES (";
		
        if (publics.rotation_duree_mini()) { insert += "`duree_mini`, "; }
        if (publics.commentaire_duree()) { insert += "`commentaire_duree`, "; }
        if (publics.id_plante()) { insert += "`ref_plante`, "; }

		insert = insert.replace(/, $/g, "");

        if (publics.rotation_duree_mini()) { values += '"' + publics.rotation_duree_mini() + '", '; }
        if (publics.commentaire_duree()) { values += '"' + publics.commentaire_duree() + '", '; }
        if (publics.id_plante()) { values += '"' + publics.id_plante() + '", '; }
		
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
                        PL.id_plante AS id_plante,
                        PL.nom AS nom_plante,
                        PL.origine_geographique AS origine_geographique,
                        PL.anciennete_culture AS anciennete_culture,
                        PL.cycle AS cycle,
                        PL.description AS description,
                        FM.nom_famille AS nom_famille,
                        FM.id_famille AS id_famille,
                        GP.nom_groupe AS nom_groupe,
                        GP.id_groupe AS id_groupe,
                        PC.climat_favorable AS climat_favorable,
                        PC.climat_defavorable AS climat_defavorable,
                        PC.commentaire_climat AS commentaire_climat,
                        PC.sol_favorable AS sol_favorable,
                        PC.sol_defavorable AS sol_defavorable,
                        PC.commentaire_sol AS commentaire_sol,
                        PC.fertilisation_favorable AS fertilisation_favorable,
                        PC.fertilisation_defavorable AS fertilisation_defavorable,
                        PC.commentaire_fertilisation AS commentaire_fertilisation,
                    PL_ASS.nom AS plantes_association,
                    ASSO.ref_plante_asso AS association_ref_plante,
                    ASSO.favorable AS plantes_asso_tag,
                        RD.duree_mini AS rotation_duree_mini,
                        RD.commentaire_duree AS commentaire_duree,
                    FMR.nom_famille AS rotation_famille,
                    RF.ref_famille AS rotation_ref_famille,
                        RF.favorable AS rotation_famille_tag,
                    PLR.nom AS rotation_plante,
                    RP.ref_plante_condition AS rotation_ref_plante,
                    RP.favorable AS rotation_plante_tag,
                        VR.nom_variete AS nom_variete,
                        EXP.rendement AS rendement,
                        EXP.azote AS azote,
                        EXP.phosphore AS phosphore,
                        EXP.potassium AS potassium,
                        EXP.calcium AS calcium,
                        EXP.magnesium AS magnesium
                        FROM plantes AS PL
                        INNER JOIN familles FM ON FM.id_famille = PL.ref_famille
                        INNER JOIN groupes GP ON GP.id_groupe = PL.ref_groupe
                        LEFT JOIN pedoclimat PC ON PC.ref_plante = PL.id_plante
                        LEFT JOIN associations ASSO ON ASSO.ref_plante = PL.id_plante
                        LEFT JOIN plantes PL_ASS ON PL_ASS.id_plante = ASSO.ref_plante_asso
                        LEFT JOIN rotation_duree RD ON RD.ref_plante = PL.id_plante
                        LEFT JOIN rotation_famille RF ON RF.ref_plante = PL.id_plante
                        LEFT JOIN familles FMR ON FMR.id_famille = RF.ref_famille
                        LEFT JOIN rotation_plante RP ON RP.ref_plante = PL.id_plante
                        LEFT JOIN plantes PLR ON PLR.id_plante = RP.ref_plante_condition
                        LEFT JOIN varietes VR ON VR.ref_plante = PL.id_plante
                        LEFT JOIN exportations EXP ON EXP.ref_plante = PL.id_plante`
            where = "";
 
        console.log("readAll id_plante : " + publics.id_plante());
        console.log("readAll nom_plante : " + publics.nom_plante());
            
      /*  if (publics.nom_plante()) { where += addWhere + "PL.`nom` = '" + publics.nom_plante().replace(/'/g, "''") + "'"; addWhere = ' && '; }
        if (publics.id_plante()) { where += addWhere + "PL.`id_plante` = '" + publics.id_plante().replace(/'/g, "''") + "'"; addWhere = ' && '; }*/

        if (publics.nom_plante()) { where += ' && PL.`nom` = "' + publics.nom_plante() + '"'; }
        if (publics.id_plante()) { where += ' && PL.`id_plante` = "' + publics.id_plante() + '"'; }

        where = where.replace("&&", "WHERE");
 	
        privates.connection.query(select + where, function(err, rows, fields) {
	       
            if (err) console.log(err);
	
            if (rows[0]) {
                publics.id_plante(rows[0].id_plante);
                publics.nom_plante(rows[0].nom_plante);
               /* publics.nomPlante = rows[0].nom_plante;*/
                publics.origine_geographique(rows[0].origine_geographique);
                publics.anciennete_culture(rows[0].anciennete_culture);
                publics.cycle(rows[0].cycle);
                publics.description(rows[0].description);
                publics.nom_groupe(rows[0].nom_groupe);
                publics.id_groupe(rows[0].id_groupe);
                publics.nom_famille(rows[0].nom_famille);
                publics.id_famille(rows[0].id_famille);
                publics.climat_favorable(rows[0].climat_favorable);
                publics.climat_defavorable(rows[0].climat_defavorable);
                publics.commentaire_climat(rows[0].commentaire_climat);
                publics.sol_favorable(rows[0].sol_favorable);
                publics.sol_defavorable(rows[0].sol_defavorable);
                publics.commentaire_sol(rows[0].commentaire_sol);
                publics.fertilisation_favorable(rows[0].fertilisation_favorable);
                publics.fertilisation_defavorable(rows[0].fertilisation_defavorable);
                publics.commentaire_fertilisation(rows[0].commentaire_fertilisation);
                publics.rotation_duree_mini(rows[0].rotation_duree_mini);
                publics.commentaire_duree(rows[0].commentaire_duree);
                publics.rendement(rows[0].rendement);
                publics.azote(rows[0].azote);
                publics.phosphore(rows[0].phosphore);
                publics.potassium(rows[0].potassium);
                publics.calcium(rows[0].calcium);
                publics.magnesium(rows[0].magnesium);

            }
            
            for (var i = 0; i < rows.length; i++) {
               
                if (rows[i].plantes_asso_tag == 0) {
                   
                    var new_association_favorable = {
                       nom: rows[i].plantes_association,
                       id: rows[i].association_ref_plante
                   };
                   
                   publics.add(new_association_favorable, publics.get_plantes_associations_favorables());
                   
                }
                
                if (rows[i].plantes_asso_tag == 1) {
                   
                   var new_association_defavorable = { 
                       nom: rows[i].plantes_association,
                       id: rows[i].association_ref_plante
                   };
                   
                   publics.add(new_association_defavorable, publics.get_plantes_associations_defavorables());
                    
                }
             
                if (rows[i].rotation_famille_tag == 0) {
                   
                   
                   var new_rotation_famille_favorable = { 
                       nom: rows[i].rotation_famille,
                       id: rows[i].rotation_ref_famille
                   };
                   
                   publics.add(new_rotation_famille_favorable, publics.get_rotation_familles_favorables());
                   
                }
                
                if (rows[i].rotation_famille_tag == 1) {
                   
                    var new_rotation_famille_defavorable = { 
                       nom: rows[i].rotation_famille,
                       id: rows[i].rotation_ref_famille
                   };
                   
                   publics.add(new_rotation_famille_defavorable, publics.get_rotation_familles_defavorables());
                   
                }
                
                if (rows[i].rotation_plante_tag == 0) {
                   
                   var new_rotation_plante_favorable = { 
                       nom: rows[i].rotation_plante,
                       id: rows[i].rotation_ref_plante
                   };
                   
                   publics.add(new_rotation_plante_favorable, publics.get_rotation_plantes_favorables());
                   
                }
                if (rows[i].rotation_plante_tag == 1) {
                   
                   var new_rotation_plante_defavorable = { 
                       nom: rows[i].rotation_plante,
                       id: rows[i].rotation_ref_plante
                   };
                   
                   publics.add(new_rotation_plante_defavorable, publics.get_rotation_plantes_defavorables());
                   
                }
                
                
                //publics.list_variete(rows[i].nom_variete, true);
                publics.add_to_tab(rows[i].nom_variete,  true, publics.get_list_variete());
              
               
            }

		    if(callback) {
                callback();
            }
           
        });
        
        return publics;
		  
    };
    
    publics.insertRotationFamille = function (ref_famille, favorable_tag) {
        
        var insert = "INSERT INTO rotation_famille (",
    		values = ") VALUES (";
		
        if (publics.id_plante()) { insert += "`ref_plante`, "; }
        insert += "`ref_famille`, ";
        insert += "`favorable`, ";

		insert = insert.replace(/, $/g, "");

        if (publics.id_plante()) { values += '"' + publics.id_plante() + '", '; }
        values += '"' + ref_famille + '", ';
        values += '"' + favorable_tag + '", '; 
		
		values = values.replace(/, $/g, ")");

		privates.connection.query(insert + values, function (err, infos) {
			if (err) {
				throw err;
			}
            
		});

		return publics;
    };
    
    publics.deleteRotationFamille = function (ref_famille) {
        var del = "DELETE FROM rotation_famille",
            where = "";

		if (publics.id_plante()) { where += ' && `ref_plante` = ' + publics.id_plante(); }
		where += ' && `ref_famille` = "' + ref_famille + '"';

        where = where.replace("&&", "WHERE");

        privates.connection.query(del + where, function (err, infos) {
            if (err) { 
                throw err;
            }
        });

        return publics;
    };
    
    publics.insertRotationPlante = function (ref_plante_condition, favorable_tag) {
        
        var insert = "INSERT INTO rotation_plante (",
    		values = ") VALUES (";
		
        if (publics.id_plante()) { insert += "`ref_plante`, "; }
        insert += "`ref_plante_condition`, ";
        insert += "`favorable`, ";

		insert = insert.replace(/, $/g, "");

        if (publics.id_plante()) { values += '"' + publics.id_plante() + '", '; }
        values += '"' + ref_plante_condition + '", ';
        values += '"' + favorable_tag + '", '; 
		
		values = values.replace(/, $/g, ")");

		privates.connection.query(insert + values, function (err, infos) {
			if (err) {
				throw err;
			}
            
		});

		return publics;
    };
    
    publics.deleteRotationPlante = function (ref_plante_condition) {
        var del = "DELETE FROM rotation_plante",
            where = "";

		if (publics.id_plante()) { where += ' && `ref_plante` = ' + publics.id_plante(); }
		where += ' && `ref_plante_condition` = "' + ref_plante_condition + '"';

        where = where.replace("&&", "WHERE");

        privates.connection.query(del + where, function (err, infos) {
            if (err) { 
                throw err;
            }
        });

        return publics;
    };
    
    publics.insertAssociation = function (ref_plante_asso, favorable_tag) {
        
        var insert = "INSERT INTO associations (",
    		values = ") VALUES (";
		
        if (publics.id_plante()) { insert += "`ref_plante`, "; }
        insert += "`ref_plante_asso`, ";
        insert += "`favorable`, ";

		insert = insert.replace(/, $/g, "");

        if (publics.id_plante()) { values += '"' + publics.id_plante() + '", '; }
        values += '"' + ref_plante_asso + '", ';
        values += '"' + favorable_tag + '", '; 
		
		values = values.replace(/, $/g, ")");

		privates.connection.query(insert + values, function (err, infos) {
			if (err) {
				throw err;
			}
            
		});

		return publics;
    };
    
    publics.deleteAssociation = function (ref_plante_asso) {
        var del = "DELETE FROM associations",
            where = "";

		if (publics.id_plante()) { where += ' && `ref_plante` = ' + publics.id_plante(); }
		where += ' && `ref_plante_asso` = "' + ref_plante_asso + '"';

        where = where.replace("&&", "WHERE");

        privates.connection.query(del + where, function (err, infos) {
            if (err) { 
                throw err;
            }
        });

        return publics;
    };

    publics.udpate_plante = function (callback) {
        var update = "UPDATE plantes SET",
            where = "";
    
        if (publics.nom_plante()) { update += '`nom` = "' + publics.nom_plante() + '", '; }
        if (publics.origine_geographique()) { update += '`origine_geographique` = "' + publics.origine_geographique() + '", '; }
        if (publics.anciennete_culture()) { update += '`anciennete_culture` = "' + publics.anciennete_culture() + '", '; }
        if (publics.cycle()) { update += '`cycle` = "' + publics.cycle() + '", '; }
        if (publics.description()) { update += '`description` = "' + publics.description() + '", '; }
        if (publics.id_groupe()) { update += '`ref_groupe` = "' + publics.id_groupe() + '", '; }
        if (publics.id_famille()) { update += '`ref_famille` = "' + publics.id_famille() + '", '; }

        update = update.replace(/, $/g, "");

        if (publics.id_plante()) { where += ' && `id_plante` = ' + publics.id_plante(); }

        where = where.replace("&&", "WHERE");

        privates.connection.query(update + where, function (err, infos) {
            if (err) { 
                throw err;
            }

            /*if (publics.id_plante()) { publics.id_plante(publics.id_plante()); }
            if (publics.nom_plante()) { publics.nom_plante(publics.nom_plante()); }
            if (user.firstname()) { publics.firstname(user.firstname()); }
            if (user.email()) { publics.email(user.email()); }
            if (user.birthdate()) { publics.birthdate(user.birthdate()); }
            if (typeof publics.gender() === "boolean") { publics.gender(user.gender()); }
            if (user.country()) { publics.country(user.country()); }
            if (user.town()) { publics.town(user.town()); }
            if (user.zipcode()) { publics.zipcode(user.zipcode()); }
            if (user.address()) { publics.address(user.address()); }*/

            if (callback) {
                callback(infos);
            }
        });

        return publics;
    };
    
}
 
Plante.prototype = Object.create(plante.prototype);
Plante.prototype.constructor = Plante;
 
module.exports = Plante;
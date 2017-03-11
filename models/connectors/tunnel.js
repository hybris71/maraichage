/* jslint esversion: 6 */
var tunnel = require('../objects/tunnel.js');
 
function Tunnel(connection) {
    var privates = {},
        publics = this;
    
    tunnel.call(publics);
 
    privates.connection = connection;
 
    if (!(publics instanceof Tunnel)) {
        return new Tunnel();
    }
 
    publics.setConnection = function (connection) {
        privates.connection = connection;
        return publics;
    };
    
    publics.create = function (callback) {
    	var insert = "INSERT INTO tunnels (",
    		values = ") VALUES (";

		
		if (publics.type_tunnel()) { insert += "`type_tunnel`, "; }
        if (publics.debut_tunnel()) { insert += "`debut_tunnel`, "; }
        if (publics.fin_tunnel()) { insert += "`fin_tunnel`, "; }
        if (publics.commentaire_tunnel()) { insert += "`commentaire_tunnel`, "; }
        if (publics.ref_semi()) { insert += "`ref_semi`, "; }

		insert = insert.replace(/, $/g, "");

		if (publics.type_tunnel()) { values += '"' + publics.type_tunnel() + '", '; }
        if (publics.debut_tunnel()) { values += '"' + publics.debut_tunnel() + '", '; }
        if (publics.fin_tunnel()) { values += '"' + publics.fin_tunnel() + '", '; }
        if (publics.commentaire_tunnel()) { values += '"' + publics.commentaire_tunnel() + '", '; }
        if (publics.ref_semi()) { values += '"' + publics.ref_semi() + '", '; }
		
		values = values.replace(/, $/g, ")");

		privates.connection.query(insert + values, function (err, infos) {
			if (err) {
				throw err;
			}
            publics.id_tunnel(infos.insertId);

			if (callback) {
				callback(infos);
			}
		});

		return publics;
    };
    
    publics.deleteTunnel = function () {
        var del = "DELETE FROM tunnels",
            where = "";

		if (publics.id_tunnel()) { where += ' && `id_tunnel` = ' + publics.id_tunnel(); }
        if (publics.ref_semi()) { where += ' && `ref_semi` = ' + publics.ref_semi(); }

        where = where.replace("&&", "WHERE");

        privates.connection.query(del + where, function (err, infos) {
            if (err) { 
                throw err;
            }
        });

        return publics;
    };
    
    publics.readAll = function (callback) {
        var select = `SELECT 
                            TUN.id_tunnel AS id_tunnel,
                            TUN.type_tunnel AS type_tunnel,
                            TUN.debut_tunnel AS debut_tunnel,
                            TUN.fin_tunnel AS fin_tunnel,
                            TUN.commentaire_tunnel AS commentaire_tunnel
                            FROM tunnels AS TUN`
                where = "";
    
        if (publics.ref_semi()) { where += ' && TUN.`ref_semi` = "' + publics.ref_semi() + '"'; }

        where = where.replace("&&", "WHERE");

	   privates.connection.query(select + where, function(err, rows, fields) {

                        var tunnels = [];
                        
                        if (err) console.log(err);
		
                        for (var i = 0; i < rows.length; i++) {
                                var new_tunnel = {
                                    id: rows[i].id_tunnel,
                                    type_tunnel: rows[i].type_tunnel,
                                    debut_tunnel: rows[i].debut_tunnel,
                                    fin_tunnel: rows[i].fin_tunnel,
                                    commentaire_tunnel: rows[i].commentaire_tunnel
                                };
                            tunnels.push(new_tunnel);
                        }

                    if(callback) {
                        callback(tunnels);
                    }
        });
        
        return publics;
    };

   
}

Tunnel.prototype = Object.create(tunnel.prototype);
Tunnel.prototype.constructor = Tunnel;

module.exports = Tunnel;
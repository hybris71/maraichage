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
    
    publics.create = function () {
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
		});

		return publics;
    };

   
}

Tunnel.prototype = Object.create(tunnel.prototype);
Tunnel.prototype.constructor = Tunnel;

module.exports = Tunnel;
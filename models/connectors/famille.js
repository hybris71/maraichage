/* jslint esversion: 6 */
var famille = require('../objects/famille.js');
 
function Famille(connection) {
    var privates = {},
        publics = this;
    
    famille.call(publics);
 
    privates.connection = connection;
 
    if (!(publics instanceof Famille)) {
        return new Famille();
    }
 
    publics.setConnection = function (connection) {
        privates.connection = connection;
        return publics;
    };

    publics.read = function (callback) {
        var select = `SELECT
                    id_famille,
                    nom_famille
                FROM familles;`
                
        privates.connection.query(select, function(err, rows, fields) {
                        var familles = [];
                                

                        if (err) { 
                            console.log(err); 
                        }

                        for (var i = 0; i < rows.length; i++) {
                                var new_famille = { 
                                    nom: rows[i].nom_famille,
                                    id: rows[i].id_famille
                                };
                            familles.push(new_famille);
                        } 
            if (callback) {
                    callback(familles);
            }
        });
        
        return publics;
    };
}

Famille.prototype = Object.create(famille.prototype);
Famille.prototype.constructor = Famille;

module.exports = Famille;
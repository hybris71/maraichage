/* jslint esversion: 6 */
var groupe = require('../objects/groupe.js');
 
function Groupe(connection) {
    var privates = {},
        publics = this;
    
    groupe.call(publics);
 
    privates.connection = connection;
 
    if (!(publics instanceof Groupe)) {
        return new Groupe();
    }
 
    publics.setConnection = function (connection) {
        privates.connection = connection;
        return publics;
    };

    publics.read = function (callback) {
        var select = `SELECT
                    id_groupe,
                    nom_groupe
                FROM groupes;`
                
        privates.connection.query(select, function(err, rows, fields) {
                        var groupes = [];

                        if (err) { 
                            console.log(err); 
                        }
            
                        for (var i = 0; i < rows.length; i++) {
                                var new_groupe = { 
                                    nom: rows[i].nom_groupe,
                                    id: rows[i].id_groupe
                                };
                            groupes.push(new_groupe);
                        } 

                        /*for (var i = 0; i < rows.length; i++) {
                                groupe = new Groupe();
                                groupe.id_groupe(rows[i].id_groupe);
                                groupe.nom_groupe(rows[i].nom_groupe);
                                groupes.push(groupe);
                        } */
            if (callback) {
                    callback(groupes);
            }
        });
        
        return publics;
    };
}

Groupe.prototype = Object.create(groupe.prototype);
Groupe.prototype.constructor = Groupe;

module.exports = Groupe;
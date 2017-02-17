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
	
    publics.readAll = function (callback) {
        var select = `SELECT
                        VR.id_variete AS id_variete,
                        VR.nom_variete AS nom_variete,
                        VR.description AS description,
                        VR.ref_plante AS ref_plante,
                        SMI.debut_semi AS debut_semi,
                        SMI.fin_semi AS fin_semi,
                        SMI.profondeur AS semi_profondeur,
                        SMI.distance_entre_rang AS distance_entre_rang,
                        SMI.distance_sur_rang AS distance_sur_rang,
                        SMI.temps_levee_jour AS temps_levee_jour,
                        SMI.temperature_germi AS temperature_germination,
                        T_SMI.type_semi_description AS type_semi_description,
                        RP.debut_repi AS debut_repi,
                        RP.fin_repi AS fin_repi,
                        RP.repi_commentaire AS repi_commentaire,
                        RC.debut_recolte AS debut_recolte,
                        RC.fin_recolte AS fin_recolte,
                        RC.deroulement AS recolte_deroulement,
                        RC.frequence_com AS recolte_commentaire,
                        RC.frequence_int AS recolte_frequence,
                        TUN.tunnel_debut AS tunnel_debut,
                        TUN.tunnel_fin AS tunnel_fin,
                        TUN.type AS tunnel_type,
                        STK.aeration AS stockage_aeration,
                        STK.duree_conservation AS stockage_duree_conservation,
                        STK.hygrometrie AS stockage_hygrometrie,
                        STK.local AS stockage_local,
                        STK.temperature AS stockage_temperature,
                        GRN.duree_vie AS graine_duree_vie,
                        GRN.pmg AS graine_pmg,
                        GRN.taux_germi AS graine_taux_germination,
                        GRN.prix AS graine_prix
                        FROM varietes AS VR
                        INNER JOIN semis SMI ON SMI.ref_variete = VR.id_variete
                        INNER JOIN type_semis T_SMI ON SMI.ref_type_semis = T_SMI.id_type_semi
                        LEFT JOIN tunnels TUN ON TUN.ref_variete = VR.id_variete
                        LEFT JOIN stockage STK ON STK.ref_variete = VR.id_variete
                        LEFT JOIN repiquages RP ON RP.ref_semi = SMI.id_semi
                        LEFT JOIN recoltes RC ON RC.ref_semi = SMI.id_semi
                        LEFT JOIN graines GRN ON GRN.ref_variete = VR.id_variete`
                where = "",
                addWhere = " WHERE ";

	if (publics.nom_variete()) { where += addWhere + "`nom_variete` = '" + publics.nom_variete().replace(/'/g, "''") + "'"; addWhere = ' && '; }

	privates.connection.query(select + where, function(err, rows, fields) {

                        if (err) console.log(err);
		
                        if (rows[0]) {
                                    publics.id_variete(rows[0].id_variete);
                                    publics.nom_variete(rows[0].nom_variete);
                                    publics.description(rows[0].description);
                                    publics.ref_plante(rows[0].ref_plante);
                                    publics.debut_semi(rows[0].debut_semi);
                                    publics.fin_semi(rows[0].fin_semi);
                                    publics.semi_profondeur(rows[0].semi_profondeur);
                                    publics.distance_entre_rang(rows[0].distance_entre_rang);
                                    publics.distance_sur_rang(rows[0].distance_sur_rang);
                                    publics.temps_levee_jour(rows[0].temps_levee_jour);
                                    publics.temperature_germination(rows[0].temperature_germination);
                                    publics.type_semi_description(rows[0].type_semi_description);
                                    publics.debut_repi(rows[0].debut_repi);
                                    publics.fin_repi(rows[0].fin_repi);
                                    publics.repi_commentaire(rows[0].repi_commentaire);
                                    publics.debut_recolte(rows[0].debut_recolte);
                                    publics.fin_recolte(rows[0].fin_recolte);
                                    publics.recolte_deroulement(rows[0].recolte_deroulement);
                                    publics.recolte_commentaire(rows[0].recolte_commentaire);
                                    publics.recolte_frequence(rows[0].recolte_frequence);
                                    publics.tunnel_debut(rows[0].tunnel_debut);
                                    publics.tunnel_fin(rows[0].tunnel_fin);
                                    publics.tunnel_type(rows[0].tunnel_type);
                                    publics.stockage_aeration(rows[0].stockage_aeration);
                                    publics.stockage_duree_conservation(rows[0].stockage_duree_conservation);
                                    publics.stockage_hygrometrie(rows[0].stockage_hygrometrie);
                                    publics.stockage_local(rows[0].stockage_local);
                                    publics.stockage_temperature(rows[0].stockage_temperature);
                                    publics.graine_duree_vie(rows[0].graine_duree_vie);
                                    publics.graine_pmg(rows[0].graine_pmg);
                                    publics.graine_taux_germination(rows[0].graine_taux_germination);
                                    publics.graine_prix(rows[0].graine_prix);
                        
                        }

                    if(callback) {
                        callback();
                    }
        });
        
        return publics;
    };

}; 

Variete.prototype = Object.create(variete.prototype);
Variete.prototype.constructor = Variete;

module.exports = Variete;

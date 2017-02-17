(function (expose, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory;
    } else {
        expose.Variete = factory;
    }
}(this, function Variete() {
    var privates = {},
        publics = this;

    if (!(publics instanceof Variete)) {
        return new Variete();
    }
	   
    publics.id_variete = function (id_variete) {
        if (typeof id_variete === 'undefined') {
            return privates.id_variete;
        } else {
            privates.id_variete = id_variete;
            return publics;
        }
    };
    
    publics.nom_variete = function (nom_variete) {
        if (typeof nom_variete === 'undefined') {
            return privates.nom_variete;
        } else {
            privates.nom_variete = nom_variete;
            return publics;
        }
    };
    
    publics.description = function (description) {
        if (typeof description === 'undefined') {
            return privates.description;
        } else {
            privates.description = description;
            return publics;
        }
    };
    
    publics.ref_plante = function (ref_plante) {
        if (typeof ref_plante === 'undefined') {
            return privates.ref_plante;
        } else {
            privates.ref_plante = ref_plante;
            return publics;
        }
    };
    
    publics.type_semi_description = function (type_semi_description) {
        if (typeof type_semi_description === 'undefined') {
            return privates.type_semi_description;
        } else {
            privates.type_semi_description = type_semi_description;
            return publics;
        }
    };
    
    publics.debut_semi = function (debut_semi) {
        if (typeof debut_semi === 'undefined') {
            return privates.debut_semi;
        } else {
            privates.debut_semi = debut_semi;
            return publics;
        }
    };
    
    publics.fin_semi = function (fin_semi) {
        if (typeof fin_semi === 'undefined') {
            return privates.fin_semi;
        } else {
            privates.fin_semi = fin_semi;
            return publics;
        }
    };
    
    publics.debut_repi = function (debut_repi) {
        if (typeof debut_repi === 'undefined') {
            return privates.debut_repi;
        } else {
            privates.debut_repi = debut_repi;
            return publics;
        }
    };
    
    publics.fin_repi = function (fin_repi) {
        if (typeof fin_repi === 'undefined') {
            return privates.fin_repi;
        } else {
            privates.fin_repi = fin_repi;
            return publics;
        }
    };
    
    publics.repi_commentaire = function (repi_commentaire) {
        if (typeof repi_commentaire === 'undefined') {
            return privates.repi_commentaire;
        } else {
            privates.repi_commentaire = repi_commentaire;
            return publics;
        }
    };
    
    publics.semi_profondeur = function (semi_profondeur) {
        if (typeof semi_profondeur === 'undefined') {
            return privates.semi_profondeur;
        } else {
            privates.semi_profondeur = semi_profondeur;
            return publics;
        }
    };
    
    publics.temperature_germination = function (temperature_germination) {
        if (typeof temperature_germination === 'undefined') {
            return privates.temperature_germination;
        } else {
            privates.temperature_germination = temperature_germination;
            return publics;
        }
    };
    
    publics.temps_levee_jour = function (temps_levee_jour) {
        if (typeof temps_levee_jour === 'undefined') {
            return privates.temps_levee_jour;
        } else {
            privates.temps_levee_jour = temps_levee_jour;
            return publics;
        }
    };

    publics.distance_entre_rang = function (distance_entre_rang) {
        if (typeof distance_entre_rang === 'undefined') {
            return privates.distance_entre_rang;
        } else {
            privates.distance_entre_rang = distance_entre_rang;
            return publics;
        }
    };

    publics.distance_sur_rang = function (distance_sur_rang) {
        if (typeof distance_sur_rang === 'undefined') {
            return privates.distance_sur_rang;
        } else {
            privates.distance_sur_rang = distance_sur_rang;
            return publics;
        }
    };
    
    publics.debut_recolte = function (debut_recolte) {
        if (typeof debut_recolte === 'undefined') {
            return privates.debut_recolte;
        } else {
            privates.debut_recolte = debut_recolte;
            return publics;
        }
    };
    
    publics.fin_recolte = function (fin_recolte) {
        if (typeof fin_recolte === 'undefined') {
            return privates.fin_recolte;
        } else {
            privates.fin_recolte = fin_recolte;
            return publics;
        }
    };

    publics.recolte_deroulement = function (recolte_deroulement) {
        if (typeof recolte_deroulement === 'undefined') {
            return privates.recolte_deroulement;
        } else {
            privates.recolte_deroulement = recolte_deroulement;
            return publics;
        }
    };

    publics.recolte_frequence = function (recolte_frequence) {
        if (typeof recolte_frequence === 'undefined') {
            return privates.recolte_frequence;
        } else {
            privates.recolte_frequence = recolte_frequence;
            return publics;
        }
    };

    publics.recolte_commentaire = function (recolte_commentaire) {
        if (typeof recolte_commentaire === 'undefined') {
            return privates.recolte_commentaire;
        } else {
            privates.recolte_commentaire = recolte_commentaire;
            return publics;
        }
    };
    
    publics.tunnel_debut = function (tunnel_debut) {
        if (typeof tunnel_debut === 'undefined') {
            return privates.tunnel_debut;
        } else {
            privates.tunnel_debut = tunnel_debut;
            return publics;
        }
    };
    
    publics.tunnel_fin = function (tunnel_fin) {
        if (typeof tunnel_fin === 'undefined') {
            return privates.tunnel_fin;
        } else {
            privates.tunnel_fin = tunnel_fin;
            return publics;
        }
    };
    
    publics.tunnel_type = function (tunnel_type) {
        if (typeof tunnel_type === 'undefined') {
            return privates.tunnel_type;
        } else {
            privates.tunnel_type = tunnel_type;
            return publics;
        }
    };
    
    publics.stockage_aeration = function (stockage_aeration) {
        if (typeof stockage_aeration === 'undefined') {
            return privates.stockage_aeration;
        } else {
            privates.stockage_aeration = stockage_aeration;
            return publics;
        }
    };
    
    publics.stockage_duree_conservation = function (stockage_duree_conservation) {
        if (typeof stockage_duree_conservation === 'undefined') {
            return privates.stockage_duree_conservation;
        } else {
            privates.stockage_duree_conservation = stockage_duree_conservation;
            return publics;
        }
    };
    
    publics.stockage_hygrometrie = function (stockage_hygrometrie) {
        if (typeof stockage_hygrometrie === 'undefined') {
            return privates.stockage_hygrometrie;
        } else {
            privates.stockage_hygrometrie = stockage_hygrometrie;
            return publics;
        }
    };
    
    publics.stockage_local = function (stockage_local) {
        if (typeof stockage_local === 'undefined') {
            return privates.stockage_local;
        } else {
            privates.stockage_local = stockage_local;
            return publics;
        }
    };
    
    publics.stockage_temperature = function (stockage_temperature) {
        if (typeof stockage_temperature === 'undefined') {
            return privates.stockage_temperature;
        } else {
            privates.stockage_temperature = stockage_temperature;
            return publics;
        }
    };
    
    publics.graine_duree_vie = function (graine_duree_vie) {
        if (typeof graine_duree_vie === 'undefined') {
            return privates.graine_duree_vie;
        } else {
            privates.graine_duree_vie = graine_duree_vie;
            return publics;
        }
    };
    
    publics.graine_pmg = function (graine_pmg) {
        if (typeof graine_pmg === 'undefined') {
            return privates.graine_pmg;
        } else {
            privates.graine_pmg = graine_pmg;
            return publics;
        }
    };
    
    publics.graine_taux_germination = function (graine_taux_germination) {
        if (typeof graine_taux_germination === 'undefined') {
            return privates.graine_taux_germination;
        } else {
            privates.graine_taux_germination = graine_taux_germination;
            return publics;
        }
    };
    
    publics.graine_prix = function (graine_prix) {
        if (typeof graine_prix === 'undefined') {
            return privates.graine_prix;
        } else {
            privates.graine_prix = graine_prix;
            return publics;
        }
    };

}));
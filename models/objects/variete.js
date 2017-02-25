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
    
    publics.graine_prix = function (graine_prix) {
        if (typeof graine_prix === 'undefined') {
            return privates.graine_prix;
        } else {
            privates.graine_prix = graine_prix;
            return publics;
        }
    };

}));
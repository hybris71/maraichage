(function (expose, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory;
    } else {
        expose.Semi = factory;
    }
}(this, function Semi() {
    var privates = {},
        publics = this;

    if (!(publics instanceof Semi)) {
        return new Semi();
    }
	
    publics.id_semi = function (id_semi) {
        if (typeof id_semi === 'undefined') {
            return privates.id_semi;
        } else {
            privates.id_semi = id_semi;
            return publics;
        }
    };
    
    publics.nom_semi = function (nom_semi) {
        if (typeof nom_semi === 'undefined') {
            return privates.nom_semi;
        } else {
            privates.nom_semi = nom_semi;
            return publics;
        }
    };
    
    publics.type_semi = function (type_semi) {
        if (typeof type_semi === 'undefined') {
            return privates.type_semi;
        } else {
            privates.type_semi = type_semi;
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
    
    publics.ref_variete = function (ref_variete) {
        if (typeof ref_variete === 'undefined') {
            return privates.ref_variete;
        } else {
            privates.ref_variete = ref_variete;
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
    
    publics.profondeur = function (profondeur) {
        if (typeof profondeur === 'undefined') {
            return privates.profondeur;
        } else {
            privates.profondeur = profondeur;
            return publics;
        }
    };
    
    publics.temperature_germi = function (temperature_germi) {
        if (typeof temperature_germi === 'undefined') {
            return privates.temperature_germi;
        } else {
            privates.temperature_germi = temperature_germi;
            return publics;
        }
    };
    
    publics.taux_germi = function (taux_germi) {
        if (typeof taux_germi === 'undefined') {
            return privates.taux_germi;
        } else {
            privates.taux_germi = taux_germi;
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
    
    publics.rendement = function (rendement) {
        if (typeof rendement === 'undefined') {
            return privates.rendement;
        } else {
            privates.rendement = rendement;
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
    
    publics.id_repiquage = function (id_repiquage) {
        if (typeof id_repiquage === 'undefined') {
            return privates.id_repiquage;
        } else {
            privates.id_repiquage = id_repiquage;
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
    
}));
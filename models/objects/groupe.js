(function (expose, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory;
    } else {
        expose.Groupe = factory;
    }
}(this, function Groupe() {
    var privates = {},
        publics = this;

    if (!(publics instanceof Groupe)) {
        return new Groupe();
    }
	
    publics.id_groupe = function (id_groupe) {
        if (typeof id_groupe === 'undefined') {
            return privates.id_groupe;
        } else {
            privates.id_groupe = id_groupe;
            return publics;
        }
    };
    
    publics.nom_groupe = function (nom_groupe) {
        if (typeof nom_groupe === 'undefined') {
            return privates.nom_groupe;
        } else {
            privates.nom_groupe = nom_groupe;
            return publics;
        }
    };
}));

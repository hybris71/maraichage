(function (expose, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory;
    } else {
        expose.Famille = factory;
    }
}(this, function Famille() {
    var privates = {},
        publics = this;

    if (!(publics instanceof Famille)) {
        return new Famille();
    }
	
    publics.id_famille = function (id_famille) {
        if (typeof id_famille === 'undefined') {
            return privates.id_famille;
        } else {
            privates.id_famille = id_famille;
            return publics;
        }
    };
    
    publics.nom_famille = function (nom_famille) {
        if (typeof nom_famille === 'undefined') {
            return privates.nom_famille;
        } else {
            privates.nom_famille = nom_famille;
            return publics;
        }
    };
}));

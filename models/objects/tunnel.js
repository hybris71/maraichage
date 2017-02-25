(function (expose, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory;
    } else {
        expose.Tunnel = factory;
    }
}(this, function Tunnel() {
    var privates = {},
        publics = this;

    if (!(publics instanceof Tunnel)) {
        return new Tunnel();
    }
	
    publics.id_tunnel = function (id_tunnel) {
        if (typeof id_tunnel === 'undefined') {
            return privates.id_tunnel;
        } else {
            privates.id_tunnel = id_tunnel;
            return publics;
        }
    };
    
    publics.type_tunnel = function (type_tunnel) {
        if (typeof type_tunnel === 'undefined') {
            return privates.type_tunnel;
        } else {
            privates.type_tunnel = type_tunnel;
            return publics;
        }
    };
    
    publics.debut_tunnel = function (debut_tunnel) {
        if (typeof debut_tunnel === 'undefined') {
            return privates.debut_tunnel;
        } else {
            privates.debut_tunnel = debut_tunnel;
            return publics;
        }
    };
    
    publics.fin_tunnel = function (fin_tunnel) {
        if (typeof fin_tunnel === 'undefined') {
            return privates.fin_tunnel;
        } else {
            privates.fin_tunnel = fin_tunnel;
            return publics;
        }
    };
    
    publics.commentaire_tunnel = function (commentaire_tunnel) {
        if (typeof commentaire_tunnel === 'undefined') {
            return privates.commentaire_tunnel;
        } else {
            privates.commentaire_tunnel = commentaire_tunnel;
            return publics;
        }
    };
    
    publics.ref_semi = function (ref_semi) {
        if (typeof ref_semi === 'undefined') {
            return privates.ref_semi;
        } else {
            privates.ref_semi = ref_semi;
            return publics;
        }
    };
    
}));
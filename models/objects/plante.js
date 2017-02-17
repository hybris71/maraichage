(function (expose, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory;
    } else {
        expose.Plante = factory;
    }
}(this, function Plante() {
    var privates = {},
        publics = this;
 
    if (!(publics instanceof Plante)) {
        return new Plante();
    }
 
    publics.id_plante = function (id_plante) {
        if (typeof id_plante === 'undefined') {
            return privates.id_plante;
        } else {
            privates.id_plante = id_plante;        
            return publics;
        }
    };
 
    publics.nom_plante = function (nom_plante) {
        if (typeof nom_plante === 'undefined') {
            return privates.nom_plante;
        } else {
            privates.nom_plante = nom_plante;
            return publics;
        }
    };
    
/*    Object.defineProperty(publics, "nomPlante", { 
        get: function () { 
            return privates.nom_plante;
        },
        set: function (nomPlante) {
            privates.nom_plante = nom_plante;
            return publics;
        }
    });*/
 
    publics.origine_geographique = function (origine_geographique) {
        if (typeof origine_geographique === 'undefined') {
            return privates.origine_geographique;
        } else {
            privates.origine_geographique = origine_geographique;
            return publics;
        }
    };
 
    publics.anciennete_culture = function (anciennete_culture) {
        if (typeof anciennete_culture === 'undefined') {
            return privates.anciennete_culture;
        } else {
            privates.anciennete_culture = anciennete_culture;
            return publics;
        }
    };
 
    publics.cycle = function (cycle) {
        if (typeof cycle === 'undefined') {
            return privates.cycle;
        } else {
            privates.cycle = cycle;
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
 
    publics.nom_groupe = function (nom_groupe) {
        if (typeof nom_groupe === 'undefined') {
            return privates.nom_groupe;
        } else {
            privates.nom_groupe = nom_groupe;
            return publics;
        }
    };
    
    publics.id_groupe = function (id_groupe) {
        if (typeof id_groupe === 'undefined') {
            return privates.id_groupe;
        } else {
            privates.id_groupe = id_groupe;
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
    
    publics.id_famille = function (id_famille) {
        if (typeof id_famille === 'undefined') {
            return privates.id_famille;
        } else {
            privates.id_famille = id_famille;
            return publics;
        }
    };
    
    publics.engrais_vert = function (engrais_vert) {
        if (typeof engrais_vert === 'undefined') {
            return privates.engrais_vert;
        } else {
            privates.engrais_vert = engrais_vert;
            return publics;
        }
    };
    
    publics.compagne = function (compagne) {
        if (typeof compagne === 'undefined') {
            return privates.compagne;
        } else {
            privates.compagne = compagne;
            return publics;
        }
    };
    
    publics.ref_famille = function (ref_famille) {
        if (typeof ref_famille === 'undefined') {
            return privates.ref_famille;
        } else {
            privates.ref_famille = ref_famille;
            return publics;
        }
    };
    
    publics.ref_groupe = function (ref_groupe) {
        if (typeof ref_groupe === 'undefined') {
            return privates.ref_groupe;
        } else {
            privates.ref_groupe = ref_groupe;
            return publics;
        }
    };
    
    publics.climat_favorable = function (climat_favorable) {
        if (typeof climat_favorable === 'undefined') {
            return privates.climat_favorable;
        } else {
            privates.climat_favorable = climat_favorable;
            return publics;
        }
    };
    
    publics.climat_defavorable = function (climat_defavorable) {
        if (typeof climat_defavorable === 'undefined') {
            return privates.climat_defavorable;
        } else {
            privates.climat_defavorable = climat_defavorable;
            return publics;
        }
    };
    
    publics.commentaire_climat = function (commentaire_climat) {
        if (typeof commentaire_climat === 'undefined') {
            return privates.commentaire_climat;
        } else {
            privates.commentaire_climat = commentaire_climat;
            return publics;
        }
    };
    
    publics.temp_gel = function (temp_gel) {
        if (typeof temp_gel === 'undefined') {
            return privates.temp_gel;
        } else {
            privates.temp_gel = temp_gel;
            return publics;
        }
    };
    
    publics.sol_favorable = function (sol_favorable) {
        if (typeof sol_favorable === 'undefined') {
            return privates.sol_favorable;
        } else {
            privates.sol_favorable = sol_favorable;
            return publics;
        }
    };
    
    publics.sol_defavorable = function (sol_defavorable) {
        if (typeof sol_defavorable === 'undefined') {
            return privates.sol_defavorable;
        } else {
            privates.sol_defavorable = sol_defavorable;
            return publics;
        }
    };
    
    publics.commentaire_sol = function (commentaire_sol) {
        if (typeof commentaire_sol === 'undefined') {
            return privates.commentaire_sol;
        } else {
            privates.commentaire_sol = commentaire_sol;
            return publics;
        }
    };
    
    publics.fertilisation_favorable = function (fertilisation_favorable) {
        if (typeof fertilisation_favorable === 'undefined') {
            return privates.fertilisation_favorable;
        } else {
            privates.fertilisation_favorable = fertilisation_favorable;
            return publics;
        }
    };
    
    publics.fertilisation_defavorable = function (fertilisation_defavorable) {
        if (typeof fertilisation_defavorable === 'undefined') {
            return privates.fertilisation_defavorable;
        } else {
            privates.fertilisation_defavorable = fertilisation_defavorable;
            return publics;
        }
    };
    
    publics.commentaire_fertilisation = function (commentaire_fertilisation) {
        if (typeof commentaire_fertilisation === 'undefined') {
            return privates.commentaire_fertilisation;
        } else {
            privates.commentaire_fertilisation = commentaire_fertilisation;
            return publics;
        }
    };
    
    publics.fumier_frais = function (fumier_frais) {
        if (typeof fumier_frais === 'undefined') {
            return privates.fumier_frais;
        } else {
            privates.fumier_frais = fumier_frais;
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
    
    publics.azote = function (azote) {
        if (typeof azote === 'undefined') {
            return privates.azote;
        } else {
            privates.azote = azote;
            return publics;
        }
    };
    
    publics.phosphore = function (phosphore) {
        if (typeof phosphore === 'undefined') {
            return privates.phosphore;
        } else {
            privates.phosphore = phosphore;
            return publics;
        }
    };
    
    publics.potassium = function (potassium) {
        if (typeof potassium === 'undefined') {
            return privates.potassium;
        } else {
            privates.potassium = potassium;
            return publics;
        }
    };
    
    publics.calcium = function (calcium) {
        if (typeof calcium === 'undefined') {
            return privates.calcium;
        } else {
            privates.calcium = calcium;
            return publics;
        }
    };
    
    publics.magnesium = function (magnesium) {
        if (typeof magnesium === 'undefined') {
            return privates.magnesium;
        } else {
            privates.magnesium = magnesium;
            return publics;
        }
    };
    
    publics.rotation_duree_mini = function (rotation_duree_mini) {
        if (typeof rotation_duree_mini === 'undefined') {
            return privates.rotation_duree_mini;
        } else {
            privates.rotation_duree_mini = rotation_duree_mini;
            return publics;
        }
    };

    publics.commentaire_duree = function (commentaire_duree) {
        if (typeof commentaire_duree === 'undefined') {
            return privates.commentaire_duree;
        } else {
            privates.commentaire_duree = commentaire_duree;
            return publics;
        }
    };

    publics.rotation_familles = function (rotation_familles) {
        if (typeof rotation_familles === 'undefined') {
            return privates.rotation_familles;
        } else {
            privates.rotation_familles = rotation_familles;
            return publics;
        }
    };
    
    publics.rotation_plantes = function (rotation_plantes) {
        if (typeof rotation_plantes === 'undefined') {
            return privates.rotation_plantes;
        } else {
            privates.rotation_plantes = rotation_plantes;
            return publics;
        }
    };
    
    privates.plantes_associations_favorables = [];
    privates.plantes_associations_defavorables = [];
    privates.rotation_familles_favorables = [];
    privates.rotation_familles_defavorables = [];
    privates.rotation_plantes_favorables = [];
    privates.rotation_plantes_defavorables = [];
    privates.list_variete = [];
    
    publics.get_plantes_associations_favorables = function (get_plantes_associations_favorables) {
        
        return privates.plantes_associations_favorables;
        
    };
    
    publics.get_plantes_associations_defavorables = function (get_plantes_associations_defavorables) {
        
        return privates.plantes_associations_defavorables;
        
    };
    
    publics.get_rotation_familles_favorables = function (get_rotation_familles_favorables) {
        
        return privates.rotation_familles_favorables;
        
    };
    
    publics.get_rotation_familles_defavorables = function (get_rotation_familles_defavorables) {
        
        return privates.rotation_familles_defavorables;
        
    };
    
    publics.get_rotation_plantes_favorables = function (get_rotation_plantes_favorables) {
        
        return privates.rotation_plantes_favorables;
        
    };
    
    publics.get_rotation_plantes_defavorables = function (get_rotation_plantes_defavorables) {
        
        return privates.rotation_plantes_defavorables;
        
    };
    
    publics.get_list_variete = function (get_list_variete) {
        
        return privates.list_variete;
        
    };
    
    publics.add = function (new_row, tab_to_modify) {
     
        var found = tab_to_modify.filter(function (item, i, arr) {
                       
            return item.nom == new_row.nom;
                       
        });
                   
        if (!found.length) {
                 
            tab_to_modify.push(new_row);
                        
        }                                     
              
    };	
    
    publics.add_to_tab = function (new_row, add, tab_to_modify) {
     
        function exist(value, arr) {
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] === value) {
					return true;
				}
			}

			return false;
		}

		if (!exist(new_row, tab_to_modify)) {
            
			if (typeof new_row === "string" && add) {
                
				tab_to_modify.push(new_row);
                
			} else if (typeof new_row === "string") {
                
				tab_to_modify = [new_row];
                
			} else if (new_row instanceof Array && add) {
                
				tab_to_modify = tab_to_modify.concat(new_row);
                
			}  else if (new_row instanceof Array) {
                
				tab_to_modify = new_row;
                
			}
		}
        
    };	
    
}));

(function () {
    var vueAddVariete = function (view, data, callback) {
        
        return new Vue({
            template: view,
            data: data,
            methods: {
                addRepiquage: function () {
              
                    this.$validator.validateAll('form-4').then(() => {
                            
                        this.repiquages.push({
                            "debut_repi": this.nRepiquageDebut,
                            "fin_repi": this.nRepiquageFin,
                            "repi_commentaire": this.nRepiquageCom
                        });
                        this.nRepiquageDebut = "1";
                        this.nRepiquageFin = "1";
                        this.nRepiquageCom = "Commentaire";
                    });    
                },
                removeRepiquage: function (index) {
                    this.repiquages.splice(index, 1);
                },
                addTunnel: function () {
              
                    this.$validator.validateAll('form-3').then(() => {
                            
                        this.tunnels.push({
                            "type_tunnel": this.nType,
                            "debut_tunnel": this.nTunnelDebut,
                            "fin_tunnel": this.nTunnelFin,
                            "commentaire_tunnel": this.nTunnelCom
                        });
                        this.nType = "Type";
                        this.nTunnelDebut = "1";
                        this.nTunnelFin = "1";
                        this.nTunnelCom = "Commentaire";
                    });    
                },
                removeTunnel: function (index) {
                    this.tunnels.splice(index, 1);
                },
                addSemi: function () {
              
                    this.$validator.validateAll('form-2').then(() => {
                            
                        this.semis.push({
                            "titre": this.newSemiTitre, 
                            "modalite": this.index_modalite,
                            "modalite_description" : this.listModalites[this.index_modalite].description,
                            "debut_semi": this.nSemiDebut,
                            "fin_semi": this.nSemiFin,
                            "profondeur": this.nProfondeur,
                            "temperature_germi": this.nTemperatureGermi,
                            "taux_germi": this.nTauxGermi,
                            "temps_levee_jour": this.nTempsLevee,
                            "distance_entre_rang": this.nDistanceEntreRangs,
                            "distance_sur_rang": this.nDistanceSurRang,
                            "tunnels": this.tunnels,
                            "repiquages": this.repiquages
                        });
                        this.newSemiTitre = "Titre";
                        this.newSemiModalite = "";
                        this.nSemiDebut = "1";
                        this.nSemiFin = "1";
                        this.nProfondeur = "1";
                        this.nTemperatureGermi = "1";
                        this.nTauxGermi = "100";
                        this.nTempsLevee = "1";
                        this.nDistanceEntreRangs = "1";
                        this.nDistanceSurRang = "1";
                        this.tunnels = [];
                        this.repiquages = [];
                        
                    });    
                },
                removeSemi: function (index) {
                    this.semis.splice(index, 1);
                },
                validateBeforeSubmit(scope) {
                
                    this.$validator.validateAll('form-1').then(() => {
                        
                        if (this.semis.length) {
                            // success stuff.
                            this.submitForm();
                        }
                    });
                },
                submitForm(){
                    
                    this.formSubmitted = true;
                    console.log("submit form");
                    if (callback) {
                        callback(data);
                    }
                    
                },
                addNewVariete(){
                    
                    NA.socket.emit("get-form-variete", { id_plante: this.id_plante, urlPath: this.urlPath });
                    console.log("add new variete");
                    this.formSubmitted = false;
                    
                }
            }
        });
    };
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = vueAddVariete;
    } else {
        this.vueAddVariete = vueAddVariete;
    }
}).call(this);
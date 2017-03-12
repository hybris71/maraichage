(function () {
    var vueVariete = function (view, data, callback) {
        
        return new Vue({
            template: view,
            data: data,
            methods: {
                editVariete: function () {   
                    if (this.edit == true) {
                        this.edit = false;
                        NA.socket.emit("get-variete", data);
                    } else {
                        this.edit = true;
                    }
                },
                validateBeforeSave(e) {
                
                    this.$validator.validateAll('form-1').then(() => {
                        // success stuff.
                        this.saveVariete();
                       
                    });
                },
                saveVariete: function () {
                    this.action = "saveVariete";
                    this.edit = false;
                    
                    if (callback) {
                        callback(data);
                    }
                },
                displaySemi: function (index) {
                    this.displayCurrentSemi = true;
                    this.editCurrentSemi = false;
                    this.addFieldItineraire = false;
                    this.action = "displaySemi";
                    this.indexSemi = index;
                    
                    if (callback) {
                        callback(data);
                    }
                },
                editSemi: function () {
                    if (this.editCurrentSemi == true) {
                        this.editCurrentSemi = false;
                        NA.socket.emit("display-semi", data);
                    } else {
                        this.editCurrentSemi = true;
                    }
                },
                validateBeforeSaveSemi(e) {
                
                    this.$validator.validateAll('form-2').then(() => {
                        // success stuff.
                        this.saveSemi();
                       
                    });
                },
                saveSemi: function () {
                    this.action = "saveSemi";
                    this.editCurrentSemi = false;
                    
                    this.currentSemi.type_semi = this.listModalites[this.index_modalite].description;
                    
                    var id_semi_temp = this.currentSemi.id_semi;
                    var nom_semi_temp = this.currentSemi.nom_semi;
                    
                    this.semis.forEach(function(semi) {
                        if (semi.id === id_semi_temp) {
                            semi.nom = nom_semi_temp;
                        }
                    });
                    
                    if (callback) {
                        callback(data);
                    }
                },
                addFieldRepiquageButton: function () {     
                    this.addFieldRepiquage = true;
                    
                },
                removeFieldRepiquageButton: function () {     
                    this.addFieldRepiquage = false;
                    
                },
                addRepiquage: function () {
                    
                    var self = this;
              
                    this.$validator.validateAll('form-4').then(() => {
                        
                        NA.socket.once("add-repiquage", function (data) {
                    
                            self.nRepiquageId = data.id_repiquage;
                            console.log("socket on add repiquage : " + self.nRepiquageId);
                            
                            self.repiquages.push({
                                "id": self.nRepiquageId,
                                "debut_repi": self.nRepiquageDebut,
                                "fin_repi": self.nRepiquageFin,
                                "repi_commentaire": self.nRepiquageCom
                            });
                            
                            self.nRepiquageId = undefined;
                            self.nRepiquageDebut = '1';
                            self.nRepiquageFin = '1';
                            self.nRepiquageCom = 'Commentaire';
                
                        });
                        
                        NA.socket.emit("add-repiquage", {
                            "id_semi": this.currentSemi.id_semi,
                            "debut_repi": this.nRepiquageDebut,
                            "fin_repi": this.nRepiquageFin,
                            "repi_commentaire": this.nRepiquageCom                            
                        });
                        
                    });  
                },
                removeRepiquage: function (index) {
                    
                    NA.socket.emit("remove-repiquage", { 
                        "id_repiquage": this.repiquages[index].id
                    });
                    
                    this.repiquages.splice(index, 1);
                },
                addFieldTunnelButton: function () {     
                    this.addFieldTunnel = true;
                    
                },
                removeFieldTunnelButton: function () {     
                    this.addFieldTunnel = false;
                    
                },
                addTunnel: function () {
                    
                    var self = this;
              
                    this.$validator.validateAll('form-3').then(() => {
                        
                        NA.socket.once("add-tunnel", function (data) {
                    
                            self.nTunnelId = data.id_tunnel;
                            console.log("socket once add tunnel : " + self.nTunnelId);
                            
                            self.tunnels.push({
                                "id": self.nTunnelId,
                                "type_tunnel": self.nTunnelType,
                                "debut_tunnel": self.nTunnelDebut,
                                "fin_tunnel": self.nTunnelFin,
                                "commentaire_tunnel": self.nTunnelCom
                            });
                            
                            self.nTunnelId = undefined;
                            self.nTunnelType = 'Type';
                            self.nTunnelDebut = '1';
                            self.nTunnelFin = '1';
                            self.nTunnelCom = 'Commentaire';
                            
                        });
                        
                        NA.socket.emit("add-tunnel", {
                            "id_semi": this.currentSemi.id_semi,
                            "type_tunnel": this.nTunnelType,
                            "debut_tunnel": this.nTunnelDebut,
                            "fin_tunnel": this.nTunnelFin,
                            "commentaire_tunnel": this.nTunnelCom                            
                        });
                        
                    });  
                },
                removeTunnel: function (index) {
                    
                    NA.socket.emit("remove-tunnel", {
                        "id_tunnel": this.tunnels[index].id
                    });
                    
                    this.tunnels.splice(index, 1);
                },
                addFieldItineraireButton: function () {
                    this.displayCurrentSemi = false;
                    this.editCurrentSemi = false;
                    this.edit = false;
                    this.addFieldItineraire = true;                    
                },
                removeFieldItineraireButton: function () {    
                    this.addFieldItineraire = false;
                    
                }
            }
        });
    };
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = vueVariete;
    } else {
        this.vueVariete = vueVariete;
    }
}).call(this);
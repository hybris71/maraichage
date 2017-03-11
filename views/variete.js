(function () {
    var vueVariete = function (view, data, callback) {
        
        return new Vue({
            template: view,
            data: data,
            methods: {
                changeEdit: function () {     
                    this.edit = true;
                    this.styleObjectEdit.display = "none";
                    this.styleObjectOk.display = "block";
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
                    this.styleObjectEdit.display = "block";
                    this.styleObjectOk.display = "none";
                    
                    if (callback) {
                        callback(data);
                    }
                },
                displaySemi: function (index) {
                    this.displayCurrentSemi = true;
                    this.action = "displaySemi";
                    this.indexSemi = index;
                    
                    if (callback) {
                        callback(data);
                    }
                },
                changeStyleEditSemi: function () {     
                    this.editCurrentSemi = true;
                    this.styleEditSemi.display = "none";
                    this.styleSaveSemi.display = "block";
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
                    this.styleEditSemi.display = "block";
                    this.styleSaveSemi.display = "none";
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
              
                    this.$validator.validateAll('form-4').then(() => {
                            
                        NA.socket.emit("add-repiquage", {
                            "id_semi": this.currentSemi.id_semi,
                            "debut_repi": this.nRepiquageDebut,
                            "fin_repi": this.nRepiquageFin,
                            "repi_commentaire": this.nRepiquageCom                            
                        });
                        
                        NA.socket.on("add-repiquage", function (data) {
                    
                            this.nRepiquageId = data.id_repiquage;
                            console.log("socket on add repiquage : " + data.id_repiquage);
                
                        });
                        
                       this.action = "displaySemi";
                    
                        if (callback) {
                            callback(data);
                        }
                        
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
              
                    this.$validator.validateAll('form-3').then(() => {
                            
                        NA.socket.emit("add-tunnel", {
                            "id_semi": this.currentSemi.id_semi,
                            "type_tunnel": this.nTunnelType,
                            "debut_tunnel": this.nTunnelDebut,
                            "fin_tunnel": this.nTunnelFin,
                            "commentaire_tunnel": this.nTunnelCom                            
                        });
                                                
                        NA.socket.on("add-tunnel", function (data) {
                    
                            this.nTunnelId = data.id_tunnel;
                            console.log("socket on add tunnel : " + data.id_tunnel);
                            
                        });
                        
                        this.action = "displaySemi";
                    
                        if (callback) {
                            callback(data);
                        }
                        
                    });  
                },
                removeTunnel: function (index) {
                    
                    NA.socket.emit("remove-tunnel", { 
                            "id_tunnel": this.tunnels[index].id
                        });
                    
                    this.tunnels.splice(index, 1);
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
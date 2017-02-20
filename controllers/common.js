exports.setModules = function () {
    var NA = this;
 
    NA.modules.mysql = require('mysql');
    NA.modules.vue = require('vue');
    NA.modules.veeValidate = require('vee-validate');
    global.Vue = NA.modules.vue;
    global.Vue.use(NA.modules.veeValidate);
    NA.modules.vueServerRenderer = require('vue-server-renderer');
    NA.modules.underscore = require('underscore');
    NA.models = {};
    NA.models.Plante = require('../models/connectors/plante.js');
    NA.models.Variete = require('../models/connectors/variete.js');
    NA.models.Famille = require('../models/connectors/famille.js');
    NA.models.Groupe = require('../models/connectors/groupe.js');
};
 
exports.setConfigurations = function (next) {
    var NA = this,
	path = NA.modules.path,
    mysql = NA.modules.mysql;
    // Cool
    // Cool
	// Cool
    NA.mySql = mysql.createPool(NA.webconfig._mysqlConfig);
    
    next();
};

exports.setSockets = function () {
    var NA = this,
        io = NA.io;

    io.on('connection', function (socket) {
        console.log("Un onglet est ouvert.");
        socket.on('disconnect', function () {
            console.log("Un onglet est fermé.");
        });
    });
};

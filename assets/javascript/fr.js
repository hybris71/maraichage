var VeeFr = {
    decimal: function (field, decimals) {
        if (!decimals) {
            decimals = [];
        }
        if (decimals && !decimals[0]) {
            decimals[0] = '*';
        }
        return field + " doit être un nombre et peut contenir " + (decimals[0] === '*' ? '' : decimals[0]) + " décimales.";
    },
    max: function (field, length) {
        return field + " ne peut pas contenir plus de " + length[0] + " caractères.";
    },
    min: function (field, length) {
        return field + " doit contenir au minimum " + length[0] + " caractères.";
    },
    required: function (field) {
        return field + " est obligatoire.";
    }
};
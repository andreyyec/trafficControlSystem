(function () {
    'use strict';
    var app = angular.module("simpleCRUD", ['ngMessages', 'ngMaterial']);
    //Registering icon set
    app.config(iconConfiguration);

    function iconConfiguration($mdIconProvider) {
        $mdIconProvider.defaultIconSet('icons_24x24.svg', 24);
    }
})();